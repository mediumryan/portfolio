import outlier from '@/Images/projects/10000hours.png';
import animation_snow from '@/Images/projects/snow.png';
import check_list from '@/Images/projects/check_list.png';
import kakao_shop from '@/Images/projects/kakao-shop.png';
import mini_game from '@/Images/projects/mini-game.png';
import momentum from '@/Images/projects/momentum.png';
import calculator from '@/Images/projects/simple-calculator.png';
import weather from '@/Images/projects/weather-app.png';
import youtube from '@/Images/projects/youtube-clone.png';
import w3c_fashion from '@/Images/projects/w3c-fashion.png';
import habit from '@/Images/projects/66days.png';
import owl from '@/Images/projects/owltastic.png';
import toyota from '@/Images/projects/toyota_home.png';
import ana_santos from '@/Images/projects/ana-santos.png';
import ximena from '@/Images/projects/ximena.png';
import ryan_shop from '@/Images/projects/ryan-shop.png';
import food_info from '@/Images/projects/food-info.png';
import book_search from '@/Images/projects/book-search.png';
import ryanflix_next from '@/Images/projects/ryanflix-next.png';
import kanban from '@/Images/projects/kanban.png';
import next_coin_tracker from '@/Images/projects/next-crypto.png';
import ryan_quiz from '@/Images/projects/ryan-seok-quiz.png';
import { StaticImageData } from 'next/image';

export type ProjectsType = {
  id: number;
  title: string;
  github_link: string;
  tag: string[];
  url_link: string;
  image_path: StaticImageData;
  type: string;
  description: string;
};

