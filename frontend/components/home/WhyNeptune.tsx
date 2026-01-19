import Container from "../layout/Container";
import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";

const reasons = [
  {
    title: "Clean Architecture & Scalable Systems",
    description: "We design systems that grow with your business, not against it. Every decision is made with scalability in mind.",
    icon: "🏗️",
  },
  {
    title: "Backend-First Engineering Mindset",
    description: "Strong foundations matter. We prioritize robust backend architecture before building beautiful interfaces.",
    icon: "⚙️",
  },
  {
    title: "Security & Performance Focused",
    description: "Your data security and application performance are non-negotiable. We build with both in mind from day one.",
    icon: "🔒",
  },
  {
    title: "Modern Tech Stack",
    description: "We use cutting-edge technologies and best practices to ensure your product stays competitive.",
    icon: "🚀",
  },
  {
    title: "Long-Term Partnership Approach",
    description: "We're not just vendors—we're partners invested in your success. We build relationships that last.",
    icon: "🤝",
  },
  {
    title: "Quality-First Development",
    description: "Code quality, testing, and documentation are built into every project. No shortcuts, no compromises.",
    icon: "✨",
  },
];

export default function WhyNeptune() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-sky-50 dark:from-gray-900 dark:to-gray-800">
      <Container>
        <SectionHeader
          title="Why Neptune Software Solutions"
          subtitle="Our Approach"
          description="We combine technical excellence with business acumen to deliver solutions that drive real results"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <Card key={index} hover className="text-center">
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {reason.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
