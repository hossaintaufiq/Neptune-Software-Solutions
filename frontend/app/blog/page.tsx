import { generateSEOMetadata } from "@/components/seo/SEO";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { fetchBlogPosts } from "@/lib/api";
import Link from "next/link";

export const metadata = generateSEOMetadata({
  title: "Blog",
  description: "Insights on SaaS development, web applications, backend engineering, cloud solutions, and software architecture best practices.",
  path: "/blog",
  keywords: "SaaS development blog, software engineering articles, web development insights, API best practices, cloud architecture",
});

export default async function BlogPage() {
  const posts = await fetchBlogPosts();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-sky-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our Blog
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Insights, best practices, and technical deep-dives on building scalable software products.
            </p>
          </div>
        </Container>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <Container>
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <Card hover className="h-full flex flex-col">
                    <div className="mb-4">
                      <time className="text-sm text-gray-500 dark:text-gray-400">
                        {new Date(post.publishedAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {post.author}
                      </span>
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex gap-2">
                          {post.tags.slice(0, 2).map((tag) => (
                            <Badge key={tag} variant="outline">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400">
                Blog posts coming soon. Check back later for insights and updates!
              </p>
            </div>
          )}
        </Container>
      </section>
    </div>
  );
}
