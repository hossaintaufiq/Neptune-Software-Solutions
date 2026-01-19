"use client";

import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for early-stage startups and MVPs",
    price: "Custom",
    features: [
      "Up to 3 core features",
      "Basic authentication & authorization",
      "Single database setup",
      "API development",
      "Basic UI/UX design",
      "Deployment assistance",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "Growth",
    description: "For scaling businesses ready to expand",
    price: "Custom",
    features: [
      "Unlimited features",
      "Advanced authentication & RBAC",
      "Multi-database architecture",
      "REST & GraphQL APIs",
      "Custom UI/UX design",
      "Cloud deployment (AWS/Azure/GCP)",
      "CI/CD pipeline setup",
      "Performance optimization",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large-scale, mission-critical systems",
    price: "Custom",
    features: [
      "Everything in Growth",
      "Microservices architecture",
      "Multi-region deployment",
      "Advanced security & compliance",
      "Dedicated engineering team",
      "24/7 monitoring & support",
      "Custom SLA",
      "On-site consultation",
      "Training & documentation",
    ],
    popular: false,
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-sky-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Every project is unique. We provide custom pricing based on your specific requirements, timeline, and scope.
            </p>
          </div>
        </Container>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <Card
                key={plan.name}
                className={`relative ${plan.popular ? "ring-2 ring-sky-500 scale-105" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-sky-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {plan.description}
                  </p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">
                      {plan.price}
                    </span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-700 dark:text-gray-300">
                      <span className="text-sky-500 mr-3 mt-1">✓</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  href="/contact"
                  variant={plan.popular ? "primary" : "outline"}
                  className="w-full"
                >
                  Get Started
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-sky-50 dark:from-gray-900 dark:to-gray-800">
        <Container>
          <SectionHeader
            title="Why Custom Pricing?"
            description="Every project has unique requirements"
          />
          <div className="max-w-3xl mx-auto space-y-4 text-gray-600 dark:text-gray-400">
            <p>
              We believe in transparent, fair pricing that reflects the actual scope and complexity of your project. Rather than forcing you into a one-size-fits-all package, we work with you to understand your needs and provide a detailed quote.
            </p>
            <p>
              Our pricing includes everything you need: development, design, deployment, documentation, and ongoing support. No hidden fees, no surprises.
            </p>
            <p className="font-semibold text-gray-900 dark:text-white">
              Ready to get started? Schedule a free consultation and we'll provide a detailed quote within 24 hours.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
