import { PageContent } from "@/components/PageContent";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.biswajitrath.com").replace(/\/+$/, "");

export default function Home() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Biswajit Rath",
    url: siteUrl,
    jobTitle: "Software Engineer",
    description:
      "Backend Developer specializing in building scalable APIs, secure systems, and high-performance server-side applications.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <PageContent />
    </>
  );
}
