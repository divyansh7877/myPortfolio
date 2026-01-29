"use client";

/* eslint-disable react-hooks/set-state-in-effect */

import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

// Detect mobile/touch devices
function isMobileDevice() {
  if (typeof window === "undefined") return false;
  return (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) || window.matchMedia("(pointer: coarse)").matches
  );
}

// Detect if user prefers reduced motion
function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

interface NeuralNetworkProps {
  color: string;
  particleCount: number;
}

function NeuralNetwork({ color, particleCount }: NeuralNetworkProps) {
  const groupRef = useRef<THREE.Group>(null);
  const frameCount = useRef(0);
  const r = 20; // radius of the cloud

  // Create stable random points - only once
  const { positions, linePositions } = useMemo(() => {
    const tempPositions = new Float32Array(particleCount * 3);
    const tempLinePositions: number[] = [];

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
      // Limit connections on mobile for performance
      const connectionFrequency = particleCount > 50 ? 5 : 3;
      if (i > 0 && i % connectionFrequency === 0) {
        const prevX = tempPositions[(i - 1) * 3];
        const prevY = tempPositions[(i - 1) * 3 + 1];
        const prevZ = tempPositions[(i - 1) * 3 + 2];
        tempLinePositions.push(x, y, z, prevX, prevY, prevZ);
      }
    }

    return {
      positions: tempPositions,
      linePositions: new Float32Array(tempLinePositions),
    };
  }, [particleCount]);

  // Throttled scroll handler
  const scrollRef = useRef(0);
  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;

    // Skip frames on mobile for performance
    frameCount.current += 1;
    const skipFrames = particleCount < 50 ? 2 : 1;
    if (frameCount.current % skipFrames !== 0) return;

    // Basic rotation - slower on mobile
    const rotationSpeed = particleCount < 50 ? 0.0005 : 0.001;
    groupRef.current.rotation.y += rotationSpeed;
    groupRef.current.rotation.x += rotationSpeed * 0.5;

    // Scroll interaction - use ref instead of reading window directly
    groupRef.current.rotation.y += 0.00005 * scrollRef.current;

    // Gentle breathing animation - only on desktop
    if (particleCount > 50) {
      const s = 1 + Math.sin(state.clock.elapsedTime * 0.3) * 0.03;
      groupRef.current.scale.set(s, s, s);
    }
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
          opacity={0.6}
          sizeAttenuation={true}
        />
      </points>
      {linePositions.length > 0 && (
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
          <lineBasicMaterial color={color} transparent opacity={0.1} />
        </lineSegments>
      )}
    </group>
  );
}

// CSS fallback for mobile/reduced motion
function CSSBackground({ color }: { color: string }) {
  return (
    <div
      className="absolute inset-0 opacity-20"
      style={{
        background: `
          radial-gradient(circle at 20% 80%, ${color}30 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, ${color}20 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, ${color}10 0%, transparent 70%)
        `,
      }}
    />
  );
}

export default function BackgroundAnimation() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [useCanvas, setUseCanvas] = useState(true);
  const [particleCount, setParticleCount] = useState(80);

  useEffect(() => {
    setMounted(true);

    // Check device capabilities
    const mobile = isMobileDevice();
    const reducedMotion = prefersReducedMotion();
    const lowPowerMode = 
      typeof navigator !== "undefined" && 
      "getBattery" in navigator;

    // Use CSS fallback for mobile or reduced motion preference
    const shouldUseCanvas = !mobile && !reducedMotion;
    setUseCanvas(shouldUseCanvas);

    // Reduce particles on lower-end devices
    setParticleCount(mobile || reducedMotion ? 0 : mobile ? 30 : 80);

    const checkTheme = () => {
      const isDarkMode = document.documentElement.classList.contains("dark");
      setIsDark(isDarkMode);
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  // Match colors from globals.css: Light: #2c5aa0, Dark: #3b82f6
  const particleColor = mounted && isDark ? "#3b82f6" : "#2c5aa0";

  // Render CSS fallback for mobile or reduced motion
  if (!useCanvas) {
    return (
      <div className="fixed inset-0 pointer-events-none z-[-1]">
        <CSSBackground color={particleColor} />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1]">
      <Canvas
        camera={{ position: [0, 0, 30], fov: 60 }}
        gl={{
          alpha: true,
          antialias: false, // Disable antialias for performance
          powerPreference: "low-power", // Hint for battery saving
        }}
        dpr={[1, 1.5]} // Cap DPR for performance
        frameloop="always"
      >
        <ambientLight intensity={0.5} />
        <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.3}>
          <NeuralNetwork color={particleColor} particleCount={particleCount} />
        </Float>
      </Canvas>
    </div>
  );
}
