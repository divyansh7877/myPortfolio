"use client";

/* eslint-disable react-hooks/set-state-in-effect */

import { useState, useEffect, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function NeuralNetwork({ color }: { color: string }) {
    const groupRef = useRef<THREE.Group>(null);

    // Generate static random points for nodes
    const particleCount = 200;
    const r = 20; // radius of the cloud

    // Create stable random points
    const { positions, linePositions } = useMemo(() => {
        const tempPositions = new Float32Array(particleCount * 3);
        const tempLinePositions = [];

        for (let i = 0; i < particleCount; i++) {
            const theta = THREE.MathUtils.randFloatSpread(360);
            const phi = THREE.MathUtils.randFloatSpread(360);

            // Random point in sphere
            const x = r * Math.sin(theta) * Math.cos(phi);
            const y = r * Math.sin(theta) * Math.sin(phi);
            const z = r * Math.cos(theta);

            tempPositions[i * 3] = x;
            tempPositions[i * 3 + 1] = y;
            tempPositions[i * 3 + 2] = z;

            // Connect to close neighbors (simple logic for visual effect)
            if (i > 0 && i % 3 === 0) {
                const prevX = tempPositions[(i - 1) * 3];
                const prevY = tempPositions[(i - 1) * 3 + 1];
                const prevZ = tempPositions[(i - 1) * 3 + 2];
                tempLinePositions.push(x, y, z, prevX, prevY, prevZ);
            }
        }

        return {
            positions: tempPositions,
            linePositions: new Float32Array(tempLinePositions)
        };
    }, []);

    useFrame((state) => {
        if (!groupRef.current) return;

        // Basic rotation
        groupRef.current.rotation.y += 0.001;
        groupRef.current.rotation.x += 0.0005;

        // Scroll interaction
        const scrollY = typeof window !== 'undefined' ? window.scrollY : 0;
        groupRef.current.rotation.y += 0.0001 * scrollY * 0.05;

        // Gentle breathing animation
        const s = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
        groupRef.current.scale.set(s, s, s);
    });

    return (
        <group ref={groupRef}>
            <points>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={particleCount}
                        array={positions}
                        itemSize={3}
                        args={[positions, 3]}
                    />
                </bufferGeometry>
                <pointsMaterial
                    size={0.15}
                    color={color}
                    transparent
                    opacity={0.8}
                    sizeAttenuation={true}
                />
            </points>
            <lineSegments>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={linePositions.length / 3}
                        array={linePositions}
                        itemSize={3}
                        args={[linePositions, 3]}
                    />
                </bufferGeometry>
                <lineBasicMaterial color={color} transparent opacity={0.15} />
            </lineSegments>
        </group>
    );
}

export default function BackgroundAnimation() {
    const [mounted, setMounted] = useState(false);
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        setMounted(true);

        const checkTheme = () => {
            // Check if 'dark' class is present on html element
            const isDarkMode = document.documentElement.classList.contains("dark");
            setIsDark(isDarkMode);
        };

        checkTheme();

        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

        return () => observer.disconnect();
    }, []);

    // Match colors from globals.css: Light: #2c5aa0, Dark: #3b82f6
    const particleColor = mounted && isDark ? "#3b82f6" : "#2c5aa0";

    return (
        <div className="fixed inset-0 pointer-events-none z-[-1]">
            <Canvas
                camera={{ position: [0, 0, 30], fov: 60 }}
                gl={{ alpha: true, antialias: true }}
                dpr={[1, 2]}
            >
                <ambientLight intensity={0.5} />
                <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                    <NeuralNetwork color={particleColor} />
                </Float>
            </Canvas>
        </div>
    );
}
