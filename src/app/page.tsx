import { Header } from "./components/Header";
import { CaseStudiesSection } from "./components/sections/CaseStudiesSection";
import { ContactSection } from "./components/sections/ContactSection";
import { DemoReelSection } from "./components/sections/DemoReelSection";
import { EvaluationsSection } from "./components/sections/EvaluationsSection";
import { ExperimentsSection } from "./components/sections/ExperimentsSection";
import { FaqSection } from "./components/sections/FaqSection";
import { Footer } from "./components/sections/Footer";
import { HeroSection } from "./components/sections/HeroSection";
import { LicensingSection } from "./components/sections/LicensingSection";
import { PerformanceProofSection } from "./components/sections/PerformanceProofSection";
import { ProcessSection } from "./components/sections/ProcessSection";
import { SandboxSection } from "./components/sections/SandboxSection";
import { StackSection } from "./components/sections/StackSection";
import { SystemSection } from "./components/sections/SystemSection";
import { TrustSection } from "./components/sections/TrustSection";
import { UseCasesSection } from "./components/sections/UseCasesSection";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white selection:bg-cyan-500/30">
      <div className="fixed inset-0 z-0 vertical-streaks pointer-events-none" />
      <div className="fixed inset-0 z-0 crt-scanlines opacity-30 pointer-events-none" />
      <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_50%_16%,rgba(34,211,238,0.14),transparent_32%),linear-gradient(180deg,#020617_0%,#000_62%,#020617_100%)] pointer-events-none" />

      <Header />

      <main className="relative z-10">
        <HeroSection />
        <ExperimentsSection />
        <SystemSection />
        <UseCasesSection />
        <DemoReelSection />
        <SandboxSection />
        <CaseStudiesSection />
        <PerformanceProofSection />
        <ProcessSection />
        <StackSection />
        <FaqSection />
        <TrustSection />
        <EvaluationsSection />
        <LicensingSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}

