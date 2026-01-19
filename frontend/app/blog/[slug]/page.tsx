import { generateSEOMetadata } from "@/components/seo/SEO";
import Container from "@/components/layout/Container";
import { fetchBlogPosts } from "@/lib/api";
import { notFound } from "next/navigation";
import Badge from "@/components/ui/Badge";

export async function generateStaticParams() {
  const posts = await fetchBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const posts = await fetchBlogPosts();
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return {};
  }

  return generateSEOMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    keywords: post.tags?.join(", "),
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const posts = await fetchBlogPosts();
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <article className="py-20">
        <Container size="md">
          <div className="mb-8">
            <time className="text-sm text-gray-500 dark:text-gray-400">
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            {post.tags && post.tags.length > 0 && (
              <div className="flex gap-2 mt-4">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="primary">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {post.title}
          </h1>
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              {post.excerpt}
            </p>
            {post.content ? (
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            ) : (
              <p className="text-gray-600 dark:text-gray-400">
                Full content coming soon. Check back later!
              </p>
            )}
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              By {post.author}
            </p>
          </div>
        </Container>
      </article>
    </div>
  );
}
