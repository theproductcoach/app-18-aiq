"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { QuizState } from "@/types/quiz";

export default function ResultPage() {
  const router = useRouter();
  const [quizState, setQuizState] = useState<QuizState | null>(null);

  useEffect(() => {
    const savedState = localStorage.getItem("quizState");
    if (!savedState) {
      router.push("/");
      return;
    }
    setQuizState(JSON.parse(savedState));
  }, [router]);

  if (!quizState) {
    return (
      <div className="card">
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <div className="progress-text">Loading results...</div>
        </div>
      </div>
    );
  }

  const percentage = Math.round(
    (quizState.score / quizState.questions.length) * 100
  );

  return (
    <div className="card">
      <h1 style={{ marginBottom: "2rem", textAlign: "center" }}>
        Quiz Results
      </h1>

      <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
        <h2
          style={{
            color: "var(--primary-color)",
            fontSize: "3.5rem",
            marginBottom: "0.75rem",
            fontWeight: "700",
          }}
        >
          {percentage}%
        </h2>
        <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem" }}>
          You got {quizState.score} out of {quizState.questions.length}{" "}
          questions correct!
        </p>
      </div>

      <div style={{ marginBottom: "2.5rem" }}>
        {quizState.questions.map((question, index) => (
          <div key={index} className="result-card">
            <h3 style={{ marginBottom: "1rem", color: "var(--primary-color)" }}>
              Question {index + 1}
            </h3>
            <p style={{ marginBottom: "1.5rem" }}>{question.question}</p>

            <div style={{ marginBottom: "1rem" }}>
              <strong>Your answer: </strong>
              <span
                className={
                  quizState.answers[index] === question.correctAnswer
                    ? "correct-answer"
                    : "wrong-answer"
                }
              >
                {question.options[quizState.answers[index]]}
              </span>
            </div>

            {quizState.answers[index] !== question.correctAnswer && (
              <div style={{ marginBottom: "1rem" }}>
                <strong>Correct answer: </strong>
                <span className="correct-answer">
                  {question.options[question.correctAnswer]}
                </span>
              </div>
            )}

            <div className="explanation-text">
              <strong>Explanation: </strong>
              {question.explanation}
            </div>
          </div>
        ))}
      </div>

      <button
        className="button"
        style={{ width: "100%" }}
        onClick={() => {
          localStorage.removeItem("quizState");
          router.push("/");
        }}
      >
        Take Another Quiz
      </button>
    </div>
  );
}
