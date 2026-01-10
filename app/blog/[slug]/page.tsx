import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";
import { ShinyButton } from "@/components/ShinyButton";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | LUCIDUX Blog",
    };
  }

  return {
    title: `${post.title} | LUCIDUX Blog`,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://lucidux.design/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: ["Gabriel Hidalgo"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

// Simple markdown to HTML converter
function parseMarkdown(content: string): string {
  return content
    // Headers
    .replace(/^### (.*$)/gm, '<h3 class="text-xl md:text-2xl font-display font-bold mt-8 mb-4 text-[var(--color-foreground)]">$1</h3>')
    .replace(/^## (.*$)/gm, '<h2 class="text-2xl md:text-3xl font-display font-bold mt-10 mb-4 text-[var(--color-foreground)]">$1</h2>')
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-[var(--color-foreground)]">$1</strong>')
    // List items
    .replace(/^- \[ \] (.*$)/gm, '<li class="flex items-start gap-2 ml-4 text-gray-300"><span class="text-accent mt-1">☐</span><span>$1</span></li>')
    .replace(/^- (.*$)/gm, '<li class="flex items-start gap-2 ml-4 text-gray-300"><span class="text-accent mt-1.5">•</span><span>$1</span></li>')
    // Paragraphs (lines that don't start with special characters)
    .replace(/^(?!<[h|l|s])(.*[^\s].*)$/gm, '<p class="text-gray-300 leading-relaxed mb-4">$1</p>')
    // Clean up empty paragraphs
    .replace(/<p class="[^"]*"><\/p>/g, '')
    // Wrap consecutive list items
    .replace(/(<li[^>]*>.*?<\/li>\n?)+/g, '<ul class="space-y-2 my-4">$&</ul>');
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const htmlContent = parseMarkdown(post.content);

  // Generate BlogPosting schema
  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: "Gabriel Hidalgo",
      url: "https://lucidux.design",
    },
    publisher: {
      "@type": "Organization",
      name: "Lucidux Design",
      url: "https://lucidux.design",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://lucidux.design/blog/${post.slug}`,
    },
    keywords: post.keywords.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostSchema) }}
      />
      <main className="min-h-screen bg-[var(--color-background)]">
        {/* Header */}
        <header className="pt-8 pb-4 border-b border-[var(--color-foreground)]/10">
          <div className="container mx-auto px-6 md:px-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-accent transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to blog
            </Link>
          </div>
        </header>

        {/* Article */}
        <article className="py-12 md:py-20">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto">
              {/* Article Header */}
              <header className="mb-10 md:mb-14">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-mono uppercase tracking-wider text-accent">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">•</span>
                  <span className="text-xs text-gray-500">{post.readTime}</span>
                  <span className="text-xs text-gray-500">•</span>
                  <time className="text-xs text-gray-500" dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-6">
                  {post.title}
                </h1>
                <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                  {post.description}
                </p>
              </header>

              {/* Article Content */}
              <div
                className="prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />

              {/* CTA Section */}
              <div className="mt-16 pt-10 border-t border-[var(--color-foreground)]/10">
                <div className="bg-[var(--color-surface)]/50 rounded-2xl p-8 md:p-10 text-center">
                  <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
                    Ready to improve your UX?
                  </h3>
                  <p className="text-gray-400 mb-6 max-w-lg mx-auto">
                    Book a free 30-minute UX audit. I&apos;ll review your product live
                    and identify quick wins to improve conversion.
                  </p>
                  <ShinyButton
                    as="a"
                    href="https://calendly.com/gabrielhidalgo/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    size="lg"
                  >
                    Book Free UX Audit
                  </ShinyButton>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Footer */}
        <footer className="py-8 border-t border-[var(--color-foreground)]/10">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <Link
                href="/"
                className="text-sm font-display font-bold tracking-tight"
              >
                LUCIDUX.DESIGN
              </Link>
              <p className="text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Lucidux Design. All rights
                reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
