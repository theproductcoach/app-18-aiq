"use client";

import Link from "next/link";
import ModeToggle from "@/components/ModeToggle";

const TOPICS = [
  {
    slug: "ai-fundamentals",
    title: "AI Fundamentals",
    description:
      "Learn the core concepts and building blocks of artificial intelligence systems.",
  },
  {
    slug: "llms",
    title: "Large Language Models",
    description:
      "Explore how LLMs work and their impact on natural language processing.",
  },
  {
    slug: "neural-networks",
    title: "Neural Networks",
    description:
      "Understand the architecture and principles behind neural networks.",
  },
  {
    slug: "ethics",
    title: "AI Ethics & Bias",
    description:
      "Examine the ethical considerations and challenges in AI development.",
  },
  {
    slug: "real-world",
    title: "AI in the Real World",
    description:
      "Discover how AI is transforming industries and everyday life.",
  },
  {
    slug: "history",
    title: "History of AI",
    description:
      "Trace the evolution of artificial intelligence from its origins to today.",
  },
];

export default function StudyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mode-toggle-container">
        <ModeToggle currentMode="study" />
      </div>

      <h1 className="page-title text-center">Study Topics</h1>

      <div className="topic-grid">
        {TOPICS.map((topic) => (
          <Link
            key={topic.slug}
            href={`/study/${topic.slug}`}
            className="topic-card"
          >
            <h2 className="text-xl font-semibold mb-2">{topic.title}</h2>
            <p className="text-gray-600 dark:text-gray-300">
              {topic.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
