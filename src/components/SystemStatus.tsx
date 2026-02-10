"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Metric = {
  id: string;
  display: string;
};

export function SystemStatus() {
  const [metrics, setMetrics] = useState<Metric[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const tooltipTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Collect performance metrics
  useEffect(() => {
    const collectMetrics = () => {
      const metricsArray: Metric[] = [];

      // Get render time
      const paintEntries = performance.getEntriesByType("paint");
      const fpEntry = paintEntries.find((p) => p.name === "first-paint");
      const renderTime = fpEntry ? Math.round(fpEntry.startTime) : 0;

      // Get network requests
      const resourceEntries = performance.getEntriesByType("resource");
      const networkCount = resourceEntries.length;

      // Combined metric: "Rendered in 183ms · 24 requests"
      if (renderTime > 0) {
        metricsArray.push({
          id: "performance",
          display: `Rendered in ${renderTime}ms · ${networkCount} requests`,
        });
      }

      // Static metric
      metricsArray.push({
        id: "measured-locally",
        display: "Measured locally in your browser",
      });

      setMetrics(metricsArray);
    };

    // Use requestIdleCallback to avoid blocking the main thread
    if ("requestIdleCallback" in window) {
      requestIdleCallback(collectMetrics, { timeout: 2000 });
    } else {
      setTimeout(collectMetrics, 1000);
    }
  }, []);

  // Rotation logic with pause on hover
  useEffect(() => {
    if (metrics.length < 2) return;

    const startTimer = () => {
      timerRef.current = setTimeout(() => {
        if (!isHovered) {
          setCurrentIndex((prev) => (prev + 1) % metrics.length);
        }
        startTimer();
      }, 3000); // Fixed 5s rotation
    };

    startTimer();

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [metrics, isHovered]);

  // Tooltip visibility
  const handleMouseEnter = () => {
    setIsHovered(true);
    tooltipTimeoutRef.current = setTimeout(() => {
      setShowTooltip(true);
    }, 50);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setShowTooltip(false);
    if (tooltipTimeoutRef.current) clearTimeout(tooltipTimeoutRef.current);
  };

  if (metrics.length === 0) return null;

  const currentMetric = metrics[currentIndex];

  return (
    <div
      ref={containerRef}
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="status"
      aria-live="polite"
    >
      {/* Metric display with cross-dissolve transition */}
      <AnimatePresence mode="wait">
        <motion.span
          key={currentMetric.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="font-mono text-[11px] text-[#0A0A0A]/35 font-medium"
          style={{ fontVariantNumeric: "tabular-nums" }}
        >
          {currentMetric.display}
        </motion.span>
      </AnimatePresence>

      {/* Tooltip - no arrow, minimal */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.05 }}
            className="absolute bottom-full left-0 mb-2 pointer-events-none"
          >
            <div className="px-2 py-1.5 bg-[#0A0A0A] text-[#FAFAFA] rounded-sm whitespace-nowrap">
              <p className="text-[10px] leading-snug text-[#FAFAFA]/80">
                Performance metrics are measured
                <br />
                client-side and reflect this session only.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
