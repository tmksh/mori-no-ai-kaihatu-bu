/**
 * 本人の了承を得た実際の写真とコメントだけを設定してください。
 * photo: public/ 以下のパス（例: "/assets/members/jukki.webp"）。正方形・顔が中央の写真が最適です。
 * voice: 本人のコメント。空のあいだは「準備中」と表示されます。
 */
export type MemberVoice = {
  name: string;
  role: string;
  photo: string;
  voice: string;
};

export const memberVoices: MemberVoice[] = [
  { name: "じゅっきー", role: "", photo: "", voice: "" },
  { name: "あやとくん", role: "", photo: "", voice: "" },
  { name: "井上さん", role: "", photo: "", voice: "" },
  { name: "あきむねくん", role: "", photo: "", voice: "" },
];
