import Link from "next/link";
import {
  ArrowRight,
  Building2,
  MessageCircle,
  QrCode,
  ShieldCheck,
  Smartphone,
  Store,
} from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { HeroVerifyCard } from "@/components/hero-verify-card";
import { Button } from "@/components/ui/button";

const steps = [
  {
    n: "01",
    title: "Customer says they paid",
    body: "They show a receipt, screenshot, or transfer alert — but visuals can be forged.",
  },
  {
    n: "02",
    title: "Merchant enters the code",
    body: "Use the short verification code from the Wema transfer (for example WMA-72K91).",
  },
  {
    n: "03",
    title: "Confirm before you release",
    body: "Wema Verify checks seeded transaction records and shows verified, not found, or check details.",
  },
];

const why = [
  {
    title: "Screenshots are not settlement",
    body: "A convincing image does not mean funds reached your account. Verify against the bank record.",
  },
  {
    title: "Protect small merchants",
    body: "Campus shops and market traders often decide in seconds. A 10-second check reduces costly mistakes.",
  },
  {
    title: "Clear language, not panic",
    body: "Results say Payment Verified, Not Found, or Check Details — never “definitely fraud.”",
  },
];

const ecosystem = [
  {
    icon: Smartphone,
    title: "Wema mobile banking",
    body: "Surface verification codes on transfer confirmations customers already receive.",
  },
  {
    icon: Store,
    title: "Merchant tools",
    body: "Give shop owners a lightweight check before they hand over goods.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp assist",
    body: "Future: reply with a code in chat and get a verification summary back.",
  },
  {
    icon: QrCode,
    title: "In-branch & agent points",
    body: "Future touchpoint for assisted verification where digital literacy varies.",
  },
];

const roadmap = [
  { version: "V2", item: "Multi-bank code lookup via secure partner rails" },
  { version: "V3", item: "Merchant profiles and saved expected receivers" },
  { version: "V4", item: "WhatsApp / USSD verification channels" },
  { version: "V5", item: "Fraud-pattern insights for Wema risk teams" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero — one composition: brand, headline, support, CTAs, visual */}
      <section className="relative overflow-hidden border-b border-border">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#faf9f8_0%,#f7f0f2_45%,#faf9f8_100%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12 lg:py-20">
          <div className="animate-fade-up space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-3 py-1 text-xs text-muted-foreground">
              <BrandMark size="sm" className="h-5 w-5" />
              Hackaholics 7.0 · Wema Bank · University of Ibadan
            </div>
            <div className="space-y-3">
              <h1 className="text-4xl font-bold tracking-tight text-charcoal sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
                Wema Verify
              </h1>
              <p className="max-w-xl text-xl font-medium text-primary sm:text-2xl">
                Don&apos;t trust the receipt. Verify the transaction.
              </p>
              <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
                When a customer claims they paid, merchants can check a short Wema
                verification code against bank records — before goods leave the
                counter.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="h-12 px-6" render={<Link href="/verify" />}>
                Verify a Payment
                <ArrowRight />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-6"
                render={<Link href="#how-it-works" />}
              >
                See How It Works
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Wema Verify — Hackathon Prototype · Seeded demo data · No live banking API
            </p>
          </div>
          <HeroVerifyCard />
        </div>
      </section>

      {/* Demo narrative */}
      <section className="border-b border-border bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-wide text-primary">
              A familiar scene
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-charcoal sm:text-3xl">
              Customer says paid. You ask for the code. You verify.
            </h2>
            <p className="mt-3 text-muted-foreground">
              Adeola at Campus Gate is told “I just transferred ₦50,000.” Instead of
              trusting the screenshot, she enters <span className="font-mono text-foreground">WMA-72K91</span>{" "}
              and sees Payment Verified — John Adeyemi to Adeola Stores — before
              handing over the goods.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="scroll-mt-20 border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight text-charcoal sm:text-3xl">
              How it works
            </h2>
            <p className="mt-2 text-muted-foreground">
              Three steps. No PIN. No password. A code is not an OTP.
            </p>
          </div>
          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <li key={step.n} className="relative">
                <p className="font-mono text-sm text-primary">{step.n}</p>
                <h3 className="mt-2 text-lg font-semibold text-charcoal">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10">
            <Button render={<Link href="/verify" />}>Try verification</Button>
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section id="why-it-matters" className="scroll-mt-20 border-b border-border bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight text-charcoal sm:text-3xl">
              Why it matters
            </h2>
            <p className="mt-2 text-muted-foreground">
              Fake transfer alerts cost traders money and trust. Verification puts
              the bank record between the claim and the handover.
            </p>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {why.map((item) => (
              <div key={item.title}>
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-primary">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <h3 className="text-lg font-semibold text-charcoal">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wema ecosystem — future */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-wide text-primary">
                Future · Wema ecosystem
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-charcoal sm:text-3xl">
                Built to sit inside Wema&apos;s world
              </h2>
              <p className="mt-2 text-muted-foreground">
                This prototype stands alone with seeded data. Production would plug
                into authenticated Wema APIs and existing customer touchpoints.
              </p>
            </div>
            <span className="rounded-full border border-border bg-secondary px-3 py-1 text-xs text-muted-foreground">
              Not implemented in V1
            </span>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ecosystem.map((item) => (
              <div key={item.title} className="rounded-xl border border-border bg-white p-5">
                <item.icon className="h-5 w-5 text-primary" />
                <h3 className="mt-3 font-semibold text-charcoal">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="border-b border-border bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight text-charcoal sm:text-3xl">
              Roadmap beyond this prototype
            </h2>
            <p className="mt-2 text-muted-foreground">
              V1 is Wema-to-Wema verification with local seed data. Later versions
              expand channels and intelligence — not built here.
            </p>
          </div>
          <ul className="mt-8 divide-y divide-border rounded-xl border border-border">
            {roadmap.map((row) => (
              <li
                key={row.version}
                className="flex items-start gap-4 px-4 py-4 sm:items-center sm:px-5"
              >
                <span className="font-mono text-sm font-semibold text-primary">
                  {row.version}
                </span>
                <span className="text-sm text-muted-foreground">{row.item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[linear-gradient(135deg,#9e0e26_0%,#c41230_55%,#a51228_100%)] text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-14 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-16">
          <div className="max-w-xl">
            <div className="mb-3 flex items-center gap-2">
              <Building2 className="h-5 w-5 opacity-90" />
              <span className="text-sm opacity-90">Ready to try the demo</span>
            </div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Verify a payment in under ten seconds
            </h2>
            <p className="mt-2 text-white/80">
              Use demo codes like WMA-72K91, WMA-FAKE1, WMA-OTHER1, or WMA-PEND1.
            </p>
          </div>
          <Button
            size="lg"
            variant="secondary"
            className="h-12 shrink-0 bg-white text-primary hover:bg-white/95"
            render={<Link href="/verify" />}
          >
            Verify a Payment
            <ArrowRight />
          </Button>
        </div>
      </section>
    </>
  );
}
