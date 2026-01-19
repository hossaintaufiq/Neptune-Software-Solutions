import { generateSEOMetadata } from "@/components/seo/SEO";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { fetchServices } from "@/lib/api";

export const metadata = generateSEOMetadata({
  title: "Services",
  description: "Comprehensive software development services: SaaS development, web applications, backend engineering, cloud solutions, and UI/UX design.",
  path: "/services",
  keywords: "SaaS development services, web application development, backend API engineering, cloud DevOps solutions, UI UX design",
});

export default async function ServicesPage() {
  const services = await fetchServices();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-sky-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              From concept to deployment, we provide end-to-end software development services tailored to your business needs.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <Container>
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center`}
              >
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-700 dark:text-gray-300">
                        <span className="text-sky-500 mr-3 mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button href="/contact" variant="primary">
                    Get Started
                  </Button>
                </div>
                <div className="flex-1 w-full">
                  <Card className="h-full min-h-[200px] flex items-center justify-center bg-gradient-to-br from-sky-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700">
                    <div className="text-6xl opacity-20">⚡</div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-600 to-cyan-600">
        <Container>
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build Something Great?
            </h2>
            <p className="text-xl mb-8 text-sky-100 max-w-2xl mx-auto">
              Let's discuss your project and see how we can help bring your vision to life.
            </p>
            <Button href="/contact" variant="secondary" size="lg" className="bg-white text-sky-600 hover:bg-gray-100">
              Schedule a Consultation
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
