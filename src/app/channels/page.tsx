import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "WhatsApp and USSD",
  description:
    "Future Wema channels for checking a payment verification code on WhatsApp or USSD.",
};

export default function ChannelsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
      <p className="text-xs font-medium uppercase tracking-wide text-warning">
        Future
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-charcoal">
        WhatsApp and USSD
      </h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        Future integration: merchants could verify a Wema payment on WhatsApp or
        by USSD. This preview does not send messages or place a call.
      </p>

      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        <details className="group overflow-hidden rounded-xl border border-border bg-white">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 [&::-webkit-details-marker]:hidden">
            <div>
              <p className="text-sm font-semibold text-charcoal">WhatsApp</p>
              <p className="text-xs text-muted-foreground">Wema Verify</p>
            </div>
            <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
          </summary>
          <div className="space-y-3 border-t border-border bg-background px-4 py-5 sm:px-5">
            <div className="max-w-[85%] rounded-lg border border-border bg-white px-3 py-2.5 text-sm">
              <p className="text-xs text-muted-foreground">Merchant</p>
              <p className="mt-1 font-mono text-charcoal">Verify WMA-72K91</p>
            </div>
            <div className="ml-auto max-w-[90%] rounded-lg bg-white px-3 py-2.5 text-sm shadow-sm ring-1 ring-border">
              <p className="text-xs text-muted-foreground">Wema Verify</p>
              <p className="mt-1 font-medium text-charcoal">Payment Verified</p>
              <p className="mt-2 leading-relaxed text-charcoal">
                Amount: ₦50,000.00
                <br />
                From: John Adeyemi
                <br />
                To: Adeola Stores
                <br />
                Date: 8 Oct 2026
                <br />
                Time: 2:14 PM
                <br />
                Status: Successful
              </p>
            </div>
          </div>
        </details>

        <details className="group overflow-hidden rounded-xl border border-border bg-white">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 [&::-webkit-details-marker]:hidden">
            <div>
              <p className="text-sm font-semibold text-charcoal">USSD</p>
              <p className="text-xs text-muted-foreground">Illustrative session</p>
            </div>
            <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
          </summary>
          <div className="border-t border-border bg-background px-4 py-5 sm:px-5">
            <div className="mx-auto max-w-xs rounded-xl bg-charcoal px-4 py-5 text-white">
              <p className="font-mono text-sm text-white/70">*945*72K91#</p>
              <div className="mt-4 space-y-1 font-mono text-sm leading-relaxed">
                <p>Wema Verify</p>
                <p>Payment Verified</p>
                <p>NGN 50,000.00</p>
                <p>From: John Adeyemi</p>
                <p>To: Adeola Stores</p>
                <p>8 Oct 2026, 2:14 PM</p>
              </div>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              Sample session only. Dialing this code does not reach Wema.
            </p>
          </div>
        </details>
      </div>

      <div className="mt-8">
        <Button className="h-11" render={<Link href="/verify" />}>
          Verify a Payment
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
}
