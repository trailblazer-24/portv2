"use client";

import { useState, useEffect } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [count, setCount] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // Animate counter from 0 to 100
    const duration = 2500; // 2.5 seconds
    const steps = 100;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      setCount(currentStep);

      if (currentStep >= steps) {
        clearInterval(interval);
        // Small delay before exit animation
        setTimeout(() => {
          setIsExiting(true);
        }, 300);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isExiting) {
      return;
    }

    const exitTimeout = setTimeout(() => {
      onComplete();
    }, 800);

    return () => clearTimeout(exitTimeout);
  }, [isExiting, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col bg-[#F5F2EE] transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
        isExiting ? "-translate-x-full" : "translate-x-0"
      }`}
    >
      {/* Line */}
      <div className="absolute left-0 right-0 top-[60%]">
        <div
          className={`h-px bg-[#111111] ${isMounted ? "animate-line-grow" : "scale-x-0"}`}
          style={{ animationDuration: "2.5s" }}
        />
      </div>

      {/* Counter */}
      <div className="absolute bottom-[15%] left-6 sm:left-8">
        <div className="flex items-start">
          <span
            className={`text-[clamp(6rem,22vw,10rem)] font-bold leading-none tracking-[-0.03em] text-[#111111] ${
              isMounted ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            {String(count).padStart(2, "0")}
          </span>
          <span
            className={`mt-4 text-[clamp(2rem,6vw,5rem)] font-bold leading-none tracking-[-0.02em] text-[#111111] sm:mt-8 ${
              isMounted ? "animate-fade-in" : "opacity-0"
            }`}
            style={{ animationDelay: "200ms" }}
          >
            %
          </span>
        </div>
      </div>

      {/* Optional: Loading text */}
      <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8">
        <span
          className={`font-mono text-xs uppercase tracking-widest text-[#111111]/50 ${
            isMounted ? "animate-fade-in" : "opacity-0"
          }`}
          style={{ animationDelay: "300ms" }}
        >
          Loading
        </span>
      </div>
    </div>
  );
}
