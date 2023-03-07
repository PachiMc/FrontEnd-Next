import "./globals.css";
import GlobalProvider from "../components/GlobalProvider";
import Footer from "../components/Footer";
import Header from "../components/Header";
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
        <GlobalProvider>
          <Header />
          {children}
        </GlobalProvider>
        <Footer />
      </body>
    </html>
  );
}
