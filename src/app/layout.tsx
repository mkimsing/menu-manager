import "./globals.css";
import type { Metadata } from "next";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import { Inter } from "next/font/google";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Navbar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <StyledEngineProvider injectFirst>
        <body className={inter.className}>
          <Navbar />
          {children}
        </body>
      </StyledEngineProvider>
    </html>
  );
}
