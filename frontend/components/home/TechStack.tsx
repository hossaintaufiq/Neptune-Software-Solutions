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
    <section className="py-20 bg-white dark:bg-gray-900">
      <Container>
        <SectionHeader
          title="Technologies We Work With"
          subtitle="Tech Stack"
          description="We leverage modern, battle-tested technologies to build robust solutions"
        />
        <div className="flex flex-wrap justify-center gap-3">
          {technologies.map((tech) => (
            <Badge key={tech.name} variant="primary">
              {tech.name}
            </Badge>
          ))}
        </div>
      </Container>
    </section>
  );
}
