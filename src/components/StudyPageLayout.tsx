import Link from "next/link";
import ModeToggle from "./ModeToggle";

interface Section {
  title: string;
  content: string[];
  hasQuiz?: boolean;
}

interface StudyPageProps {
  title: string;
  introduction: string;
  sections: Section[];
  topic: string;
}

export default function StudyPageLayout({
  title,
  introduction,
  sections,
  topic,
}: StudyPageProps) {
  return (
    <>
      <div className="mode-toggle-container">
        <ModeToggle currentMode="study" />
      </div>

      <div className="study-content">
        <h1 className="page-title text-center mb-8">{title}</h1>

        <div className="content-card mb-8">
          <p className="text-[#e0e0e0] leading-relaxed">{introduction}</p>
        </div>

        <div className="space-y-8">
          {sections.map((section, index) => (
            <div key={index} className="content-card">
              <h2 className="text-2xl font-semibold text-[#ff6b00] mb-4">
                {section.title}
              </h2>

              {section.content.map((paragraph, pIndex) => (
                <p
                  key={pIndex}
                  className="text-[#e0e0e0] leading-relaxed mb-4 last:mb-6"
                >
                  {paragraph}
                </p>
              ))}

              {section.hasQuiz && (
                <Link
                  href={`/quiz?topic=${topic}&section=${index + 1}`}
                  className="button inline-block"
                >
                  Test Yourself
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
