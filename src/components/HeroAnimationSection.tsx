import { useEffect, useRef, useState } from 'react';
import styles from './HeroAnimationSection.module.css';

export const HeroAnimationSection = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isStarted, setIsStarted] = useState(false);
    
    // Updated to reflect the new 255 frames in the folder
    const frameCount = 255;
    const imagesRef = useRef<HTMLImageElement[]>([]);

    useEffect(() => {
        let loadedCount = 0;
        const tempImages: HTMLImageElement[] = [];

        for (let i = 1; i <= frameCount; i++) {
            const img = new Image();
            const num = String(i).padStart(3, '0');
            
            img.onload = () => {
                loadedCount++;
                
                // Start the animation as soon as the first tightly clustered buffer (10 frames) are ready.
                // This eliminates the long load time drastically!
                if (!isStarted && loadedCount > 10) {
                    setIsStarted(true);
                }
            };

            img.onerror = () => {
                loadedCount++;
            };

            img.src = `/images/herosection/ezgif-frame-${num}.png`;
            tempImages.push(img);
        }
        imagesRef.current = tempImages;

        // Fallback catch to start playing if the cache is incredibly fast
        setTimeout(() => setIsStarted(true), 2000); 

    }, []);

    useEffect(() => {
        if (!isStarted || !canvasRef.current || imagesRef.current.length === 0) return;
        
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d', { alpha: false }); 
        if (!ctx) return;

        let frameIndex = 0;
        let animationFrameId: number;
        let lastTimestamp = 0;

        const render = (timestamp: number) => {
            // ~30 FPS lock
            if (timestamp - lastTimestamp >= 33) {
                const img = imagesRef.current[frameIndex];

                // If the next frame is ready, draw it and advance index.
                // If it's NOT ready yet (still downloading), we gracefully freeze on the current frame 
                // just like a buffering Youtube video, rather than glitching!
                if (img && img.complete && img.naturalWidth > 0) {
                    // Set canvas bounds safely
                    if (frameIndex === 0) {
                        canvas.width = img.naturalWidth;
                        canvas.height = img.naturalHeight;
                    }
                    
                    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                    frameIndex = (frameIndex + 1) % frameCount;
                }
                lastTimestamp = timestamp;
            }
            animationFrameId = requestAnimationFrame(render);
        };

        animationFrameId = requestAnimationFrame(render);

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [isStarted]);

    return (
        <section className={styles.animationSection}>
            <canvas 
                ref={canvasRef} 
                className={styles.canvas}
                style={{ opacity: isStarted ? 1 : 0 }}
            />
        </section>
    );
};
