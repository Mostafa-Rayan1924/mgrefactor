import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "../app/globals.css";
import Header from "@/_components/Navigation/Header";
import { ThemeProvider } from "@/_components/Navigation/ThemeProvider";

export const metadata: Metadata = {
  title: "MG Company",
  description: "MG Company For Construction And Marine Works",
  icons: [
    {
      url: "https://res.cloudinary.com/dlaeaq6is/image/upload/v1740054929/Project2-MG-363925_qevbxf.png",
      href: "https://res.cloudinary.com/dlaeaq6is/image/upload/v1740054929/Project2-MG-363925_qevbxf.png",
      sizes: "192x192",
      type: "image/png",
      rel: "icon",
    },
  ],
};
const font = Cairo({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" className="scroll-smooth">
      <body className={`${font.className} overflow-x-hidden antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
