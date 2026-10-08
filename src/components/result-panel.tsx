"use client";

import { useState } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  CheckCircle2,
  Copy,
  Check,
  SearchX,
  ShieldAlert,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatAmount } from "@/lib/verification";
import type { VerificationResult } from "@/types";
import { cn } from "@/lib/utils";

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-border/70 py-3 last:border-0">
      <dt className="shrink-0 text-sm text-muted-foreground">{label}</dt>
      <dd className="text-right text-sm font-medium text-foreground">{value}</dd>
    </div>
  );
}

function CopyDetailsButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <Button
      type="button"
      variant="outline"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setCopied(true);
          window.setTimeout(() => setCopied(false), 1800);
        } catch {
          // Clipboard may be unavailable in some environments
        }
      }}
    >
      {copied ? <Check /> : <Copy />}
      {copied ? "Copied" : "Copy details"}
    </Button>
  );
}

export function ResultPanel({
  result,
  queriedCode,
}: {
  result: VerificationResult;
  queriedCode: string;
}) {
  if (result.status === "not_found") {
    return (
      <div className="animate-fade-up overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
        <div className="bg-[#f4f4f4] px-5 py-6 sm:px-7">
          <div className="flex items-start gap-3">
            <div className="animate-check-pop flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-charcoal text-white">
              <SearchX className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Result
              </p>
              <h2 className="mt-1 text-2xl font-semibold tracking-tight text-charcoal">
                Transaction Not Found
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                No Wema transaction matched{" "}
                <span className="font-mono text-foreground">{queriedCode}</span>. This
                does not prove fraud on its own — but you should pause and confirm
                payment another way before releasing goods or services.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-4 px-5 py-5 sm:px-7">
          <div className="rounded-lg border border-border bg-secondary/50 p-4 text-sm text-muted-foreground">
            <p className="font-medium text-foreground">What to do next</p>
            <ul className="mt-2 list-disc space-y-1 pl-4">
              <li>Ask the customer for the correct verification code or reference.</li>
              <li>Do not release goods based on a screenshot alone.</li>
              <li>Retry once you have a fresh code from a Wema transfer.</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Button render={<Link href="/verify" />}>Verify another</Button>
            <Button variant="outline" render={<Link href="/receipt" />}>
              View sample receipt
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const txn = result.transaction!;
  const isVerified = result.status === "verified";
  const detailsText = [
    `Status: ${isVerified ? "Payment Verified" : "Check Transaction Details"}`,
    `Code: ${txn.verificationCode}`,
    `Reference: ${txn.transactionReference}`,
    `Amount: ${formatAmount(txn.amount, txn.currency)}`,
    `From: ${txn.senderName} (${txn.senderAccountMasked})`,
    `To: ${txn.receiverName} (${txn.receiverAccountMasked})`,
    `Date: ${txn.date} ${txn.time}`,
    `Txn status: ${txn.status}`,
  ].join("\n");

  return (
    <div className="animate-fade-up overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
      <div
        className={cn(
          "px-5 py-6 sm:px-7",
          isVerified ? "bg-[#e8f5ee]" : "bg-[#fbf3e6]",
        )}
      >
        <div className="flex items-start gap-3">
          <div
            className={cn(
              "animate-check-pop flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white",
              isVerified ? "bg-success" : "bg-warning",
            )}
          >
            {isVerified ? (
              <CheckCircle2 className="h-5 w-5" />
            ) : (
              <AlertTriangle className="h-5 w-5" />
            )}
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Result
            </p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-charcoal">
              {isVerified ? "Payment Verified" : "Check Transaction Details"}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {isVerified
                ? "Transaction found in Wema records with a successful status."
                : result.warningReason}
            </p>
          </div>
        </div>
      </div>

      <div className="px-5 py-2 sm:px-7">
        <dl>
          <DetailRow label="Amount" value={formatAmount(txn.amount, txn.currency)} />
          <DetailRow
            label="Status"
            value={txn.status.charAt(0).toUpperCase() + txn.status.slice(1)}
          />
          <DetailRow
            label="From"
            value={`${txn.senderName} · ${txn.senderAccountMasked}`}
          />
          <DetailRow
            label="To"
            value={`${txn.receiverName} · ${txn.receiverAccountMasked}`}
          />
          <DetailRow label="Date" value={txn.date} />
          <DetailRow label="Time" value={txn.time} />
          <DetailRow label="Reference" value={txn.transactionReference} />
          <DetailRow label="Code" value={txn.verificationCode} />
        </dl>
      </div>

      {!isVerified && (
        <div className="mx-5 mb-4 flex gap-3 rounded-lg border border-[#ead9b8] bg-[#fffaf0] p-4 sm:mx-7">
          <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-warning" />
          <p className="text-sm text-muted-foreground">
            The code is real, but the details may not match what you expect as a
            merchant. Confirm amount, receiver, and status before releasing goods.
          </p>
        </div>
      )}

      <div className="flex flex-col gap-2 border-t border-border px-5 py-5 sm:flex-row sm:px-7">
        <CopyDetailsButton text={detailsText} />
        <Button
          variant={isVerified ? "outline" : "default"}
          render={<Link href="/verify" />}
        >
          Verify another
        </Button>
      </div>
    </div>
  );
}
