import { Metadata } from "next";
import "./globals.css";
import { IBM_Plex_Mono, Galdeano } from "next/font/google";

export const plexMono = IBM_Plex_Mono({ weight: ["400"], subsets: ["latin"] });
export const galdeano = Galdeano({ weight: ["400"], subsets: ["latin"] });

const meta: Metadata = {
  title: "robertgrunau.website",
  description: "Robert Grunau's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-white ${galdeano.className}`}>{children}</body>
    </html>
  );
}
