import { Suspense } from "react";
import type { Metadata } from "next";
import { ResultPanel } from "@/components/result-panel";
import { VerifyForm } from "@/components/verify-form";
import { normalizeVerificationCode, verifyTransaction } from "@/lib/verification";

export const metadata: Metadata = {
  title: "Verify a Payment",
  description:
    "Enter a Wema verification code to check whether a transfer appears in transaction records.",
};

type SearchParams = Promise<{ code?: string | string[] }>;

async function VerifyContent({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const raw = Array.isArray(params.code) ? params.code[0] : params.code;
  const hasCode = Boolean(raw && raw.trim());
  const normalized = hasCode ? normalizeVerificationCode(raw!) : "";
  const result = hasCode ? verifyTransaction(raw!) : null;

  return (
    <>
      <div className="mb-8 space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight text-charcoal">
          Verify a Wema Payment
        </h1>
        <p className="text-muted-foreground">
          Enter the verification code shown on the customer&apos;s Wema payment
          notification or receipt.
        </p>
      </div>

      {result && normalized ? (
        <div className="space-y-8">
          <ResultPanel result={result} queriedCode={normalized} />
          <div className="rounded-xl border border-border bg-white p-5">
            <p className="mb-3 text-sm font-medium text-charcoal">
              Check another payment
            </p>
            <VerifyForm compact />
          </div>
        </div>
      ) : (
        <div className="rounded-2xl border border-border bg-white p-5 shadow-sm sm:p-7">
          <VerifyForm />
        </div>
      )}
    </>
  );
}

function VerifyFallback() {
  return (
    <div className="space-y-8 animate-pulse-soft">
      <div className="space-y-2">
        <div className="h-4 w-24 rounded bg-muted" />
        <div className="h-9 w-64 rounded bg-muted" />
        <div className="h-4 w-full max-w-md rounded bg-muted" />
      </div>
      <div className="h-48 rounded-2xl border border-border bg-white" />
    </div>
  );
}

export default function VerifyPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-14">
      <Suspense fallback={<VerifyFallback />}>
        <VerifyContent searchParams={searchParams} />
      </Suspense>
    </div>
  );
}
