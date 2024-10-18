function calculateYearsSince(startDate: string) {
  const start = new Date(startDate);
  const today = new Date();

  let years = today.getFullYear() - start.getFullYear();

  const monthDifference = today.getMonth() - start.getMonth();
  const dayDifference = today.getDate() - start.getDate();

  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    years--;
  }

  return years;
}

const startDate = '2020-02-01';
const yearsSince = calculateYearsSince(startDate);

export const introPR1 = `私は現在、福岡でフロントエンド開発者として働いている来日${
  yearsSince + 1
}年目の韓国人です。`;

export const introPR2 =
  'React.jsやNext.jsを使ったプロジェクト経験があり、SQLにも興味があって勉強中です。';

export const introWork = [
  {
    id: 0,
    company: '大和ハウスリアルティマネジメント株式会社',
    work: 'ホテル',
    position: 'プロント',
    period: '2020.02 ~ 2022.02　(2年)',
  },
  {
    id: 1,
    company: 'アデコ株式会社',
    work: 'コンテンツ検修',
    position: 'Reviewer',
    period: '2022.02 ~ 2024.03　(2年2ヶ月)',
  },
  {
    id: 2,
    company: '株式会社リンクレア',
    work: 'Webアプリ制作',
    position: 'フロントエンド',
    period: '2024.04 ~ 2024.09　(6ヶ月)',
  },
  {
    id: 3,
    company: '西部電気工業株式会社',
    work: 'ポーティング',
    position: 'フロントエンド',
    period: '2024.11 ~ 　(予定)',
  },
];

export const introStudy = [
  {
    id: 0,
    main: '韓国観光大学',
    sub: '観光日本語学科',
    desc: '卒業',
    period: '2013.03 ~ 2015.03',
    type: 'degree',
  },
  {
    id: 1,
    main: '日本語能力試験（JLPT）',
    sub: 'N1',
    desc: '取得',
    period: '2018.01',
    type: 'license',
  },
  {
    id: 2,
    main: 'Webクリエイター能力検定',
    sub: 'スタンダード',
    desc: '取得',
    period: '2022.08',
    type: 'license',
  },
  {
    id: 3,
    main: '学位単位制',
    sub: 'コンピューターエンジニアリング学位',
    desc: '取得',
    period: '2023.08',
    type: 'degree',
  },
];
