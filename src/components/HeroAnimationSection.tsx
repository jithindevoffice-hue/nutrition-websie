import { useEffect, useRef, useState } from 'react';
import styles from './HeroAnimationSection.module.css';

export const HeroAnimationSection = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [loadingProgress, setLoadingProgress] = useState(0);
    const frameCount = 287;
    const imagesRef = useRef<HTMLImageElement[]>([]);

    useEffect(() => {
        let loadedCount = 0;
        const tempImages: HTMLImageElement[] = [];

        // Preload all 287 images before starting animation to prevent flashing
        for (let i = 1; i <= frameCount; i++) {
            const img = new Image();
            const num = String(i).padStart(3, '0');
            img.src = `/images/herosection/ezgif-frame-${num}.png`;
            img.onload = () => {
                loadedCount++;
                setLoadingProgress(Math.floor((loadedCount / frameCount) * 100));
                if (loadedCount === frameCount) {
                    setIsLoaded(true);
                }
            };
            // Graceful degradation for broken links
            img.onerror = () => {
                loadedCount++;
                if (loadedCount === frameCount) {
                    setIsLoaded(true);
                }
            };
            tempImages.push(img);
        }
        imagesRef.current = tempImages;
    }, []);

    useEffect(() => {
        if (!isLoaded || !canvasRef.current || imagesRef.current.length === 0) return;
        
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d', { alpha: false }); // alpha:false boosts performance if images are opaque. If they have transparency, remove this.
        if (!ctx) return;

        // Set canvas to inherent size of the first valid frame
        const firstValidFrame = imagesRef.current.find(img => img.width > 0);
        if (firstValidFrame) {
            canvas.width = firstValidFrame.width;
            canvas.height = firstValidFrame.height;
        }

        let frameIndex = 0;
        let animationFrameId: number;
        let lastTimestamp = 0;

        // Render loop targeting 30 FPS
        const render = (timestamp: number) => {
            if (timestamp - lastTimestamp >= 33) {
                const img = imagesRef.current[frameIndex];
                
                // Only draw if image is valid/loaded
                if (img && img.width > 0) {
                    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                }
                
                frameIndex = (frameIndex + 1) % frameCount;
                lastTimestamp = timestamp;
            }
            animationFrameId = requestAnimationFrame(render);
        };

        animationFrameId = requestAnimationFrame(render);

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [isLoaded]);

    return (
        <section className={styles.animationSection}>
            <div 
                className={styles.loaderWrapper} 
                style={{ opacity: isLoaded ? 0 : 1, transition: 'opacity 0.5s ease', pointerEvents: isLoaded ? 'none' : 'auto' }}
            >
                <div className={styles.loader}>
                    Loading Experience...
                    <div className={styles.progressBar}>
                        <div className={styles.progressFill} style={{ width: `${loadingProgress}%` }}></div>
                    </div>
                </div>
            </div>
            
            <canvas 
                ref={canvasRef} 
                className={styles.canvas}
                style={{ opacity: isLoaded ? 1 : 0 }}
            />
        </section>
    );
};
