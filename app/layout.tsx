import type { Metadata, Viewport } from "next";
import { Toaster } from "react-hot-toast";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#153632",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Shweta Invisible Grill | Gurugram - Premium Safety Nets & Invisible Grills",
  description:
    "Shweta Invisible Grill offers premium 316-grade stainless steel invisible grills, bird net installation, child safety nets, and artificial grass in Gurugram, Haryana. Located near Jain Complex, Hans Enclave, Sector 33.",
  keywords: [
    "Shweta Invisible Grill",
    "Invisible Grill Gurugram",
    "Bird Net Installation Gurugram",
    "Balcony Safety Net Gurugram",
    "Child Safety Grill Sector 33 Gurugram",
    "Hans Enclave Rajeev Chowk Gurugram Invisible Grill",
    "Pigeon Netting Gurgaon",
    "Artificial Grass Gurugram",
  ],
  authors: [{ name: "Shweta Invisible Grill" }],
  openGraph: {
    title: "Shweta Invisible Grill | Gurugram",
    description:
      "Expert invisible grills, bird netting, child safety and artificial grass in Gurugram, Haryana. Call +91 8229006831 for a free estimate.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 5000,
            style: {
              background: "#153632",
              color: "#ffffff",
              borderRadius: "12px",
              padding: "14px 20px",
              fontWeight: 600,
              fontSize: "14px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.18)",
            },
            success: {
              iconTheme: {
                primary: "#b7d15d",
                secondary: "#0d2824",
              },
            },
            error: {
              iconTheme: {
                primary: "#e87c45",
                secondary: "#ffffff",
              },
            },
          }}
        />
      </body>
    </html>
  );
}