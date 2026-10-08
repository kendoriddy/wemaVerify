import Link from "next/link";
import { BrandLockup } from "@/components/brand-mark";

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-wema-purple-deep text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm space-y-3">
          <BrandLockup inverted />
          <p className="text-sm leading-relaxed text-white/70">
            Confirm Wema payments from the transaction record before releasing
            goods or services.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-10 text-sm">
          <div className="space-y-2">
            <p className="font-medium text-white">Product</p>
            <Link href="/verify" className="block text-white/70 hover:text-white">
              Verify a Payment
            </Link>
            <Link href="/receipt" className="block text-white/70 hover:text-white">
              Receipt
            </Link>
            <Link href="/channels" className="block text-white/70 hover:text-white">
              Channels
            </Link>
          </div>
          <div className="space-y-2">
            <p className="font-medium text-white">Coverage</p>
            <p className="text-white/70">Wema-to-Wema transfers</p>
            <p className="text-white/70">A code is not an OTP or PIN</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs leading-relaxed text-white/50 sm:px-6">
          Wema Verify is an independent prototype and is not an official Wema Bank
          product.
        </p>
      </div>
    </footer>
  );
}
