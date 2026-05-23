"use client";

import { Turnstile } from "@marsidev/react-turnstile";

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "1x00000000000000000000AA";

export function TurnstileWidget({
  onSuccess,
}: {
  onSuccess: (token: string) => void;
}) {
  if (!process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY) {
    return null;
  }

  return (
    <Turnstile
      siteKey={SITE_KEY}
      onSuccess={onSuccess}
      options={{ size: "invisible" }}
    />
  );
}
