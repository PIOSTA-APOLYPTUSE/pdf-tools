import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PDF Tools - 무료 PDF 합치기 & 분할 도구 | 온라인 PDF 편집",
  description: "무료로 PDF 파일을 합치고 분할하세요. 회원가입 없이 바로 사용 가능한 안전한 온라인 PDF 편집 도구입니다. 브라우저에서 바로 처리되어 개인정보가 100% 보호됩니다.",
  keywords: "PDF 합치기, PDF 분할, PDF 도구, 무료 PDF, 온라인 PDF 편집, PDF 합치기 사이트, PDF 나누기, PDF 편집기, 무료 PDF 툴",
  authors: [{ name: "PDF Tools" }],
  robots: "index, follow",
  openGraph: {
    title: "PDF Tools - 무료 PDF 합치기 & 분할 도구",
    description: "무료로 PDF 파일을 합치고 분할하세요. 안전한 온라인 PDF 편집 도구",
    type: "website",
    locale: "ko_KR",
    siteName: "PDF Tools",
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF Tools - 무료 PDF 합치기 & 분할 도구",
    description: "무료로 PDF 파일을 합치고 분할하세요. 안전한 온라인 PDF 편집 도구",
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || "https://pdf-tools.vercel.app",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="canonical" href={process.env.NEXT_PUBLIC_SITE_URL || "https://pdf-tools.vercel.app"} />
        <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || ""} />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2785050916774668"
          crossOrigin="anonymous"
        ></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "PDF Tools",
              "description": "무료 PDF 합치기 및 분할 도구",
              "url": process.env.NEXT_PUBLIC_SITE_URL || "https://pdf-tools.vercel.app",
              "applicationCategory": "UtilityApplication",
              "operatingSystem": "All",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "KRW"
              },
              "featureList": [
                "PDF 파일 합치기",
                "PDF 파일 분할",
                "브라우저 기반 처리",
                "개인정보 보호"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
