import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Verify via WhatsApp (Future)",
  description:
    "Conceptual future demo of verifying a Wema payment through WhatsApp. Not a live integration.",
};

export default function WhatsAppPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#ead9b8] bg-[#fffaf0] px-3 py-1 text-xs font-medium text-warning">
        FUTURE CONCEPT · Not a real WhatsApp integration
      </div>
      <h1 className="text-3xl font-semibold tracking-tight text-charcoal">
        Verify via WhatsApp
      </h1>
      <p className="mt-3 text-muted-foreground">
        A conceptual channel for merchants who already chat with customers on
        WhatsApp. This screen is a product sketch only — no messages are sent.
      </p>

      <div className="mt-8 animate-fade-up overflow-hidden rounded-2xl border border-border bg-[#e5ddd5] p-4 shadow-sm sm:p-6">
        <div className="mx-auto max-w-sm overflow-hidden rounded-2xl bg-[#efeae2] shadow-md">
          <div className="flex items-center gap-3 bg-[#075e54] px-4 py-3 text-white">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
              <MessageCircle className="h-4 w-4" />
            </div>
            <div>
              <p className="text-sm font-semibold">Wema Verify Bot</p>
              <p className="text-[11px] text-white/80">Future concept · offline demo</p>
            </div>
          </div>

          <div className="space-y-3 px-3 py-4">
            <div className="max-w-[85%] rounded-lg rounded-tl-sm bg-white px-3 py-2 text-sm shadow-sm">
              <p className="text-[#111b21]">
                Good afternoon. Send a Wema verification code to check a payment.
              </p>
              <p className="mt-1 text-right text-[10px] text-[#667781]">2:15 PM</p>
            </div>

            <div className="ml-auto max-w-[85%] rounded-lg rounded-tr-sm bg-[#d9fdd3] px-3 py-2 text-sm shadow-sm">
              <p className="font-mono text-[#111b21]">WMA-72K91</p>
              <p className="mt-1 text-right text-[10px] text-[#667781]">2:15 PM</p>
            </div>

            <div className="max-w-[90%] rounded-lg rounded-tl-sm bg-white px-3 py-2 text-sm shadow-sm">
              <p className="font-medium text-[#111b21]">Payment Verified</p>
              <p className="mt-1 text-[#111b21]">
                ₦50,000 · John Adeyemi → Adeola Stores
                <br />
                8 Oct 2026 · 2:14 PM · WEMA-839201
              </p>
              <p className="mt-2 text-xs text-[#667781]">
                Prototype reply — production would call authenticated Wema APIs.
              </p>
              <p className="mt-1 text-right text-[10px] text-[#667781]">2:15 PM</p>
            </div>
          </div>

          <div className="border-t border-black/5 bg-[#f0f2f5] px-3 py-2 text-center text-[11px] text-[#667781]">
            Chat input disabled — conceptual demo only
          </div>
        </div>
      </div>

      <div className="mt-8 space-y-4 rounded-xl border border-border bg-white p-5">
        <h2 className="font-semibold text-charcoal">Why this channel later?</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
          <li>Many Nigerian merchants already negotiate sales on WhatsApp.</li>
          <li>A bot reply can sit beside the customer conversation.</li>
          <li>V1 ships the web check first; WhatsApp is roadmap (V4).</li>
        </ul>
        <div className="flex flex-col gap-2 pt-2 sm:flex-row">
          <Button render={<Link href="/verify" />}>
            Use web verification now
            <ArrowRight />
          </Button>
          <Button variant="outline" render={<Link href="/" />}>
            Back to home
          </Button>
        </div>
      </div>
    </div>
  );
}
