"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [count, setCount] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
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

  const handleExitComplete = () => {
    onComplete();
  };

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {!isExiting && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col bg-[#F5F2EE]"
          exit={{ x: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Line */}
          <div className="absolute left-0 right-0 top-[60%]">
            <motion.div
              className="h-px bg-[#111111]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: "left" }}
            />
          </div>

          {/* Counter */}
          <div className="absolute bottom-[15%] left-6 sm:left-8">
            <div className="flex items-start">
              <motion.span
                className="text-[clamp(6rem,22vw,10rem)] font-bold leading-none tracking-[-0.03em] text-[#111111]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {String(count).padStart(2, "0")}
              </motion.span>
              <motion.span
                className="mt-4 text-[clamp(2rem,6vw,5rem)] font-bold leading-none tracking-[-0.02em] text-[#111111] sm:mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                %
              </motion.span>
            </div>
          </div>

          {/* Optional: Loading text */}
          <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8">
            <motion.span
              className="font-mono text-xs uppercase tracking-widest text-[#111111]/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Loading
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
