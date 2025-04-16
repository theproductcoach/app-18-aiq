import { useRouter } from "next/navigation";

interface ModeToggleProps {
  currentMode: "test" | "study";
}

export default function ModeToggle({ currentMode }: ModeToggleProps) {
  const router = useRouter();

  return (
    <div className="mode-toggle">
      <button
        className={`mode-button ${currentMode === "study" ? "active" : ""}`}
        onClick={() => router.push("/study")}
      >
        Study
      </button>
      <button
        className={`mode-button ${currentMode === "test" ? "active" : ""}`}
        onClick={() => router.push("/test")}
      >
        Test
      </button>
    </div>
  );
}
