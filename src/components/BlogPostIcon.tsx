"use client";

interface BlogPostIconProps {
  icon: string;
}

export function BlogPostIcon({ icon }: BlogPostIconProps) {
  switch (icon) {
    case "database":
      return (
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#0A0A0A]"
        >
          <rect
            x="12"
            y="16"
            width="32"
            height="8"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M12 20 L12 36 C12 37.1046 12.8954 38 14 38 L42 38 C43.1046 38 44 37.1046 44 36 L44 20"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
          <line
            x1="12"
            y1="28"
            x2="44"
            y2="28"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M18 21 L18 23 M25 21 L25 23 M32 21 L32 23"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "path":
      return (
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#0A0A0A]"
        >
          <rect
            x="14"
            y="14"
            width="28"
            height="28"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M20 28 L24 24 L28 32 L32 20 L36 28"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle cx="24" cy="24" r="1.5" fill="currentColor" />
          <circle cx="32" cy="20" r="1.5" fill="currentColor" />
          <circle cx="36" cy="28" r="1.5" fill="currentColor" />
        </svg>
      );
    case "network":
      return (
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#0A0A0A]"
        >
          <circle
            cx="28"
            cy="20"
            r="4"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
          <circle
            cx="18"
            cy="36"
            r="4"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
          <circle
            cx="38"
            cy="36"
            r="4"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M26 23 L20 33 M30 23 L36 33"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "code":
      return (
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#0A0A0A]"
        >
          <rect
            x="14"
            y="18"
            width="28"
            height="20"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M22 25 L19 28 L22 31"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M34 25 L37 28 L34 31"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <line
            x1="30"
            y1="24"
            x2="26"
            y2="32"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    default:
      return (
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#0A0A0A]"
        >
          <rect
            x="18"
            y="18"
            width="20"
            height="20"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      );
  }
}
