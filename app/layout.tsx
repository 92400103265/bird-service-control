import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bird Service Control | Rajkot",
  description:
    "Bird net, invisible grill, child safety net and artificial grass installation in Rajkot.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4500,
            style: { borderRadius: "14px", padding: "14px 18px", fontWeight: 600 },
          }}
        />
      </body>
    </html>
  );
}
