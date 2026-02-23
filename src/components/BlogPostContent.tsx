"use client";

import { useEffect, useRef } from "react";
import mermaid from "mermaid";

type BlogPostContentProps = {
  html: string;
  className?: string;
};

let mermaidInitialized = false;

export function BlogPostContent({ html, className }: BlogPostContentProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    if (!mermaidInitialized) {
      mermaid.initialize({
        startOnLoad: false,
        securityLevel: "loose",
      });
      mermaidInitialized = true;
    }

    const mermaidCodeBlocks = containerRef.current.querySelectorAll(
      "pre > code.language-mermaid",
    );

    mermaidCodeBlocks.forEach((codeBlock, index) => {
      const pre = codeBlock.parentElement;
      if (!pre) {
        return;
      }

      const diagramContainer = document.createElement("div");
      diagramContainer.className = "mermaid";
      diagramContainer.id = `mermaid-${index}-${Date.now()}`;
      diagramContainer.textContent = codeBlock.textContent ?? "";

      pre.replaceWith(diagramContainer);
    });

    const mermaidNodes = containerRef.current.querySelectorAll<HTMLElement>(".mermaid");
    if (mermaidNodes.length > 0) {
      mermaid.run({ nodes: mermaidNodes });
    }
  }, [html]);

  return <div ref={containerRef} className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}
