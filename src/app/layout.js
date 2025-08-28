import "./globals.css";

import config from "@/config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import AppProvider from "@/redux/provider";
import MainLayout from "./layouts/MainLayout";

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
        <AppProvider>
          <MainLayout>
            <Header />
            <main>{children}</main>
            <Footer />
            <ToastContainer />
          </MainLayout>
        </AppProvider>
      </body>
    </html>
  );
}
