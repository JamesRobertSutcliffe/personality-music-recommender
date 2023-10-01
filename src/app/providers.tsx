"use client";
import { NextUIProvider } from "@nextui-org/react";
import { EmailProvider } from "./context/EmailContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <EmailProvider>
      <NextUIProvider>{children}</NextUIProvider>
    </EmailProvider>
  );
}
