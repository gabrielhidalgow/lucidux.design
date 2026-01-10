import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import { BlogCard } from "@/components/blog/BlogCard";
import { ShinyButton } from "@/components/ShinyButton";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "UX Insights for Founders | LUCIDUX Blog",
  description:
    "Practical UX advice for startup founders. Learn how to evaluate your product's UX, when to hire a designer, and how to fix common usability issues.",
  keywords: [
    "UX blog",
    "startup UX advice",
    "product design tips",
    "UX for founders",
    "design insights",
  ],
  openGraph: {
    title: "UX Insights for Founders | LUCIDUX Blog",
    description:
      "Practical UX advice for startup founders. Learn how to evaluate your product's UX, when to hire a designer, and how to fix common usability issues.",
    url: "https://lucidux.design/blog",
    type: "website",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-[var(--color-background)]">
      {/* Header */}
      <header className="pt-8 pb-4 border-b border-[var(--color-foreground)]/10">
        <div className="container mx-auto px-6 md:px-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter mb-6">
              UX <span className="text-accent">Insights</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
              Practical advice for founders who want to build products users
              actually understand. No fluff, just actionable UX guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-16 md:pb-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {posts.map((post, index) => (
              <BlogCard key={post.slug} post={post} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 border-t border-[var(--color-foreground)]/10">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Want personalized UX advice?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Book a free 30-minute UX audit. I&apos;ll review your product live
            and identify specific issues holding back your conversion.
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
      </section>

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
  );
}
