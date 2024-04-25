import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Assignment for Dice",
  description: "This project is an assignment for the company named Dice. It is built with Nest.js for the backend, Next.js for the frontend, and MongoDB for the database.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="" style={{ backgroundColor: "black" }}>{children}</body>
    </html>
  );
}
