"use client";

import { Suspense } from "react";
import QuizContent from "./QuizContent";

export default function QuizPage() {
  return (
    <Suspense
      fallback={
        <div className="card">
          <div style={{ textAlign: "center", padding: "2rem" }}>
            <div className="progress-text">Loading quiz...</div>
          </div>
        </div>
      }
    >
      <QuizContent />
    </Suspense>
  );
}
