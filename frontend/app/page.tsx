import { generateSEOMetadata } from "@/components/seo/SEO";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyNeptune from "@/components/home/WhyNeptune";
import TechStack from "@/components/home/TechStack";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";

export const metadata = generateSEOMetadata({
  title: "Home",
  description: "Enterprise-Grade SaaS & Web Solutions Built for Scale. Neptune Software Solutions helps startups and enterprises design, build, and scale secure, high-performance digital products.",
  path: "/",
  keywords: "SaaS development, web development, software engineering, cloud solutions, API development, scalable software, enterprise software",
});

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesPreview />
      <WhyNeptune />
      <TechStack />
      <Testimonials />
      <CTA />
    </>
  );
}
