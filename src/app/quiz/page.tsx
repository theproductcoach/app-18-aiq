"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import type { QuizQuestion, QuizState } from "@/types/quiz";

export default function QuizPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const difficulty = searchParams.get("difficulty");
  const topic = searchParams.get("topic");

  const [quizState, setQuizState] = useState<QuizState>({
    questions: [],
    currentQuestionIndex: 0,
    answers: [],
    settings: {
      difficulty: difficulty as any,
      topic: topic as any,
    },
    score: 0,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(
          `/api/quiz?difficulty=${difficulty}&topic=${topic}`
        );
        if (!response.ok) throw new Error("Failed to fetch questions");
        const questions: QuizQuestion[] = await response.json();
        setQuizState((prev) => ({ ...prev, questions }));
      } catch (err) {
        setError("Failed to load quiz questions. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [difficulty, topic]);

  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...quizState.answers];
    newAnswers[quizState.currentQuestionIndex] = answerIndex;

    if (quizState.currentQuestionIndex === quizState.questions.length - 1) {
      // Calculate score and redirect to results
      const score = newAnswers.reduce((acc, answer, index) => {
        return (
          acc + (answer === quizState.questions[index].correctAnswer ? 1 : 0)
        );
      }, 0);

      const finalState = {
        ...quizState,
        answers: newAnswers,
        score,
      };

      // Store in localStorage for results page
      localStorage.setItem("quizState", JSON.stringify(finalState));
      router.push("/result");
    } else {
      setQuizState((prev) => ({
        ...prev,
        answers: newAnswers,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
      }));
    }
  };

  if (loading) {
    return (
      <div className="card">
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <div className="progress-text">Loading quiz questions...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="card">
        <p style={{ color: "var(--error-color)", marginBottom: "1.5rem" }}>
          {error}
        </p>
        <button className="button" onClick={() => router.push("/")}>
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="card">
      <div className="progress-text">
        Question {quizState.currentQuestionIndex + 1} of{" "}
        {quizState.questions.length}
      </div>

      <h2 style={{ marginBottom: "2rem" }}>{currentQuestion.question}</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            className="answer-button"
            onClick={() => handleAnswer(index)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
