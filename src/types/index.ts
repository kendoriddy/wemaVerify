export type TransactionStatus =
  | "successful"
  | "pending"
  | "failed"
  | "reversed";

export type TransactionType = "transfer" | "payment";

export interface Transaction {
  id: string;
  verificationCode: string;
  transactionReference: string;
  senderName: string;
  senderAccountMasked: string;
  receiverName: string;
  receiverAccountMasked: string;
  amount: number;
  currency: string;
  date: string;
  time: string;
  status: TransactionStatus;
  type: TransactionType;
  description: string;
  /** Set when a real transaction should not be treated as the expected payment. */
  warningReason?: string;
}

export type VerificationStatus = "verified" | "not_found" | "warning";

export interface VerificationResult {
  status: VerificationStatus;
  transaction?: Transaction;
  warningReason?: string;
}
