import { generateSEOMetadata } from "@/components/seo/SEO";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";

export const metadata = generateSEOMetadata({
  title: "About Us",
  description: "Learn about Neptune Software Solutions—our mission, vision, and engineering culture. We build scalable digital products with a quality-first mindset.",
  path: "/about",
  keywords: "about Neptune Software Solutions, software engineering company, SaaS development team",
});

const values = [
  {
    title: "Quality First",
    description: "We never compromise on code quality, testing, or documentation. Every line of code is written with care and attention to detail.",
  },
  {
    title: "Long-Term Partnerships",
    description: "We build relationships, not just products. Our clients become partners, and we're invested in their long-term success.",
  },
  {
    title: "Technical Excellence",
    description: "We stay at the forefront of technology, continuously learning and applying best practices to deliver cutting-edge solutions.",
  },
  {
    title: "Security & Performance",
    description: "Security and performance aren't afterthoughts—they're built into every decision we make from day one.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-sky-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Engineering Scalable Digital Products
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Neptune Software Solutions is a specialized software engineering company focused on building enterprise-grade SaaS and web applications. We combine technical excellence with business acumen to deliver solutions that drive real results.
            </p>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                To empower startups and enterprises with scalable, secure, and high-performance digital products. We believe that great software is built on strong foundations—clean architecture, robust backend systems, and thoughtful design.
              </p>
            </Card>
            <Card>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Our Vision
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                To be the go-to partner for companies that value quality, security, and scalability. We envision a future where every digital product is built with long-term success in mind, not just quick wins.
              </p>
            </Card>
          </div>

          <SectionHeader
            title="Our Values"
            description="The principles that guide everything we do"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} hover>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Engineering Culture */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-sky-50 dark:from-gray-900 dark:to-gray-800">
        <Container>
          <SectionHeader
            title="Engineering Culture"
            description="How we work and what makes us different"
          />
          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Backend-First Mindset
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We believe that strong backend architecture is the foundation of every great product. Before we build beautiful interfaces, we ensure the systems behind them are robust, scalable, and secure.
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Clean Architecture
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Every system we build follows clean architecture principles. We write code that's maintainable, testable, and scalable—code that your team will thank us for years from now.
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Continuous Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Technology evolves rapidly, and so do we. We stay current with the latest tools, frameworks, and best practices to ensure your product stays competitive.
              </p>
            </Card>
          </div>
        </Container>
      </section>
    </div>
  );
}
