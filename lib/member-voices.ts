/**
 * 本人の了承を得た画像（写真または似顔絵イラスト）とコメントだけを設定してください。
 * photo: public/ 以下のパス（例: "/assets/members/jukki.webp"）。正方形・顔が中央の画像が最適です。
 * voice: 本人のコメント。空のあいだは「準備中」と表示されます。
 */
export type MemberVoice = {
  name: string;
  role: string;
  photo: string;
  voice: string;
};

export const memberVoices: MemberVoice[] = [
  { name: "じゅっきー", role: "", photo: "/assets/members/jukki.webp", voice: "" },
  { name: "あやとくん", role: "", photo: "/assets/members/ayato.webp", voice: "" },
  { name: "井上さん", role: "", photo: "/assets/members/inoue.webp", voice: "" },
  { name: "あきむねくん", role: "", photo: "/assets/members/akimune.webp", voice: "" },
];
