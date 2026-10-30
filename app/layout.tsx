import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const notoSans = localFont({
  src: "./fonts/noto-sans-jp-subset.woff2",
  variable: "--font-noto",
  display: "swap",
  weight: "100 900",
});

const moriHand = localFont({
  src: "./fonts/yusei-magic-subset.ttf",
  variable: "--font-mori-hand",
  display: "swap",
  weight: "400",
});

const description =
  "株式会社SHINJIDAIが運営する実務型AI開発スクール。無料のどんぐり会員でAI活用に触れ、わかば会員では前提知識を学んで当社の実案件にチームで参加。現場で使えるスキルと実務経験を育てます。";

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
