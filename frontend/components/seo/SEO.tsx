import { Metadata } from "next";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  keywords?: string;
}

export function generateSEOMetadata({
  title,
  description,
  path = "",
  ogImage = "/og-image.jpg",
  keywords,
}: SEOProps): Metadata {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://neptune-software.com";
  const fullUrl = `${siteUrl}${path}`;
  const fullOgImage = `${siteUrl}${ogImage}`;

  return {
    title: `${title} | Neptune Software Solutions`,
    description,
    keywords: keywords || "SaaS development, web development, software engineering, cloud solutions, API development",
    authors: [{ name: "Neptune Software Solutions" }],
    creator: "Neptune Software Solutions",
    publisher: "Neptune Software Solutions",
    openGraph: {
      type: "website",
      locale: "en_US",
      url: fullUrl,
      title: `${title} | Neptune Software Solutions`,
      description,
      siteName: "Neptune Software Solutions",
      images: [
        {
          url: fullOgImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Neptune Software Solutions`,
      description,
      images: [fullOgImage],
    },
    alternates: {
      canonical: fullUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
