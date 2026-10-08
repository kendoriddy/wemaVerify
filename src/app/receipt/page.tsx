import type { Metadata } from "next";
import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { Button } from "@/components/ui/button";
import { DEMO_CODES } from "@/data/transactions";

export const metadata: Metadata = {
  title: "Customer Receipt Demo",
  description:
    "Prototype customer receipt showing a Wema verification code merchants can check.",
};

export default function ReceiptPage() {
  return (
    <div className="mx-auto max-w-lg px-4 py-10 sm:px-6 sm:py-14">
      <div className="mb-8 space-y-2 text-center">
        <p className="text-sm font-medium uppercase tracking-wide text-primary">
          Prototype receipt
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-charcoal">
          Customer transfer receipt
        </h1>
        <p className="text-sm text-muted-foreground">
          Demo only — shows how a verification code could appear on a customer
          confirmation so a merchant can verify it.
        </p>
      </div>

      <article className="animate-fade-up overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-border bg-secondary/40 px-5 py-4">
          <div className="flex items-center gap-2">
            <BrandMark size="sm" />
            <div>
              <p className="text-sm font-semibold">Wema Bank</p>
              <p className="text-[11px] text-muted-foreground">Transfer confirmation</p>
            </div>
          </div>
          <span className="rounded-full bg-[#e8f5ee] px-2.5 py-1 text-[11px] font-medium text-success">
            Successful
          </span>
        </div>

        <div className="space-y-5 px-5 py-6">
          <div>
            <p className="text-xs text-muted-foreground">Amount sent</p>
            <p className="mt-1 text-3xl font-semibold tracking-tight">₦50,000</p>
          </div>

          <dl className="space-y-3 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-muted-foreground">From</dt>
              <dd className="text-right font-medium">
                John Adeyemi
                <span className="block text-xs font-normal text-muted-foreground">
                  ****4521
                </span>
              </dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-muted-foreground">To</dt>
              <dd className="text-right font-medium">
                Adeola Stores
                <span className="block text-xs font-normal text-muted-foreground">
                  ****8830
                </span>
              </dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-muted-foreground">Date & time</dt>
              <dd className="font-medium">8 Oct 2026 · 2:14 PM</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-muted-foreground">Reference</dt>
              <dd className="font-mono text-xs font-medium">WEMA-839201</dd>
            </div>
          </dl>

          <div className="rounded-xl border border-dashed border-primary/30 bg-accent/60 p-4 text-center">
            <p className="text-xs font-medium uppercase tracking-wide text-primary">
              Verification code
            </p>
            <p className="mt-2 font-mono text-2xl font-semibold tracking-widest text-charcoal">
              {DEMO_CODES.verified}
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              Share this code with the merchant — not your PIN or password.
            </p>
          </div>
        </div>

        <div className="border-t border-border px-5 py-5">
          <Button
            className="w-full"
            size="lg"
            render={<Link href={`/verify?code=${DEMO_CODES.verified}`} />}
          >
            Verify this payment
          </Button>
          <p className="mt-3 text-center text-[11px] text-muted-foreground">
            Opens Wema Verify with this demo code prefilled.
          </p>
        </div>
      </article>
    </div>
  );
}
