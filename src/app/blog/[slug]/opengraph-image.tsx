import { ImageResponse } from "next/og";
import { blogPosts } from "@/lib/blogPosts";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return new Response("Not found", { status: 404 });
  }

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#F5F2EE",
          padding: "80px",
          fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif',
        }}
      >
        {/* Top Label */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <p
            style={{
              fontSize: "18px",
              fontWeight: "500",
              color: "rgba(17, 17, 17, 0.5)",
              margin: 0,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Blog Post · {post.date}
          </p>
        </div>

        {/* Main title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            marginTop: "-40px",
            maxWidth: "1020px",
          }}
        >
          <h1
            style={{
              fontSize: "52px",
              fontWeight: "700",
              color: "#111111",
              margin: 0,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            {post.title}
          </h1>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            borderTop: "1px solid rgba(17, 17, 17, 0.1)",
            paddingTop: "24px",
            width: "100%",
          }}
        >
          <span
            style={{
              fontSize: "20px",
              color: "#111111",
              fontWeight: "500",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Biswajit Rath
          </span>
          <div
            style={{
              marginLeft: "auto",
              fontSize: "18px",
              color: "rgba(17, 17, 17, 0.6)",
            }}
          >
            biswajitrath.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
