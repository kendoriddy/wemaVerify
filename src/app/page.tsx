import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroVerifyCard } from "@/components/hero-verify-card";
import { Button } from "@/components/ui/button";

const steps = [
  {
    n: "01",
    title: "Customer pays",
    body: "A Wema customer makes a payment.",
  },
  {
    n: "02",
    title: "Customer shares the code",
    body: "The verification code appears on the payment notification or receipt.",
  },
  {
    n: "03",
    title: "Merchant verifies",
    body: "The merchant enters the code. Wema returns the transaction that actually happened.",
  },
];

const future = [
  "ALAT",
  "Wema merchant products",
  "WhatsApp and USSD",
  "POS",
  "Merchant APIs",
  "E-commerce platforms",
];

const roadmap = [
  { version: "V1", item: "Wema-to-Wema verification" },
  { version: "V2", item: "Interbank payment verification" },
  { version: "V3", item: "Merchant API" },
  { version: "V4", item: "POS and e-commerce integrations" },
  { version: "V5", item: "Fraud intelligence and anomaly detection" },
];

const exchange = [
  { who: "Customer", line: "I've paid." },
  { who: "Merchant", line: "What's your verification code?" },
  { who: "Customer", line: "WMA-72K91" },
  { who: "Wema Verify", line: "Payment confirmed." },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#faf9f8_0%,#f4eef8_45%,#faf9f8_100%)]"
        />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:py-20">
          <div className="space-y-6">
            <p className="text-sm font-medium text-primary">Wema Verify</p>
            <div className="space-y-4">
              <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-charcoal sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
                Don&apos;t trust the receipt.
                <span className="mt-1 block">Verify the transaction.</span>
              </h1>
              <p className="max-w-md text-base text-muted-foreground sm:text-lg">
                Customers can show screenshots. Wema can show you what actually
                happened.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="h-12 px-5" render={<Link href="/verify" />}>
                Verify a Payment
                <ArrowRight />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 bg-white px-5"
                render={<Link href="#how-it-works" />}
              >
                See How It Works
              </Button>
            </div>
          </div>
          <HeroVerifyCard />
        </div>
      </section>

      <section className="border-b border-border bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 sm:py-16 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-charcoal">
              Customer says paid. You ask for the code.
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Compare the record with the claim before goods leave the counter.
            </p>
          </div>
          <ol className="divide-y divide-border border-y border-border">
            {exchange.map((line) => (
              <li key={line.line} className="flex gap-4 py-3 text-sm">
                <span className="w-28 shrink-0 text-muted-foreground">{line.who}</span>
                <span
                  className={
                    line.who === "Wema Verify"
                      ? "font-medium text-charcoal"
                      : "text-charcoal"
                  }
                >
                  {line.line}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="how-it-works" className="scroll-mt-20 border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <h2 className="max-w-xl text-2xl font-semibold tracking-tight text-charcoal sm:text-3xl">
            Three seconds to know the truth.
          </h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <li key={step.n}>
                <p className="font-mono text-sm text-primary">{step.n}</p>
                <h3 className="mt-2 text-lg font-semibold text-charcoal">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="why-it-matters" className="scroll-mt-20 border-b border-border bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight text-charcoal sm:text-3xl">
              Receipts can be copied. Transactions can&apos;t.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              A screenshot can be edited, forwarded, or reused. Wema Verify does
              not ask you to judge whether a receipt looks real. It shows the
              underlying Wema transaction — amount, parties, time, and status —
              so you can decide before you release goods or services.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-charcoal sm:text-3xl">
            Built for the Wema ecosystem.
          </h2>
          <p className="mt-3 max-w-xl text-sm text-muted-foreground">
            A Wema account produces a Wema transaction. That transaction carries
            a verification code. The merchant checks the code here and gets a
            record they can trust.
          </p>
          <ol className="mt-8 flex flex-col gap-px overflow-hidden rounded-lg border border-border bg-border sm:flex-row">
            {[
              "Wema account",
              "Wema transaction",
              "Verification code",
              "Wema Verify",
              "Merchant confidence",
            ].map((step, index) => (
              <li
                key={step}
                className="flex flex-1 items-center gap-3 bg-white px-4 py-4 text-sm"
              >
                <span className="font-mono text-xs text-primary">0{index + 1}</span>
                <span className="font-medium text-charcoal">{step}</span>
              </li>
            ))}
          </ol>
          <div className="mt-8">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Future
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {future.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-border bg-white px-3 py-1.5 text-sm text-muted-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-charcoal">
            What comes next
          </h2>
          <p className="mt-2 max-w-xl text-sm text-muted-foreground">
            V1 confirms Wema-to-Wema transfers. Later versions extend the same
            check to other banks and merchant channels.
          </p>
          <ul className="mt-8 divide-y divide-border border-y border-border">
            {roadmap.map((row) => (
              <li key={row.version} className="flex items-baseline gap-6 py-3.5">
                <span className="w-8 font-mono text-sm font-medium text-primary">
                  {row.version}
                </span>
                <span className="text-sm text-charcoal">{row.item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[linear-gradient(135deg,#4A154B_0%,#5F259F_100%)] text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-14 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-16">
          <div className="max-w-xl">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Confirm the payment before you release the goods.
            </h2>
            <p className="mt-2 text-white/70">
              Enter the code from the customer&apos;s Wema notification.
            </p>
          </div>
          <Button
            size="lg"
            variant="secondary"
            className="h-12 shrink-0 bg-white px-5 text-primary hover:bg-white/95"
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
