export type ShimohuriType = {
  //はがきID
  id: number;
  //ラジオ放送日
  date: string;
  //コーナー名
  segment: string;
  //投稿者住所
  address: string;
  //ラジオネーム
  name: string;
  //投稿内容
  contents: string;
  //獲得ポイント
  pt: number;
  //データベース投稿日
  created_at: string;
  //データベース更新日
  updated_at: string;
};

export type ShimohuriTypes = {
  shimohuris: ShimohuriType[];
};
