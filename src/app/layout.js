import "./globals.css";

import config from "@/config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: {
    default: config.appName,
    template: `${config.appName} ~ %s`,
  },
  description: "Ecommerce website",
  keywords: "online shopping, e-commerce, buy and sell",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
