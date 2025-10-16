"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"        // adds `class="dark"` to <html>
      defaultTheme="system"    // follows system by default
      enableSystem             // respects system dark mode
    >
      {children}
    </ThemeProvider>
  );
}
