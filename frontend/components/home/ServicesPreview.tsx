import Image from "next/image";
import Container from "../layout/Container";
import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";
import Button from "../ui/Button";
import { fetchServices } from "@/lib/api";

const serviceImages = [
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
];

export default async function ServicesPreview() {
  const services = await fetchServices();

  return (
    <section className="py-24 section-bg global-bg-pattern dark:section-bg-dark dark:global-bg-pattern-dark">
      <Container>
        <SectionHeader
          title="What We Build"
          subtitle="Services"
          description="Comprehensive software solutions tailored to your business needs"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={service.id} variant="service" hover className="flex flex-col overflow-hidden">
              {/* Unique Card Design - Hexagon Top Border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500"></div>
              
              {/* Image Section with Unique Overlay */}
              <div className="relative h-48 overflow-hidden -mx-6 -mt-6 mb-6">
                <Image
                  src={serviceImages[index % serviceImages.length]}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-900/90 via-sky-800/70 to-transparent"></div>
                
                {/* Floating Number Badge */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/30">
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>
                
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white drop-shadow-lg">
                    {service.title}
                  </h3>
                </div>
              </div>
              
              <div className="flex flex-col flex-grow">
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start group/item">
                      <span className="text-sky-500 mr-2 font-bold group-hover/item:scale-110 transition-transform">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button href="/services" variant="outline" size="sm" className="mt-auto group/btn">
                  <span className="group-hover/btn:translate-x-1 inline-block transition-transform">Learn More →</span>
                </Button>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center mt-16">
          <Button href="/services" variant="primary" size="lg">
            Explore All Services
          </Button>
        </div>
      </Container>
    </section>
  );
}
