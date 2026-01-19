import { generateSEOMetadata } from "@/components/seo/SEO";

export const metadata = generateSEOMetadata({
  title: "Contact Us",
  description: "Get in touch with Neptune Software Solutions. Schedule a free consultation to discuss your SaaS or web development project.",
  path: "/contact",
  keywords: "contact Neptune Software Solutions, software development consultation, SaaS development inquiry",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
