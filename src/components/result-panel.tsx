"use client";

import { useState } from "react";
import Link from "next/link";
import { AlertTriangle, Check, CheckCircle2, Copy, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatAmount, formatStatus } from "@/lib/verification";
import type { Transaction, VerificationResult } from "@/types";
import { cn } from "@/lib/utils";

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-border py-3 last:border-0">
      <dt className="text-sm text-muted-foreground">{label}</dt>
      <dd className="text-right text-sm font-medium text-charcoal">{value}</dd>
    </div>
  );
}

function CopyDetailsButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <Button
      type="button"
      variant="outline"
      className="h-11 bg-white"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setCopied(true);
          window.setTimeout(() => setCopied(false), 1800);
        } catch {
          setCopied(false);
        }
      }}
    >
      {copied ? <Check /> : <Copy />}
      {copied ? "Copied" : "Copy Transaction Details"}
    </Button>
  );
}

function TransactionRecord({ txn }: { txn: Transaction }) {
  return (
    <>
      <div className="border-b border-border px-5 py-6 sm:px-7">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Amount
        </p>
        <p className="mt-1 text-4xl font-semibold tracking-tight text-charcoal tabular-nums">
          {formatAmount(txn.amount, txn.currency)}
        </p>
        <p className="mt-2 text-sm font-medium text-charcoal">{formatStatus(txn.status)}</p>
      </div>
      <dl className="px-5 sm:px-7">
        <DetailRow label="From" value={`${txn.senderName} · ${txn.senderAccountMasked}`} />
        <DetailRow label="To" value={`${txn.receiverName} · ${txn.receiverAccountMasked}`} />
        <DetailRow label="Date" value={txn.date} />
        <DetailRow label="Time" value={txn.time} />
        <DetailRow label="Transaction Reference" value={txn.transactionReference} />
        <DetailRow label="Verification Code" value={txn.verificationCode} />
      </dl>
      <p className="px-5 pb-2 pt-4 text-xs text-muted-foreground sm:px-7">
        Transaction details above are based on the Wema transaction record.
      </p>
    </>
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
      <div className="overflow-hidden rounded-xl border border-border bg-white">
        <div className="bg-[#fdf2f2] px-5 py-6 sm:px-7">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-destructive text-white">
            <XCircle className="h-6 w-6" />
          </div>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-charcoal">
            Payment Not Found
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            We couldn&apos;t find a transaction associated with{" "}
            <span className="font-mono text-charcoal">{queriedCode}</span>.
          </p>
        </div>
        <div className="space-y-4 px-5 py-5 sm:px-7">
          <p className="text-sm leading-relaxed text-charcoal">
            The customer may have provided an invalid code, or the transaction may
            not exist.
          </p>
          <p className="text-sm font-medium text-charcoal">
            Do not release goods or services until payment is confirmed.
          </p>
          <Button className="h-11" render={<Link href="/verify" />}>
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  const txn = result.transaction!;
  const isVerified = result.status === "verified";
  const detailsText = [
    isVerified ? "Payment Verified" : "Transaction Found — Check Transaction Details",
    `Amount: ${formatAmount(txn.amount, txn.currency)}`,
    `Status: ${formatStatus(txn.status)}`,
    `From: ${txn.senderName} (${txn.senderAccountMasked})`,
    `To: ${txn.receiverName} (${txn.receiverAccountMasked})`,
    `Date: ${txn.date}`,
    `Time: ${txn.time}`,
    `Transaction Reference: ${txn.transactionReference}`,
    `Verification Code: ${txn.verificationCode}`,
  ].join("\n");

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-white">
      <div className={cn("px-5 py-6 sm:px-7", isVerified ? "bg-[#eef6f1]" : "bg-[#fbf6eb]")}>
        <div
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-full text-white",
            isVerified ? "bg-success" : "bg-warning",
          )}
        >
          {isVerified ? (
            <CheckCircle2 className="h-6 w-6" />
          ) : (
            <AlertTriangle className="h-6 w-6" />
          )}
        </div>
        <h2 className="mt-4 text-2xl font-semibold tracking-tight text-charcoal">
          {isVerified ? "Payment Verified" : "Transaction Found"}
        </h2>
        {!isVerified && (
          <p className="mt-1 text-sm font-semibold text-warning">Check Transaction Details</p>
        )}
        <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">
          {isVerified
            ? "This transaction was found in Wema's transaction records."
            : (result.warningReason ??
              "This verification code belongs to a real Wema transaction, but the transaction details may not match the payment you're expecting.")}
        </p>
      </div>

      <TransactionRecord txn={txn} />

      <div className="flex flex-col gap-2 border-t border-border px-5 py-5 sm:flex-row sm:px-7">
        <CopyDetailsButton text={detailsText} />
        <Button className="h-11" render={<Link href="/verify" />}>
          Verify Another Payment
        </Button>
      </div>
    </div>
  );
}
