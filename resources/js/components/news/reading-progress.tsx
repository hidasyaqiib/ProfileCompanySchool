/**
 * ReadingProgress
 *
 * A thin progress bar fixed to the top of the viewport that reflects
 * how far the user has scrolled through the page. Uses a requestAnimationFrame
 * loop so it stays buttery-smooth without flickering.
 *
 * @example
 *   <ReadingProgress />
 */
import React, { useEffect, useRef, useState } from 'react';

const ReadingProgress: React.FC = () => {
    const [progress, setProgress] = useState(0);
    const rafRef = useRef<number>(0);

    useEffect(() => {
        const updateProgress = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const pct = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;
            setProgress(pct);
            rafRef.current = 0;
        };

        const onScroll = () => {
            if (!rafRef.current) {
                rafRef.current = requestAnimationFrame(updateProgress);
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        updateProgress(); // initialise on mount

        return () => {
            window.removeEventListener('scroll', onScroll);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    return (
        <div
            aria-hidden="true"
            className="fixed top-0 left-0 z-[200000] h-[3px] w-full bg-transparent"
        >
            <div
                className="h-full origin-left transition-none"
                style={{
                    width: `${progress}%`,
                    background: 'linear-gradient(90deg, #2ECC71 0%, #27ae60 100%)',
                }}
            />
        </div>
    );
};

export default ReadingProgress;
