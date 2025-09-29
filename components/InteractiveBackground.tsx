
import React, { useRef, useEffect } from 'react';

// Helper to get a random value in a range
const random = (min: number, max: number) => Math.random() * (max - min) + min;

// A class for a single animated wave
class Wave {
    private ctx: CanvasRenderingContext2D;
    private canvasWidth: number;
    private y: number;
    private length: number;
    private amplitude: number;
    private speed: number;
    private color: string;
    private offset: number;

    constructor(ctx: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number, color: string) {
        this.ctx = ctx;
        this.canvasWidth = canvasWidth;
        this.color = color;
        
        // Wave properties initialized with random values for variety
        this.y = random(canvasHeight * 0.4, canvasHeight * 0.6);
        this.length = random(0.005, 0.02);
        this.amplitude = random(50, 150);
        this.speed = random(0.005, 0.01);
        this.offset = random(0, Math.PI * 2);
    }

    // Recalculate properties on window resize
    resize(width: number, height: number) {
        this.canvasWidth = width;
        // Re-center y to keep it proportional to the new height
        this.y = random(height * 0.4, height * 0.6);
    }

    // Draw the wave for the current animation frame
    draw(tick: number) {
        this.ctx.beginPath();
        this.ctx.moveTo(0, this.y);

        for (let i = 0; i <= this.canvasWidth; i++) {
            // Calculate y-position using a sine function for a wavy line
            // A secondary sine wave is used to vary amplitude over time, creating a breathing effect
            const waveY = this.y + Math.sin(i * this.length + tick * this.speed + this.offset) * this.amplitude * Math.sin(tick * 0.01);
            this.ctx.lineTo(i, waveY);
        }

        this.ctx.strokeStyle = this.color;
        this.ctx.stroke();
        this.ctx.closePath();
    }
}

const InteractiveBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let waves: Wave[] = [];
        let tick = 0;

        // Colors based on the site's theme (sky blue and slate) with low opacity for subtlety
        const WAVE_COLORS = [
            'rgba(14, 165, 233, 0.1)', // sky-500
            'rgba(51, 65, 85, 0.2)',   // slate-700
            'rgba(30, 41, 59, 0.3)',   // slate-800
        ];

        const init = () => {
            if (!canvas || !ctx) return;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            waves = [];
            WAVE_COLORS.forEach(color => {
                waves.push(new Wave(ctx, canvas.width, canvas.height, color));
            });
        };

        const animate = () => {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            waves.forEach(wave => wave.draw(tick));
            
            tick++;
            animationFrameId = requestAnimationFrame(animate);
        };

        const handleResize = () => {
            cancelAnimationFrame(animationFrameId);
            if (canvas) {
                 init();
            }
            animate();
        };
        
        window.addEventListener('resize', handleResize);

        init();
        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 bg-slate-900" />;
};

export default InteractiveBackground;
