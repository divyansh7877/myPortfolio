"use client";

import { useEffect, useRef } from "react";

type Rgb = { r: number; g: number; b: number };
type Particle = {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    opacity: number;
};

function createParticle(canvas: HTMLCanvasElement): Particle {
    return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        opacity: Math.random() * 0.5 + 0.1,
    };
}

function updateParticle(p: Particle, canvas: HTMLCanvasElement) {
    p.x += p.speedX;
    p.y += p.speedY;

    if (p.x > canvas.width) p.x = 0;
    if (p.x < 0) p.x = canvas.width;
    if (p.y > canvas.height) p.y = 0;
    if (p.y < 0) p.y = canvas.height;
}

function drawParticle(ctx: CanvasRenderingContext2D, p: Particle, rgb: Rgb) {
    ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${p.opacity})`;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
}

export default function BackgroundAnimation() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let particles: Particle[] = [];
        let animationFrameId: number;
        let particleRgb = { r: 44, g: 90, b: 160 };

        const parseHexColor = (hex: string) => {
            const value = hex.trim();
            const normalized = value.startsWith("#") ? value.slice(1) : value;
            if (normalized.length !== 6) return null;
            const r = Number.parseInt(normalized.slice(0, 2), 16);
            const g = Number.parseInt(normalized.slice(2, 4), 16);
            const b = Number.parseInt(normalized.slice(4, 6), 16);
            if (Number.isNaN(r) || Number.isNaN(g) || Number.isNaN(b)) return null;
            return { r, g, b };
        };

        const syncThemeColor = () => {
            const accent = getComputedStyle(document.documentElement).getPropertyValue("--accent");
            const rgb = parseHexColor(accent);
            if (rgb) particleRgb = rgb;
        };

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();
        syncThemeColor();

        // Update when theme toggles (class changes on <html>)
        const observer = new MutationObserver(() => syncThemeColor());
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

        const init = () => {
            particles = [];
            const numberOfParticles = Math.floor((canvas.width * canvas.height) / 15000);
            for (let i = 0; i < numberOfParticles; i++) {
                particles.push(createParticle(canvas));
            }
        };

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle) => {
                updateParticle(particle, canvas);
                drawParticle(ctx, particle, particleRgb);
            });

            // Draw connections
            particles.forEach((a, index) => {
                for (let j = index + 1; j < particles.length; j++) {
                    const b = particles[j];
                    const dx = a.x - b.x;
                    const dy = a.y - b.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(${particleRgb.r}, ${particleRgb.g}, ${particleRgb.b}, ${0.1 * (1 - distance / 100)})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.stroke();
                    }
                }
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        init();
        animate();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationFrameId);
            observer.disconnect();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ background: "transparent" }}
        />
    );
}
