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

- `app/page.tsx`: 本文、会員のしくみ（どんぐり会員・わかば会員・けやき）、FAQ
- `app/siryou/page.tsx`: 面談用の営業資料（`/siryou`、印刷でPDF化）
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

## 問い合わせフォーム（Netlify Forms）

面談・問い合わせボタンは、`components/contact-form.tsx` のフォームをダイアログで開きます（`lib/site-config.ts` の `consultationUrl` を設定した場合はそちらへ移動）。

- フォーム定義は `public/__forms.html`（`consultation`）。Netlify はデプロイ時にこのHTMLを読み取ってフォームを登録します。項目を変えるときは両方を揃えてください。
- 送信は `fetch` で `/__forms.html` へ POST します。ローカルの `npm run dev` では 405 になり、エラー表示になります（Netlify 上でのみ受け付けます）。
- スパム対策にハニーポット項目 `bot-field` を入れています。
- Netlify の管理画面で、サイトの Forms 機能（Form detection）を有効にし、通知先メールを設定してください。
- 名前・メールアドレスを受け取るため、公開前にプライバシーポリシー等の掲載を確認してください。

## 公開前に確定する内容

- 面談の申込先URL
- わかば会員の受講料・支払い方法・案件報酬（2026/10/30 MTG時点で未確定）
- AIツール費用の負担方針、面談審査の基準
- 募集日程、具体的なカリキュラム・ロードマップ
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
