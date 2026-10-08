import { transactions } from "@/data/transactions";
import type { Transaction, VerificationResult } from "@/types";

/**
 * Normalize a verification code for lookup.
 * Accepts spaces, hyphens, and mixed case (e.g. "wma 72k91", "WMA-72K91").
 */
export function normalizeVerificationCode(code: string): string {
  const cleaned = code.trim().toUpperCase().replace(/[\s-]+/g, "");
  if (!cleaned) return "";

  // Re-insert canonical WMA-XXXXX shape when the prefix is present
  if (cleaned.startsWith("WMA") && cleaned.length > 3) {
    return `WMA-${cleaned.slice(3)}`;
  }

  return cleaned;
}

function findSeedTransaction(normalizedCode: string): Transaction | undefined {
  return transactions.find(
    (txn) => normalizeVerificationCode(txn.verificationCode) === normalizedCode,
  );
}

/**
 * verifyTransaction — prototype verification service.
 *
 * Flow: UI → verification service → seeded transaction repository.
 *
 * NOTE: The seed layer is for the Hackaholics 7.0 prototype only.
 * Production would replace the repository with an authenticated Wema Bank API
 * (merchant-authenticated lookup by verification code / transaction reference).
 */
export function verifyTransaction(code: string): VerificationResult {
  const normalized = normalizeVerificationCode(code);

  if (!normalized) {
    return { status: "not_found" };
  }

  const transaction = findSeedTransaction(normalized);

  if (!transaction) {
    return { status: "not_found" };
  }

  if (transaction.status === "successful" && !transaction.warningReason) {
    return {
      status: "verified",
      transaction,
    };
  }

  return {
    status: "warning",
    transaction,
    warningReason:
      transaction.warningReason ??
      `Transaction found with status "${transaction.status}". Review the details before releasing goods or services.`,
  };
}

export function formatAmount(amount: number, currency = "NGN"): string {
  const formatted = new Intl.NumberFormat("en-NG", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);

  if (currency === "NGN") {
    return `₦${formatted}`;
  }

  return `${currency} ${formatted}`;
}
