import Link from "next/link";
import { BrandLockup } from "@/components/brand-mark";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm space-y-3">
          <BrandLockup />
          <p className="text-sm text-muted-foreground">Wema Verify.</p>
        </div>
        <div className="grid grid-cols-2 gap-8 text-sm">
          <div className="space-y-2">
            <p className="font-medium text-foreground">Product</p>
            <Link
              href="/verify"
              className="block text-muted-foreground hover:text-foreground"
            >
              Verify a Payment
            </Link>
            <Link
              href="/receipt"
              className="block text-muted-foreground hover:text-foreground"
            >
              Sample receipt
            </Link>
            <Link
              href="/whatsapp"
              className="block text-muted-foreground hover:text-foreground"
            >
              WhatsApp (future)
            </Link>
          </div>
          <div className="space-y-2">
            <p className="font-medium text-foreground">Prototype</p>
            <p className="text-muted-foreground">Seeded data only</p>
            <p className="text-muted-foreground">No real banking API</p>
            <p className="text-muted-foreground">V1: Wema-to-Wema</p>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-muted-foreground sm:px-6">
          Built for demonstration. Transaction records are fictional seed data.
        </p>
      </div>
    </footer>
  );
}
