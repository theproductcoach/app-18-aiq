"use client";

import ModeToggle from "./ModeToggle";

interface StudyTestLayoutProps {
  children: React.ReactNode;
  currentMode: "study" | "test";
}

export default function StudyTestLayout({
  children,
  currentMode,
}: StudyTestLayoutProps) {
  return (
    <div className="study-test-layout">
      <div className="mode-toggle-container">
        <ModeToggle currentMode={currentMode} />
      </div>
      {children}
    </div>
  );
}
