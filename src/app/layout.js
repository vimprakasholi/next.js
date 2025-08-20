import "./globals.css";

export const metadata = {
  title: "SportZy",
  description: "Ecommerce website",
  keywords: "online shopping, e-commerce, buy and sell",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="container mx-auto px-6">
        <header>This is header</header>
        {children}
        <footer>&copy; 2025 SportZy</footer>
      </body>
    </html>
  );
}
