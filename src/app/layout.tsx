import "./globals.css";
import CartProvider from "../components/CartProvider";
import Footer from "../components/Footer";

export const metadata = {
  title: "NextJs Portfolio",
  description: "FrontEnd Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-theme="dark" lang="en">
      <body className="relative min-h-screen">
        <CartProvider>{children}</CartProvider>
        <Footer />
      </body>
    </html>
  );
}