export const projects = [
  {
    id: 0,
    title: 'Mini Game',
    github_link: 'https://github.com/mediumryan/mini-game-demo',
    tag: ['React'],
    url_link: 'https://mediumryan.github.io/mini-game-demo/',
    image_path: mini_game,
    type: 'self_made',
    description: '人参をクリックするだけのシンプルなミニゲームです。',
  },
  {
    id: 1,
    title: 'Super Simple Calculator',
    github_link: 'https://github.com/mediumryan/report_calculator/',
    tag: ['React', 'TS'],
    url_link: 'https://mediumryan.github.io/report_calculator/',
    image_path: calculator,
    type: 'self_made',
    description: '四則演算が出来る簡単なアプリです。',
  },
  {
    id: 2,
    title: 'Weather App with OpenWeatherMap',
    github_link: 'https://github.com/mediumryan/weather-app-demo',
    tag: ['React'],
    url_link: 'https://mediumryan.github.io/weather-app-demo/',
    image_path: weather,
    type: 'self_made',
    description:
      'Open weather map APIを活用して現在使用者の場所や気温、天気等を見れる簡単なアプリです。',
  },
  {
    id: 3,
    title: 'ToDo List by React',
    github_link: 'https://github.com/mediumryan/recoil_todo/',
    tag: ['React'],
    url_link: 'https://mediumryan.github.io/recoil_todo/',
    image_path: check_list,
    type: 'self_made',
    description: '簡単なToDoListアプリです。',
  },
  {
    id: 4,
    title: 'Snow Background',
    github_link: 'https://github.com/mediumryan/animation-snow',
    tag: ['jQuery'],
    url_link: 'https://mediumryan.github.io/animation-snow/',
    image_path: animation_snow,
    type: 'self_made',
    description: '雪が降るアニメーションバックグラウンドです。',
  },
  {
    id: 5,
    title: 'The 10000Hours-Rule(Clone)',
    github_link: 'https://github.com/mediumryan/10000hours-alone',
    tag: ['jQuery'],
    url_link: 'https://mediumryan.github.io/10000hours-alone/',
    image_path: outlier,
    type: 'clone',
    description:
      "YouTuber 'Jeju coding basecamp'さんの'一万時間の法則プロジェクト'をコードクローンしました。",
  },
  {
    id: 6,
    title: 'RyanTube(Clone)',
    github_link: 'https://github.com/mediumryan/youtube-clone',
    tag: ['React'],
    url_link: 'https://mediumryan.github.io/youtube-clone/',
    image_path: youtube,
    type: 'clone',
    description: 'YouTube(2022ver)の再生ページをコードクローンしてみました。',
  },
  {
    id: 7,
    title: 'Owltastic(Clone)',
    github_link: 'https://github.com/mediumryan/owltastic',
    tag: ['React'],
    url_link: 'https://mediumryan.github.io/owltastic/',
    image_path: owl,
    type: 'clone',
    description: "個人ページ'Owltastic'をコードクローンしました。",
  },
  {
    id: 8,
    title: 'Fashion blog - W3C(Clone)',
    github_link: 'https://github.com/mediumryan/w3c_fashion',
    tag: ['React'],
    url_link: 'https://mediumryan.github.io/w3c_fashion/',
    image_path: w3c_fashion,
    type: 'clone',
    description: 'W3Cのサンプルページをコードクローンしました。',
  },
  {
    id: 9,
    title: 'Ximena Vengoechea(Clone)',
    github_link: 'https://github.com/mediumryan/ximenavengoechea_clone',
    tag: ['React'],
    url_link: 'https://mediumryan.github.io/ximenavengoechea_clone/',
    image_path: ximena,
    type: 'clone',
    description: "個人ページ'Ximena Vengoechea'をコードクローンしました。",
  },
  {
    id: 10,
    title: 'Ana Santos(Clone)',
    github_link: 'https://github.com/mediumryan/ana_santos_clone',
    tag: ['React'],
    url_link: 'https://mediumryan.github.io/ana_santos_clone/',
    image_path: ana_santos,
    type: 'clone',
    description: "個人ページ'Ana Santos'をコードクローンしました。",
  },
  {
    id: 11,
    title: 'Toyota(Clone)',
    github_link: 'https://github.com/mediumryan/toyota-home',
    tag: ['React'],
    url_link: 'https://mediumryan.github.io/toyota-home/',
    image_path: toyota,
    type: 'clone',
    description:
      "日本の大手企業である'Toyota'のLPをコードクローンしてみました。",
  },
  {
    id: 12,
    title: 'Food Info app',
    github_link: 'https://github.com/mediumryan/food_recipe',
    tag: ['React', 'TS'],
    url_link: 'https://mediumryan.github.io/food_recipe/',
    image_path: food_info,
    type: 'self_made',
    description: '料理のレシピや食品の栄養情報を検索できるアプリです。',
  },
  {
    id: 13,
    title: 'Book Search App',
    github_link: 'https://github.com/mediumryan/naver_book_search',
    tag: ['Next', 'TS'],
    url_link: 'https://mediumryan-book-search.vercel.app/',
    image_path: book_search,
    type: 'self_made',
    description:
      '韓国の有名な検索ポータルサイトNaverが提供する検索APIを活用した書籍検索アプリです。',
  },
  {
    id: 14,
    title: '66Days - Mobile only',
    github_link: 'https://github.com/mediumryan/66days',
    tag: ['React'],
    url_link: 'https://mediumryan.github.io/66days/',
    image_path: habit,
    type: 'self_made',
    description: 'Recoilを活用した習慣化アプリです。',
  },
  {
    id: 15,
    title: 'Kakao Simple EC Site',
    github_link: 'https://github.com/mediumryan/kakao-shop-demo',
    tag: ['React', 'EC'],
    url_link: 'https://mediumryan.github.io/kakao-shop-demo/',
    image_path: kakao_shop,
    type: 'self_made',
    description: 'シンプルなECサイトです。',
  },
  {
    id: 16,
    title: 'KanBan Board',
    github_link: 'https://github.com/mediumryan/kanban-board',
    tag: ['React', 'TS', 'ToDo'],
    url_link: 'https://mediumryan.github.io/kanban-board/',
    image_path: kanban,
    type: 'self_made',
    description: 'react-beautiful-dndを活用したKanbanボードアプリです。',
  },
  {
    id: 17,
    title: 'Ryan Momentum',
    github_link: 'https://github.com/mediumryan/ryan_momentum',
    tag: ['React', 'OpenWeatherMap', 'ToDo'],
    url_link: 'https://mediumryan.github.io/ryan_momentum/',
    image_path: momentum,
    type: 'self_made',
    description:
      "Chromeのイクステンション'Momentum'よりインスピレーションを得たアプリです。",
  },
  {
    id: 18,
    title: 'Coin Tracker',
    github_link: 'https://github.com/mediumryan/next_crypto_tracker',
    tag: ['Next', 'TS', 'CoinGecko'],
    url_link: 'https://crypto-tracker-nine-chi.vercel.app/',
    image_path: next_coin_tracker,
    type: 'self_made',
    description: 'Next.jsとcoingecko apiを活用したトラッカーアプリです。',
  },
  {
    id: 19,
    title: 'Ryanflix',
    github_link: 'https://github.com/mediumryan/ryanflix',
    tag: ['Next', 'TS', 'TMDB'],
    url_link: 'https://ryanflix-pink.vercel.app/',
    image_path: ryanflix_next,
    type: 'self_made',
    description:
      'ネットフリックスよりインスピレーションを得たメデイア作品の紹介アプリです。',
  },
  {
    id: 20,
    title: 'Ryan Fashion Store',
    github_link: 'https://github.com/mediumryan/ryan-shopping',
    tag: ['Next', 'TS', 'Supabase', 'EC'],
    url_link: 'https://ryan-shopping.vercel.app/',
    image_path: ryan_shop,
    type: 'self_made',
    description: '個人ECサイトを作ってみました。',
  },
  {
    id: 21,
    title: 'Ryan Seok Quiz!',
    github_link: 'https://github.com/mediumryan/ryan_quiz',
    tag: ['Next', 'TS', 'Supabase', 'Game'],
    url_link: 'https://ryan-quiz.vercel.app/',
    image_path: ryan_quiz,
    type: 'self_made',
    description: 'イメージを見て正解を当てるシンプルなクイズアプリです。',
  },
].reverse() as ProjectsType[];
