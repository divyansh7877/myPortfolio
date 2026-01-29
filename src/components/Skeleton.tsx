"use client";

import { motion } from "framer-motion";

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className = "" }: SkeletonProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg bg-[var(--code-bg)] ${className}`}
    >
      <motion.div
        className="absolute inset-0 -translate-x-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(var(--foreground-rgb), 0.05), transparent)",
        }}
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

// Section skeleton for main content areas
export function SectionSkeleton() {
  return (
    <div className="py-20 px-4 space-y-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Title */}
        <Skeleton className="h-10 w-48" />

        {/* Content cards */}
        <div className="space-y-6">
          <div className="bg-[var(--card-bg)] border border-[color:var(--border)] rounded-xl p-6 space-y-4">
            <div className="flex justify-between">
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-4 w-24" />
            </div>
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <div className="space-y-2 pt-2">
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-5/6" />
              <Skeleton className="h-3 w-4/5" />
            </div>
          </div>

          <div className="bg-[var(--card-bg)] border border-[color:var(--border)] rounded-xl p-6 space-y-4">
            <div className="flex justify-between">
              <Skeleton className="h-6 w-40" />
              <Skeleton className="h-4 w-24" />
            </div>
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </div>
      </div>
    </div>
  );
}

// Project card skeleton
export function ProjectCardSkeleton() {
  return (
    <div className="bg-[var(--card-bg)] border-2 border-[color:var(--border)] rounded-xl overflow-hidden h-full">
      <div className="p-6 h-full flex flex-col space-y-4">
        <Skeleton className="h-6 w-3/4" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
        <div className="flex flex-wrap gap-2 pt-2">
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-14 rounded-full" />
          <Skeleton className="h-6 w-18 rounded-full" />
        </div>
        <div className="mt-auto pt-4 border-t border-[color:var(--border)] flex gap-4">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-14" />
        </div>
      </div>
    </div>
  );
}

// Hero section skeleton
export function HeroSkeleton() {
  return (
    <section className="min-h-screen flex items-center justify-center p-4 pt-20">
      <div className="max-w-4xl w-full space-y-8">
        {/* Title */}
        <div className="space-y-4">
          <Skeleton className="h-16 md:h-20 w-64 md:w-96" />
          <Skeleton className="h-6 md:h-8 w-full max-w-xl" />
        </div>

        {/* Terminal card */}
        <div className="bg-[var(--card-bg)] border-2 border-[color:var(--border)] rounded-lg overflow-hidden">
          <div className="bg-[var(--code-bg)] px-4 py-3 flex items-center gap-2 border-b-2 border-[color:var(--border)]">
            <div className="flex gap-1.5">
              <Skeleton className="w-3 h-3 rounded-full" />
              <Skeleton className="w-3 h-3 rounded-full" />
              <Skeleton className="w-3 h-3 rounded-full" />
            </div>
            <Skeleton className="h-3 w-32 ml-2" />
          </div>
          <div className="p-6 space-y-3">
            <Skeleton className="h-4 w-48" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4" />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <Skeleton className="h-12 w-36 rounded-full" />
          <Skeleton className="h-12 w-32 rounded-full" />
          <Skeleton className="h-12 w-28 rounded-full" />
        </div>
      </div>
    </section>
  );
}

// Skills section skeleton
export function SkillsSkeleton() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        <Skeleton className="h-10 w-32" />
        <Skeleton className="h-4 w-64" />

        <div className="h-[500px] md:h-[600px] bg-[var(--card-bg)] rounded-2xl border-2 border-[color:var(--border)] relative overflow-hidden">
          {/* Animated placeholder nodes */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid grid-cols-3 gap-8 md:gap-16">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[var(--code-bg)]"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Full page loading state
export function PageSkeleton() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <HeroSkeleton />
      <SectionSkeleton />
      <SkillsSkeleton />
      <div className="py-20 px-4 bg-[var(--surface)]">
        <div className="max-w-4xl mx-auto">
          <Skeleton className="h-10 w-40 mb-8" />
          <div className="grid md:grid-cols-2 gap-6">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="bg-[var(--card-bg)] border border-[color:var(--border)] rounded-xl p-6 space-y-4"
              >
                <div className="flex justify-between">
                  <Skeleton className="h-5 w-32" />
                  <Skeleton className="h-4 w-20" />
                </div>
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-3 w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skeleton;
