import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "SportZy",
  description: "Ecommerce website",
  keywords: "online shopping, e-commerce, buy and sell",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="shadow">
          <div className="container px-4 mx-auto py-2">
            <div className="flex items-center justify-between">
              <Link href="/">
                <h1 className="text-2xl font-bold">SportZy</h1>
              </Link>
              <nav>
                <ul className="flex space-x-4">
                  <li>
                    <Link
                      className="text-gray-600 hover:text-gray-800"
                      href="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-600 hover:text-gray-800"
                      href="about"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-600 hover:text-gray-800"
                      href="products"
                    >
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-600 hover:text-gray-800"
                      href="contact"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        {children}
        <footer>&copy; 2025 SportZy</footer>
      </body>
    </html>
  );
}
