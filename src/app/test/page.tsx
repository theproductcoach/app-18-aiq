"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import type { Difficulty, Topic } from "@/types/quiz";
import StudyTestLayout from "@/components/StudyTestLayout";

const TOPICS = [
  {
    id: "fundamentals",
    title: "AI Fundamentals",
    description:
      "Learn the core concepts and building blocks of artificial intelligence systems.",
  },
  {
    id: "llms",
    title: "Large Language Models (LLMs)",
    description:
      "Explore how LLMs work and their impact on natural language processing.",
  },
  {
    id: "neural-networks",
    title: "Neural Networks",
    description:
      "Understand the architecture and principles behind neural networks.",
  },
  {
    id: "ethics",
    title: "AI Ethics and Bias",
    description:
      "Examine the ethical considerations and challenges in AI development.",
  },
  {
    id: "real-world",
    title: "AI in the Real World",
    description:
      "Discover how AI is transforming industries and everyday life.",
  },
  {
    id: "history",
    title: "History of AI",
    description:
      "Trace the evolution of artificial intelligence from its origins to today.",
  },
  {
    id: "technical-implementation",
    title: "Technical AI Implementation",
    description:
      "Explore the technical components that power modern AI systems.",
  },
];

export default function TestPage() {
  const router = useRouter();
  const [settings, setSettings] = useState({
    difficulty: "medium" as Difficulty,
    topic: "fundamentals" as Topic,
  });

  const handleTopicSelect = (topicId: string) => {
    setSettings((prev) => ({ ...prev, topic: topicId as Topic }));
  };

  const handleDifficultyChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseInt(event.target.value);
      let difficulty: Difficulty = "medium";

      if (value <= 33) {
        difficulty = "easy";
      } else if (value <= 66) {
        difficulty = "medium";
      } else {
        difficulty = "hard";
      }

      setSettings((prev) => ({ ...prev, difficulty }));
    },
    []
  );

  const getDifficultyValue = (difficulty: Difficulty): number => {
    switch (difficulty) {
      case "easy":
        return 0;
      case "medium":
        return 50;
      case "hard":
        return 100;
    }
  };

  const handleStartQuiz = () => {
    router.push(
      `/quiz?difficulty=${settings.difficulty}&topic=${settings.topic}`
    );
  };

  return (
    <StudyTestLayout currentMode="test">
      <h1 className="page-title">Test Your Knowledge</h1>

      <h2 className="section-title">Select Topic:</h2>
      <div className="topic-grid">
        {TOPICS.map((topic) => (
          <button
            key={topic.id}
            className={`topic-card ${
              settings.topic === topic.id ? "selected" : ""
            }`}
            onClick={() => handleTopicSelect(topic.id)}
          >
            <h2>{topic.title}</h2>
            <p>{topic.description}</p>
          </button>
        ))}
      </div>

      <div className="difficulty-section">
        <h2 className="section-title">Select Difficulty:</h2>
        <div className="difficulty-container">
          <div className="difficulty-slider-wrapper">
            <input
              type="range"
              id="difficulty"
              className="difficulty-slider"
              min="0"
              max="100"
              value={getDifficultyValue(settings.difficulty)}
              onChange={handleDifficultyChange}
            />
          </div>
          <div className="difficulty-label-container">
            <span className={`difficulty-label ${settings.difficulty}`}>
              {settings.difficulty.charAt(0).toUpperCase() +
                settings.difficulty.slice(1)}
            </span>
          </div>
        </div>
      </div>

      <div className="start-quiz-container">
        <button className="button" onClick={handleStartQuiz}>
          Start Quiz
        </button>
      </div>
    </StudyTestLayout>
  );
}
