import Image from "next/image";
import Container from "../layout/Container";
import SectionHeader from "../ui/SectionHeader";
import Badge from "../ui/Badge";

const technologies = [
  { name: "Next.js", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "AWS", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "GraphQL", category: "API" },
  { name: "Redis", category: "Infrastructure" },
];

export default function TechStack() {
  return (
    <section className="py-24 section-bg global-bg-pattern dark:section-bg-dark dark:global-bg-pattern-dark relative overflow-hidden">
      {/* Subtle Background Image */}
      <div className="absolute inset-0 opacity-5">
        <Image
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop"
          alt="Code"
          fill
          className="object-cover"
          quality={30}
        />
      </div>

      <Container className="relative z-10">
        <SectionHeader
          title="Technologies We Work With"
          subtitle="Tech Stack"
          description="We leverage modern, battle-tested technologies to build robust solutions"
        />
        
        {/* Tech Grid with Categories */}
        <div className="space-y-8">
          {["Frontend", "Backend", "Database", "Cloud", "DevOps"].map((category) => {
            const categoryTechs = technologies.filter(t => t.category === category);
            if (categoryTechs.length === 0) return null;
            
            return (
              <div key={category} className="text-center">
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {categoryTechs.map((tech) => (
                    <Badge 
                      key={tech.name} 
                      variant="primary"
                      className="px-4 py-2 text-sm font-medium hover:scale-110 transition-transform cursor-default"
                    >
                      {tech.name}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* All Techs Together */}
        <div className="mt-12 pt-12 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <Badge 
                key={tech.name} 
                variant="outline"
                className="px-4 py-2 text-sm hover:bg-sky-50 hover:border-sky-300 transition-all cursor-default"
              >
                {tech.name}
              </Badge>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
