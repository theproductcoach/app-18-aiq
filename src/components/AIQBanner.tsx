import Image from "next/image";

export default function AIQBanner() {
  return (
    <header className="app-header">
      <div className="app-banner">
        <Image src="/aiq-banner-narrow.png" alt="AIQ Banner" fill priority />
      </div>
    </header>
  );
}
