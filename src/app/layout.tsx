import "./globals.css";
import type { Metadata } from "next";
import { Box } from "@mui/material";
import { Inter } from "next/font/google";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Navbar from "@/components/NavBar";

import ThemeRegistry from "@/theme/ThemeRegistry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Menu Manager",
  description: "Menu management site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeRegistry options={{ key: "mui" }}>
          <Navbar />
          <Box className={"pt-12"}>{children}</Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
