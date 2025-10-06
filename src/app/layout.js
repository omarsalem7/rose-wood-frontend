import "./globals.css";
import GoogleTagManager, { GTMNoScript } from "@/components/GoogleTagManager";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <GoogleTagManager
          containerId={process.env.NEXT_PUBLIC_GTM_ID || "GTM-WP3WQWCS"}
        />
        <GTMNoScript
          containerId={process.env.NEXT_PUBLIC_GTM_ID || "GTM-WP3WQWCS"}
        />
        {children}
      </body>
    </html>
  );
}
