import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans_JP({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-noto",
  display: "swap",
});

const moriHand = localFont({
  src: "./fonts/yusei-magic-subset.ttf",
  variable: "--font-mori-hand",
  display: "swap",
  weight: "400",
});

const description =
  "フリーランスを目指し、案件獲得に悩む方へ。森のAI開発部は、基礎学習からスキルに応じた実案件への参加をつなぎ、現場で使える開発スキルと実務経験を育てるスクールです。";

export const metadata: Metadata = {
  title: "森のAI開発部｜学んで、実案件へ。実務型AI開発スクール",
  description,
  icons: { icon: "/assets/favicon.svg" },
  openGraph: {
    title: "森のAI開発部｜実務型AI開発スクール",
    description: "学んで、実案件へ。チームで実務に挑戦し、仕事に使えるスキルと経験を育てよう。",
    type: "website",
    images: [
      {
        url: "https://mori-no-ai-kaihatu-bu.elatedspice65.chatgpt.site/assets/forest-landscape.webp",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className={`${notoSans.variable} ${moriHand.variable}`}>
      <body>{children}</body>
    </html>
  );
}
