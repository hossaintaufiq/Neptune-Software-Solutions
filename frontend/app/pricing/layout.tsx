import { generateSEOMetadata } from "@/components/seo/SEO";

export const metadata = generateSEOMetadata({
  title: "Pricing",
  description: "Transparent, custom pricing for SaaS and web development projects. Starter, Growth, and Enterprise plans tailored to your needs.",
  path: "/pricing",
  keywords: "software development pricing, SaaS development cost, custom software pricing, enterprise software pricing",
});

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
