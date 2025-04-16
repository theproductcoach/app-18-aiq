import "./globals.css";
import type { Metadata } from "next";
import AIQBanner from "@/components/AIQBanner";

export const metadata: Metadata = {
  title: "AIQ - Test Your AI Knowledge",
  description:
    "Take quizzes to test your knowledge about artificial intelligence",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="app-layout">
          <AIQBanner />
          <main className="app-main">{children}</main>
        </div>
      </body>
    </html>
  );
}
