import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <SpeedInsights debug={process.env.NODE_ENV === "development"} />
      </body>
    </html>
  );
}
