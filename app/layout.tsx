import type { Metadata } from "next";
import styles from "./styles/base.module.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
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

  const contactsNav = ['+7 999 123 45 67', 'hello@cyberia.studio', 'ул. Ярных, д. 35, оф. 10']
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
