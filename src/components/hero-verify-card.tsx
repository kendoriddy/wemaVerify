import { CheckCircle2 } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";

/** Hero visual: a verification result, not a marketing illustration. */
export function HeroVerifyCard() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div
        aria-hidden
        className="absolute -inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_30%_20%,#f3ebf8_0%,transparent_55%),radial-gradient(circle_at_80%_80%,#e8f5ee_0%,transparent_50%)]"
      />
      <div className="overflow-hidden rounded-xl border border-border bg-white shadow-[0_16px_40px_-28px_rgba(26,26,26,0.45)]">
        <div className="flex items-center justify-between border-b border-border px-5 py-3">
          <div className="flex items-center gap-2">
            <BrandMark size="sm" />
            <span className="text-sm font-semibold">Wema Verify</span>
          </div>
          <span className="rounded-full bg-[#e8f5ee] px-2.5 py-1 text-[11px] font-medium text-success">
            Verified
          </span>
        </div>
        <div className="px-5 py-6">
          <div className="flex items-center gap-2 text-success">
            <CheckCircle2 className="h-4 w-4" />
            <p className="text-sm font-medium">Verified</p>
          </div>
          <p className="mt-3 text-4xl font-semibold tracking-tight text-charcoal tabular-nums">
            ₦50,000.00
          </p>
          <p className="mt-5 text-sm text-charcoal">
            <span className="font-medium">John Adeyemi</span>
            <span className="mx-2 text-muted-foreground">→</span>
            <span className="font-medium">Adeola Stores</span>
          </p>
          <p className="mt-1 text-sm text-muted-foreground">8 Oct 2026 · 2:14 PM</p>
          <p className="mt-5 font-mono text-xs tracking-wide text-muted-foreground">
            WEMA-839201
          </p>
        </div>
      </div>
    </div>
  );
}
