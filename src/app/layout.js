import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ShopDigest - Top Shopify Collections",
  description: "Discover top Shopify collections tailored for your needs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main className="container pt-24">{children}</main>
        </div>
      </body>
    </html>
  );
}
