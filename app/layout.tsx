import type { Metadata } from "next";
import styles from "./styles/base.module.css";
import Navbar from "./components/navbar";
// import "./globals.css";

export const metadata: Metadata = {
  title: "Test Application",
  description: "Test Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={styles.general}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
