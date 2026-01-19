import Container from "../layout/Container";
import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";
import Button from "../ui/Button";
import { fetchServices } from "@/lib/api";

export default async function ServicesPreview() {
  const services = await fetchServices();

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <Container>
        <SectionHeader
          title="What We Build"
          subtitle="Services"
          description="Comprehensive software solutions tailored to your business needs"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.id} hover className="flex flex-col">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                {service.description}
              </p>
              <ul className="space-y-2 mb-4">
                {service.features.slice(0, 3).map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                    <span className="text-sky-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button href="/services" variant="outline" size="lg">
            Explore All Services
          </Button>
        </div>
      </Container>
    </section>
  );
}
