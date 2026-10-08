import Link from "next/link";
import { BrandLockup } from "@/components/brand-mark";

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-wema-purple-deep text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm space-y-3">
          <BrandLockup inverted />
          <p className="text-sm text-white/75">
            Wema Verify — Hackathon Prototype for Hackaholics 7.0 by Wema Bank @
            University of Ibadan. Not a live banking product.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 text-sm">
          <div className="space-y-2">
            <p className="font-medium text-white">Product</p>
            <Link href="/verify" className="block text-white/75 hover:text-white">
              Verify a Payment
            </Link>
            <Link href="/receipt" className="block text-white/75 hover:text-white">
              Sample receipt
            </Link>
            <Link href="/whatsapp" className="block text-white/75 hover:text-white">
              WhatsApp (future)
            </Link>
          </div>
          <div className="space-y-2">
            <p className="font-medium text-white">Prototype</p>
            <p className="text-white/75">Seeded data only</p>
            <p className="text-white/75">No real banking API</p>
            <p className="text-white/75">V1: Wema-to-Wema</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/15">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-white/60 sm:px-6">
          Built for demonstration. Transaction records are fictional seed data.
        </p>
      </div>
    </footer>
  );
}
