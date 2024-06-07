import type { Metadata } from "next";
import styles from "./styles/base.module.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

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
      <body className={styles.general_body}>
        <Navbar></Navbar>
        <div className={styles.general_content}>
          {children}
        </div>
        <Footer></Footer>
      </body>
    </html>
  );
}
