"use client";
import React, { PropsWithChildren } from "react";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import NextAppDirEmotionCacheProvider from "./EmotionCache";
import theme from "./theme";
export default function ThemeRegistry({ children }: PropsWithChildren) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: "mui", prepend: true }}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          {children}
        </ThemeProvider>
      </StyledEngineProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
