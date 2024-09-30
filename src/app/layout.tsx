import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohamed Firas Adil",
  description: "Personal Portfolio Website by Mohamed Firas Adil, an astute Computer Science student with a zeal for learning.",
  keywords: "Mohamed Firas Adil,Firas Adil,Mohamed Firas,Firas,Personal Portfolio,Portfolio,technology,software,cli,gui,websites,apps,python",
  openGraph: {
    title: "Mohamed Firas Adil",
    description: "Personal Portfolio Website by Mohamed Firas Adil, an astute Computer Science student with a zeal for learning.",
    images: "/icon.png",
    url: "https://www.firasadil.com",
  }  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-screen min-h-screen">
        {children}
      </body>
    </html>
  );
}
