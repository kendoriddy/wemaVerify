import { cn } from "@/lib/utils";

/** Custom concept mark for the hackathon prototype — not the official Wema logo. */
export function BrandMark({
  className,
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const dim = size === "sm" ? "h-8 w-8" : size === "lg" ? "h-12 w-12" : "h-9 w-9";

  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(dim, className)}
      aria-hidden="true"
    >
      <rect width="40" height="40" rx="10" fill="#5F259F" />
      <path
        d="M11 26V14h3.2l3.1 8.4L20.4 14H24v12h-2.4v-7.6L18.2 26h-2.4l-3.4-7.6V26H11Z"
        fill="white"
      />
      <path
        d="M27.2 14h2.5v9.2c0 1.7-1.1 2.9-3 2.9-.4 0-.8 0-1.1-.1v-2c.2.1.5.1.8.1.7 0 1.1-.4 1.1-1.2V14H27.2Z"
        fill="white"
        opacity="0.92"
      />
      <circle cx="31.5" cy="12.5" r="2.2" fill="#F3EBF8" />
    </svg>
  );
}

export function BrandLockup({
  className,
  size = "md",
  inverted = false,
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
  inverted?: boolean;
}) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <BrandMark size={size} />
      <div className="leading-tight">
        <p
          className={cn(
            "font-semibold tracking-tight",
            inverted ? "text-white" : "text-charcoal",
            size === "lg" ? "text-xl" : size === "sm" ? "text-sm" : "text-base",
          )}
        >
          Wema Verify
        </p>
        {size !== "sm" && (
          <p
            className={cn(
              "text-[11px]",
              inverted ? "text-white/70" : "text-muted-foreground",
            )}
          >
            Hackathon Prototype
          </p>
        )}
      </div>
    </div>
  );
}
