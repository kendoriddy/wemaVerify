"use client";

import { useMemo, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DEMO_CODES } from "@/data/transactions";
import { normalizeVerificationCode } from "@/lib/verification";
import { cn } from "@/lib/utils";

const demos = [
  { label: "Successful", code: DEMO_CODES.verified },
  { label: "Invalid", code: DEMO_CODES.notFound },
  { label: "Wrong receiver", code: DEMO_CODES.wrongReceiver },
  { label: "Pending", code: DEMO_CODES.pending },
] as const;

export function VerifyForm({
  initialCode = "",
  compact = false,
}: {
  initialCode?: string;
  compact?: boolean;
}) {
  const router = useRouter();
  const [code, setCode] = useState(initialCode);
  const [isPending, startTransition] = useTransition();
  const [checking, setChecking] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const preview = useMemo(() => {
    if (!code.trim()) return "";
    return normalizeVerificationCode(code);
  }, [code]);

  function submit(nextCode?: string) {
    const value = (nextCode ?? code).trim();
    if (!value) {
      setError("Enter a verification code to continue.");
      return;
    }

    setError(null);
    setChecking(true);

    // Short prototype loading state so the merchant feels a real check
    window.setTimeout(() => {
      startTransition(() => {
        const normalized = normalizeVerificationCode(value);
        router.push(`/verify?code=${encodeURIComponent(normalized)}`);
        setChecking(false);
      });
    }, 900);
  }

  const busy = checking || isPending;

  return (
    <div className={cn("w-full", compact ? "space-y-3" : "space-y-5")}>
      <form
        className="space-y-3"
        onSubmit={(e) => {
          e.preventDefault();
          submit();
        }}
      >
        <label htmlFor="verification-code" className="sr-only">
          Verification code
        </label>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Input
            id="verification-code"
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
              if (error) setError(null);
            }}
            placeholder="e.g. WMA-72K91"
            autoComplete="off"
            spellCheck={false}
            className="h-12 flex-1 font-mono text-base tracking-wide uppercase"
            disabled={busy}
            aria-invalid={!!error}
          />
          <Button type="submit" size="lg" className="h-12 shrink-0 px-6" disabled={busy}>
            {busy ? (
              <>
                <Loader2 className="animate-spin" />
                Checking…
              </>
            ) : (
              <>
                <Search />
                Verify
              </>
            )}
          </Button>
        </div>
        {preview && !busy && (
          <p className="text-xs text-muted-foreground">
            Looking up: <span className="font-mono text-foreground">{preview}</span>
          </p>
        )}
        {busy && (
          <p className="animate-pulse-soft text-sm text-muted-foreground">
            Checking Wema transaction records…
          </p>
        )}
        {error && <p className="text-sm text-destructive">{error}</p>}
      </form>

      {!compact && (
        <div className="rounded-lg border border-dashed border-border bg-secondary/40 px-3 py-3">
          <p className="mb-2 text-xs font-medium text-muted-foreground">
            Demo transactions — tap to try
          </p>
          <div className="flex flex-wrap gap-2">
            {demos.map((demo) => (
              <button
                key={demo.code}
                type="button"
                disabled={busy}
                onClick={() => {
                  setCode(demo.code);
                  submit(demo.code);
                }}
                className="rounded-md border border-border bg-white px-2.5 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground disabled:opacity-50"
              >
                {demo.label}
                <span className="ml-1.5 font-mono text-[10px] opacity-70">{demo.code}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      <p className="text-xs text-muted-foreground">
        V1 verifies Wema-to-Wema transfers only. A verification code is not an OTP
        and never asks for your PIN or password.
      </p>
    </div>
  );
}
