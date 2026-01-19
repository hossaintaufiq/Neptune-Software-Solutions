import { generateSEOMetadata } from "@/components/seo/SEO";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { fetchProjects } from "@/lib/api";

export const metadata = generateSEOMetadata({
  title: "Projects & Case Studies",
  description: "Explore our portfolio of successful SaaS and web development projects. See how we've helped startups and enterprises scale their digital products.",
  path: "/projects",
  keywords: "software development portfolio, SaaS case studies, web application projects, enterprise software examples",
});

export default async function ProjectsPage() {
  const projects = await fetchProjects();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-sky-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our Projects
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Real solutions for real businesses. Explore how we've helped companies scale their digital products.
            </p>
          </div>
        </Container>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.id} hover className="flex flex-col">
                <div className="mb-4">
                  <Badge variant="secondary">{project.industry}</Badge>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="mb-4 space-y-2">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                      Problem:
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                      Solution:
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {project.solution}
                    </p>
                  </div>
                </div>
                <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Tech Stack:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-600 to-cyan-600">
        <Container>
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Have a Project in Mind?
            </h2>
            <p className="text-xl mb-8 text-sky-100 max-w-2xl mx-auto">
              Let's discuss how we can help bring your vision to life with scalable, secure solutions.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-white text-sky-600 hover:bg-gray-100 px-8 py-4 text-lg font-medium transition-all duration-200 shadow-lg"
            >
              Start Your Project
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
}
