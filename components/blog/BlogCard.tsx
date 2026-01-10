"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/blog/${post.slug}`} className="group block h-full">
        <div className="h-full p-6 md:p-8 rounded-2xl border border-[var(--color-foreground)]/10 bg-[var(--color-surface)]/50 hover:border-accent/50 hover:bg-[var(--color-surface)] transition-all duration-300">
          <div className="flex flex-col h-full">
            {/* Category & Read Time */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-accent">
                {post.category}
              </span>
              <span className="text-xs text-gray-500">•</span>
              <span className="text-xs text-gray-500">{post.readTime}</span>
            </div>

            {/* Title */}
            <h3 className="text-xl md:text-2xl font-display font-bold mb-3 group-hover:text-accent transition-colors duration-300">
              {post.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 flex-grow">
              {post.description}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-[var(--color-foreground)]/10">
              <span className="text-xs text-gray-500">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1 text-sm font-medium text-[var(--color-foreground)] group-hover:text-accent transition-colors">
                Read article
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
