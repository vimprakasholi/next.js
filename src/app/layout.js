import "./globals.css";

import config from "@/config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AppProvider from "@/redux/provider";
import MainLayout from "./layouts/MainLayout";
import ToastWrapper from "@/components/ToastWrapper";

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
    <html lang="en" className="scroll-smooth">
      <body>
        <AppProvider>
          <MainLayout>
            <Header />
            <main>{children}</main>
            <Footer />
            <ToastWrapper />
          </MainLayout>
        </AppProvider>
      </body>
    </html>
  );
}
