import { Fraunces, Space_Grotesk } from "next/font/google";

const titleFont = Fraunces({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-title",
});

const bodyFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

export default function Home() {
  return (
    <div
      className={`${titleFont.variable} ${bodyFont.variable} relative min-h-screen overflow-hidden bg-[#f7f1e8] text-[#1f1b16]`}
    >
      <div className="pointer-events-none absolute -left-28 top-12 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,_#ffb085_0,_#ffb085_35%,_transparent_70%)] opacity-60" />
      <div className="pointer-events-none absolute -right-40 top-24 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,_#7fd3c6_0,_#7fd3c6_38%,_transparent_70%)] opacity-60" />
      <div className="pointer-events-none absolute bottom-[-220px] left-[10%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,_#f5e277_0,_#f5e277_35%,_transparent_70%)] opacity-60" />

      <main className="relative mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 pb-20 pt-16 md:px-12 md:pt-20">
        <section className="rounded-[28px] border border-black/10 bg-white/80 p-8 shadow-[0_20px_60px_-35px_rgba(0,0,0,0.45)] backdrop-blur md:p-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.4em] text-[#8a5b2a]">Lab 8</p>
              <h1 className="text-3xl font-semibold leading-tight md:text-5xl" style={{ fontFamily: "var(--font-title)" }}>
                Vercel Deployment
              </h1>
              <p className="text-lg text-[#3f362d] md:text-xl" style={{ fontFamily: "var(--font-body)" }}>
                Cloud Computing — Bahria University
              </p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-[#1f1b16] px-5 py-4 text-sm uppercase tracking-[0.3em] text-[#f5e277]">
              BSE-6
            </div>
          </div>

          <div className="mt-8 grid gap-4 rounded-2xl bg-[#f8f3ec] p-6 text-base md:grid-cols-3">
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-[0.3em] text-[#8a5b2a]">Name</p>
              <p className="text-lg font-semibold" style={{ fontFamily: "var(--font-body)" }}>
                Abdullah Nasir
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-[0.3em] text-[#8a5b2a]">Roll</p>
              <p className="text-lg font-semibold" style={{ fontFamily: "var(--font-body)" }}>
                01-131232-008
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-[0.3em] text-[#8a5b2a]">Focus</p>
              <p className="text-lg font-semibold" style={{ fontFamily: "var(--font-body)" }}>
                Frontend Deployment
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[24px] border border-black/10 bg-white/70 p-8 shadow-[0_18px_45px_-35px_rgba(0,0,0,0.5)]">
            <h2 className="text-2xl font-semibold" style={{ fontFamily: "var(--font-title)" }}>
              Labs Completed
            </h2>
            <div className="mt-6 grid gap-3">
              {[
                "Lab 5 — Docker",
                "Lab 6 — LocalStack",
                "Lab 7 — Terraform",
                "Lab 8 — Vercel",
              ].map((lab, index) => (
                <div
                  key={lab}
                  className="flex items-center justify-between rounded-2xl border border-black/10 bg-[#f7f1e8] px-4 py-3"
                >
                  <span className="text-sm font-semibold text-[#8a5b2a]">0{index + 5}</span>
                  <span className="text-base font-medium" style={{ fontFamily: "var(--font-body)" }}>
                    {lab}
                  </span>
                  <span className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs uppercase tracking-[0.2em]">
                    Done
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[24px] border border-black/10 bg-[#1f1b16] p-8 text-[#f7f1e8] shadow-[0_18px_45px_-35px_rgba(0,0,0,0.5)]">
            <h2 className="text-2xl font-semibold" style={{ fontFamily: "var(--font-title)" }}>
              API Endpoints
            </h2>
            <p className="mt-3 text-sm text-[#d2c4b4]" style={{ fontFamily: "var(--font-body)" }}>
              Quick links for testing the serverless and edge routes.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              {[
                { label: "/api/hello", note: "" },
                { label: "/api/student/001", note: "" },
                { label: "/api/student/999", note: "(404)" },
                { label: "/api/geo", note: "(Edge)" },
              ].map((route) => (
                <a
                  key={route.label}
                  href={route.label}
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-white/40 hover:bg-white/10"
                >
                  <span className="text-base font-medium" style={{ fontFamily: "var(--font-body)" }}>
                    {route.label}
                  </span>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#f5e277]">
                    {route.note || "Open"}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
