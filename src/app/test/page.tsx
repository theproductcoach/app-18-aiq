"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import type { Difficulty, Topic } from "@/types/quiz";
import StudyTestLayout from "@/components/StudyTestLayout";

const TOPIC_DISPLAY_NAMES: Record<Topic, string> = {
  fundamentals: "AI Fundamentals",
  llms: "Large Language Models (LLMs)",
  "neural-networks": "Neural Networks",
  ethics: "AI Ethics and Bias",
  "real-world": "AI in the Real World",
  history: "History of AI",
};

export default function TestPage() {
  const router = useRouter();
  const [settings, setSettings] = useState({
    difficulty: "medium" as Difficulty,
    topic: "fundamentals" as Topic,
  });

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
      <div className="page-header">
        <h2 className="page-title">Test Mode</h2>
      </div>

      <div className="quiz-form">
        <div className="content-card">
          <div className="form-group">
            <label htmlFor="topic" className="form-label">
              Select Topic:
            </label>
            <select
              id="topic"
              className="select"
              value={settings.topic}
              onChange={(e) =>
                setSettings({ ...settings, topic: e.target.value as Topic })
              }
            >
              {Object.entries(TOPIC_DISPLAY_NAMES).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="difficulty" className="form-label">
              Select Difficulty:
            </label>
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

          <button className="button" onClick={handleStartQuiz}>
            Start Quiz
          </button>
        </div>
      </div>
    </StudyTestLayout>
  );
}
