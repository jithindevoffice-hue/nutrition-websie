import { useEffect, useRef, useState } from 'react';
import styles from './HeroAnimationSection.module.css';

export const HeroAnimationSection = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isStarted, setIsStarted] = useState(false);
    
    const frameCount = 255;
    const imagesRef = useRef<HTMLImageElement[]>(new Array(frameCount));

    useEffect(() => {
        let loadedCount = 0;
        let currentIndex = 1;
        const maxConcurrent = 6; // strictly limit concurrent requests to avoid browser network choking!
        let activeRequests = 0;

        // Function to smartly load images iteratively without flooding the cache
        const loadNextBatch = () => {
            while (activeRequests < maxConcurrent && currentIndex <= frameCount) {
                const i = currentIndex;
                currentIndex++;
                activeRequests++;

                const img = new Image();
                const num = String(i).padStart(3, '0');
                
                img.onload = () => {
                    imagesRef.current[i - 1] = img;
                    loadedCount++;
                    activeRequests--;
                    
                    // As soon as the first 30 frames are sequentially loaded (1 full second of video), 
                    // we smoothly start playing it. 
                    if (!isStarted && loadedCount > 30) {
                        setIsStarted(true);
                    }

                    // Kick off the next image in the queue seamlessly
                    loadNextBatch();
                };

                img.onerror = () => {
                    activeRequests--;
                    loadedCount++;
                    loadNextBatch();
                };

                img.src = `/images/herosection/ezgif-frame-${num}.png`;
            }
        };

        // Initialize the first smart-batch of downloads
        loadNextBatch();

        // Extra fallback
        setTimeout(() => setIsStarted(true), 3000);

    }, [isStarted]);

    useEffect(() => {
        if (!isStarted || !canvasRef.current) return;
        
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d', { alpha: false }); 
        if (!ctx) return;

        let frameIndex = 0;
        let animationFrameId: number;
        let lastTimestamp = 0;

        const render = (timestamp: number) => {
            if (timestamp - lastTimestamp >= 33) { // 30 FPS Lock
                const img = imagesRef.current[frameIndex];

                // Check if the current frame successfully exists and is fully loaded.
                // If it's hitting a bottleneck, it briefly pauses (like normal video streaming)
                // without skipping frames or throwing an error!
                if (img && img.complete && img.naturalWidth > 0) {
                    if (frameIndex === 0 && canvas.width === 300) { 
                        // Set true dynamic dimension from first loaded frame exactly once
                        canvas.width = img.naturalWidth;
                        canvas.height = img.naturalHeight;
                    } else if (canvas.width !== img.naturalWidth && img.naturalWidth > 0) {
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
