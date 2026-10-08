import { CheckCircle2 } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";

/** Decorative hero visual showing a verified payment card. */
export function HeroVerifyCard() {
  return (
    <div className="relative mx-auto w-full max-w-md animate-fade-up [animation-delay:120ms]">
      <div
        aria-hidden
        className="absolute -inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_30%_20%,#f3ebf8_0%,transparent_55%),radial-gradient(circle_at_80%_80%,#e8f5ee_0%,transparent_50%)]"
      />
      <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-[0_20px_50px_-28px_rgba(26,26,26,0.45)]">
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <div className="flex items-center gap-2">
            <BrandMark size="sm" />
            <span className="text-sm font-semibold">Wema Verify</span>
          </div>
          <span className="rounded-full bg-[#e8f5ee] px-2.5 py-1 text-[11px] font-medium text-success">
            Verified
          </span>
        </div>
        <div className="space-y-4 px-5 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-success text-white">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-medium">Payment Verified</p>
              <p className="text-xs text-muted-foreground">WMA-72K91 · WEMA-839201</p>
            </div>
          </div>
          <div className="rounded-xl bg-secondary/70 p-4">
            <p className="text-xs text-muted-foreground">Amount</p>
            <p className="mt-1 text-3xl font-semibold tracking-tight text-charcoal">
              ₦50,000
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
              <div>
                <p className="text-muted-foreground">From</p>
                <p className="mt-0.5 font-medium">John Adeyemi</p>
              </div>
              <div>
                <p className="text-muted-foreground">To</p>
                <p className="mt-0.5 font-medium">Adeola Stores</p>
              </div>
              <div>
                <p className="text-muted-foreground">Date</p>
                <p className="mt-0.5 font-medium">8 Oct 2026</p>
              </div>
              <div>
                <p className="text-muted-foreground">Time</p>
                <p className="mt-0.5 font-medium">2:14 PM</p>
              </div>
            </div>
          </div>
          <p className="text-[11px] text-muted-foreground">
            Merchant checked the code before releasing goods — not the screenshot.
          </p>
        </div>
      </div>
    </div>
  );
}
