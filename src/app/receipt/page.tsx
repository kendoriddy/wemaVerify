import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DEMO_CODES } from "@/data/transactions";

export const metadata: Metadata = {
  title: "Payment confirmation",
  description:
    "Sample Wema payment confirmation with a verification code a merchant can check.",
};

export default function ReceiptPage() {
  return (
    <div className="mx-auto max-w-lg px-4 py-10 sm:px-6 sm:py-14">
      <div className="mb-6">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Sample confirmation
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-charcoal">
          Payment successful
        </h1>
      </div>

      <article className="overflow-hidden rounded-xl border border-border bg-white">
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <div>
            <p className="text-sm font-semibold text-charcoal">Wema</p>
            <p className="text-xs text-muted-foreground">Transfer confirmation</p>
          </div>
          <span className="text-xs font-medium text-success">Successful</span>
        </div>

        <div className="space-y-6 px-5 py-6">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Amount
            </p>
            <p className="mt-1 text-4xl font-semibold tracking-tight text-charcoal tabular-nums">
              ₦50,000.00
            </p>
          </div>

          <dl className="divide-y divide-border border-y border-border text-sm">
            <div className="flex justify-between gap-4 py-3">
              <dt className="text-muted-foreground">To</dt>
              <dd className="text-right font-medium text-charcoal">
                Adeola Stores
                <span className="mt-0.5 block text-xs font-normal text-muted-foreground">
                  ****8830
                </span>
              </dd>
            </div>
            <div className="flex justify-between gap-4 py-3">
              <dt className="text-muted-foreground">From</dt>
              <dd className="text-right font-medium text-charcoal">
                John Adeyemi
                <span className="mt-0.5 block text-xs font-normal text-muted-foreground">
                  ****4521
                </span>
              </dd>
            </div>
            <div className="flex justify-between gap-4 py-3">
              <dt className="text-muted-foreground">Date</dt>
              <dd className="font-medium text-charcoal">8 October 2026</dd>
            </div>
            <div className="flex justify-between gap-4 py-3">
              <dt className="text-muted-foreground">Time</dt>
              <dd className="font-medium text-charcoal">2:14 PM</dd>
            </div>
            <div className="flex justify-between gap-4 py-3">
              <dt className="text-muted-foreground">Reference</dt>
              <dd className="font-mono text-xs font-medium text-charcoal">WEMA-839201</dd>
            </div>
          </dl>

          <div className="border border-border bg-background px-4 py-5 text-center">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Verification code
            </p>
            <p className="mt-2 font-mono text-2xl font-semibold tracking-[0.18em] text-charcoal">
              {DEMO_CODES.verified}
            </p>
            <p className="mx-auto mt-3 max-w-xs text-xs leading-relaxed text-muted-foreground">
              Show this verification code to the merchant if payment verification
              is required.
            </p>
          </div>
        </div>

        <div className="border-t border-border px-5 py-5">
          <Button
            className="h-12 w-full"
            size="lg"
            render={<Link href={`/verify?code=${DEMO_CODES.verified}`} />}
          >
            Verify this payment
          </Button>
        </div>
      </article>
    </div>
  );
}
