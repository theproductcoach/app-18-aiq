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
        <h1 className="page-title">{title}</h1>

        <Link href="/study" className="back-link">
          <span className="arrow">←</span>
          <span className="text">Back to Topics</span>
        </Link>

        <div className="content-card">
          <p>{introduction}</p>
        </div>

        <div className="section-list">
          {sections.map((section, index) => (
            <div key={index} className="content-card">
              <h2 className="section-title">{section.title}</h2>

              {section.content.map((paragraph, pIndex) => (
                <p key={pIndex}>{paragraph}</p>
              ))}
            </div>
          ))}
        </div>

        <div className="test-button-container">
          <Link href="/test" className="button test-button">
            Test Your Knowledge
          </Link>
        </div>
      </div>
    </>
  );
}
