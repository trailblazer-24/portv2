import type { BlogPostIconName } from "@/lib/blogPosts";

type BlogPostIconProps = {
  icon: BlogPostIconName;
};

export function BlogPostIcon({ icon }: BlogPostIconProps) {
  const commonProps = {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "text-[#0A0A0A]",
  };

  if (icon === "terminal") {
    return (
      <svg {...commonProps}>
        <path
          d="M4 5.5H20V18.5H4V5.5ZM7 9L10 12L7 15M12.5 15H16.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (icon === "database") {
    return (
      <svg {...commonProps}>
        <ellipse
          cx="12"
          cy="6.5"
          rx="6.5"
          ry="2.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M5.5 6.5V12C5.5 13.4 8.41 14.5 12 14.5C15.59 14.5 18.5 13.4 18.5 12V6.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M5.5 12V17.5C5.5 18.9 8.41 20 12 20C15.59 20 18.5 18.9 18.5 17.5V12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (icon === "api") {
    return (
      <svg {...commonProps}>
        <rect
          x="3.5"
          y="5"
          width="17"
          height="14"
          rx="2.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M3.5 9.5H20.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <text
          x="6.2"
          y="8"
          fill="currentColor"
          fontSize="3.6"
          fontWeight="700"
          fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"
        >
          200
        </text>
        <text
          x="8"
          y="15.4"
          fill="currentColor"
          fontSize="4.2"
          fontWeight="700"
          fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"
        >
          OK
        </text>
      </svg>
    );
  }

  if (icon === "cloud") {
    return (
      <svg {...commonProps}>
        <path
          d="M7.5 18.5H17.5C19.43 18.5 21 16.93 21 15C21 13.16 19.58 11.65 17.78 11.51C17.25 9.19 15.17 7.5 12.7 7.5C10.08 7.5 7.9 9.41 7.47 11.94C5.78 12.27 4.5 13.76 4.5 15.55C4.5 17.59 6.16 18.5 7.5 18.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path
        d="M4.5 12H19.5M12 4.5V19.5M7 7L17 17M17 7L7 17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}