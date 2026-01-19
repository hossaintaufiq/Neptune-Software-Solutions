import Image from "next/image";
import Container from "../layout/Container";
import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";

const reasons = [
  {
    title: "Clean Architecture & Scalable Systems",
    description: "We design systems that grow with your business, not against it. Every decision is made with scalability in mind.",
    icon: "🏗️",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Backend-First Engineering Mindset",
    description: "Strong foundations matter. We prioritize robust backend architecture before building beautiful interfaces.",
    icon: "⚙️",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
  },
  {
    title: "Security & Performance Focused",
    description: "Your data security and application performance are non-negotiable. We build with both in mind from day one.",
    icon: "🔒",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Modern Tech Stack",
    description: "We use cutting-edge technologies and best practices to ensure your product stays competitive.",
    icon: "🚀",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
  },
  {
    title: "Long-Term Partnership Approach",
    description: "We're not just vendors—we're partners invested in your success. We build relationships that last.",
    icon: "🤝",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Quality-First Development",
    description: "Code quality, testing, and documentation are built into every project. No shortcuts, no compromises.",
    icon: "✨",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
  },
];

export default function WhyNeptune() {
  return (
    <section className="py-24 section-bg global-bg-pattern dark:section-bg-dark dark:global-bg-pattern-dark relative overflow-hidden">
      <Container className="relative z-10">
        <SectionHeader
          title="Why Neptune Software Solutions"
          subtitle="Our Approach"
          description="We combine technical excellence with business acumen to deliver solutions that drive real results"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} variant="feature" hover className="group relative overflow-hidden">
              {/* Unique Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-sky-500/20 to-transparent rounded-bl-full"></div>
              
              {/* Icon Badge */}
              <div className="absolute top-4 right-4 z-10 w-14 h-14 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-xl flex items-center justify-center text-2xl shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
                {reason.icon}
              </div>
              
              {/* Image Background */}
              <div className="relative h-40 overflow-hidden -mx-6 -mt-6 mb-6 rounded-t-xl">
                <Image
                  src={reason.image}
                  alt={reason.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-sky-600/60 via-cyan-600/40 to-transparent"></div>
                
                {/* Decorative Lines */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
              </div>
              
              <div className="relative">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {reason.description}
                </p>
                
                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-500 to-cyan-500 group-hover:w-full transition-all duration-300"></div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
