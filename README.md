# 森のAI開発部 LP

実務型AI開発スクールのランディングページ。Next.js（App Router）で動作します。

## ローカル表示

```sh
npm install
npm run dev
```

http://localhost:3000 を開きます。

静的ホスティングへ出す場合は `npm run build` を実行し、生成された `out` を公開ディレクトリに指定してください。

## 編集箇所

- `app/page.tsx`: 本文、コース内容、FAQ
- `app/layout.tsx`: タイトル、説明文、OGP、フォント
- `app/globals.css`: 配色、レイアウト、レスポンシブ表示
- `components/site-header.tsx`: モバイルメニュー
- `components/hero.tsx`: 雲と葉のアニメーション停止
- `components/consultation.tsx`: コース選択と面談案内ダイアログ
- `lib/site-config.ts`: `consultationUrl` に面談予約・LINE・フォームのHTTPS URLを設定
- `public/assets/forest-landscape.webp` / `forest-friends.webp`: 白背景に配置する透過イラスト（WebP最適化済み）
- `app/fonts/yusei-magic-subset.ttf`: 見出し用のYusei Magic。本文はNoto Sans JP等のゴシック体
- `public/assets/OFL-YuseiMagic.txt`: 見出しフォントのSIL Open Font License

見出しフォントは現在の文言に合わせて軽量化しています。新しい文字を使う際は再サブセット化するか、`app/layout.tsx` の `localFont` の参照を同梱の `app/fonts/yusei-magic.ttf` に切り替えてください。

雲と葉のCSSアニメーションには停止・再開ボタンを用意し、OSの「視差効果を減らす」設定でも停止します。

申込先が空の場合は「受付準備中」の案内を表示します。個人情報を収集・送信するフォームは設けていません。

## 公開前に確定する内容

- 面談の申込先URL
- 受講料、期間、募集日程、具体的なカリキュラム
- 各メンバーの掲載内容・公開範囲、および実績詳細
- 問い合わせ窓口、申込方法に応じた必要な規約・プライバシー案内

運営会社は株式会社SHINJIDAI（https://shinjidai.co.jp/）です。フッターから公式サイトへリンクしています。

記載の各コースの詳細項目は初稿の構成案です。収益額・受講者数・卒業生の声は創作していません。SHINJIDAIでの経験とスクール卒業実績は区別しています。

## リポジトリ

リポジトリ: https://github.com/tmksh/mori-no-ai-kaihatu-bu.git

初回実装ブランチ: `codex/mori-ai-lp`。ローカルの `github` remote に接続先を設定しています。

`.openai/hosting.json` は確認用Sitesの設定です。静的書き出し後の `out` を公開ディレクトリにしています。GitHub側のホスティングを使用する場合は別途デプロイ設定を合わせてください。独自ドメインへの変更時はOG画像の絶対URLも更新してください。

## 制作参考

- 構成: https://claudecode.daijobu.io/
- 雰囲気: https://www.coco-terrace.com/lp/habataki/
- 業務理解・設計に関する参考: https://zenn.dev/wwwave/articles/38b8284f96bd9e

参考サイトの画像や文章は流用していません。イラストは本LP用に生成し、特定作品の既存キャラクター・ロゴは使用していません。
