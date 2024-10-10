import type { Metadata } from "next";
import { Bai_Jamjuree } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme";
import ogImage from "./opengraph-image.png";

const bai_Jamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
});
console.log(ogImage);
export const metadata: Metadata = {
  title: "CineSpot",
  metadataBase: new URL("https://cine-spot-gules.vercel.app"),
  description:
    "Discover the world of cinema with CineSpot, your go-to destination for the latest in movies, reviews, and entertainment.",
  openGraph: {
    title: "CineSpot",
    description:
      "Your go-to destination for the latest in movies, reviews, and entertainment.",
    url: "https://cine-spot-gules.vercel.app/",
    siteName: "CineSpot",
    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CineSpot",
    description:
      "Your go-to destination for the latest in movies, reviews, and entertainment.",
    images: [
      {
        url: "https://cine-spot-gules.vercel.app/twitter-image.png",
        alt: "CineSpot Twitter Image",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`text-lg ${bai_Jamjuree.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster
            position="top-center"
            reverseOrder={false}
            gutter={8}
            toastOptions={{
              duration: 3000,
              style: { backgroundColor: "#c4c9e0" },
              success: {
                iconTheme: { primary: "green", secondary: "" },
              },
              error: {
                iconTheme: { primary: "red", secondary: "" },
              },
            }}
          />
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
