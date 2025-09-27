import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
