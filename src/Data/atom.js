import outlier from './../images/project_images/10000hours.png';
import animation_snow from './../images/project_images/snow.png';
import check_list from './../images/project_images/check_list.png';
import kakao_shop from './../images/project_images/kakao-shop.png';
import mini_game from './../images/project_images/mini-game.png';
import momentum from './../images/project_images/momentum-clone.png';
import calculator from './../images/project_images/simple-calculator.png';
import weather from './../images/project_images/weather-app.png';
import youtube from './../images/project_images/youtube-clone.png';
import w3c_fashion from './../images/project_images/w3c-fashion.png';
import coin_tracker from './../images/project_images/coin_tracker.png';
import netflix from './../images/project_images/netflix.png';
import habit from './../images/project_images/66days.png';
import owl from './../images/project_images/owltastic.png';
import toyota from './../images/project_images/toyota_home.png';
import ana_santos from './../images/project_images/ana-santos.png';
import ximena from './../images/project_images/ximena.png';

// atom
import { atom } from 'recoil';

export const projectTypeState = atom({
    key: 'project_type_state',
    default: [
        {
            id: 'type_1',
            type: 'all',
            value: 'All',
            state: true,
        },
        {
            id: 'type_2',
            type: 'clone',
            value: 'Clone',
            state: false,
        },
        {
            id: 'type_3',
            type: 'self_made',
            value: 'Self Made',
            state: false,
        },
    ],
});

export const nowTypeState = atom({
    key: 'now_type_state',
    default: 'all',
});

export const projectState = atom({
    key: 'project_state',
    default: [
        {
            id: 0,
            title: 'Ryanflix',
            github_link: 'https://github.com/mediumryan/ryanflix',
            tag: 'React',
            url_path: 'https://mediumryan.github.io/ryanflix',
            image_path: netflix,
            type: 'self_made',
            description:
                'ネットフリックスよりインスピレーションを得たメデイア作品の紹介アプリです。',
        },
        {
            id: 1,
            title: 'Coin Tracker',
            github_link: 'https://github.com/mediumryan/crypto_tracker',
            tag: 'React',
            url_path: 'https://mediumryan.github.io/crypto_tracker',
            image_path: coin_tracker,
            type: 'self_made',
            description:
                '最大1,000種類の仮想通貨情報をグラフや数字で表示するトラッカーアプリです。',
        },
        {
            id: 2,
            title: 'Toyota(Clone)',
            github_link: 'https://github.com/mediumryan/toyota-home',
            tag: 'React',
            url_path: 'https://mediumryan.github.io/toyota-home/',
            image_path: toyota,
            type: 'clone',
            description:
                "日本の大手企業である'Toyota'のLPをコードクローンしてみました。",
        },
        {
            id: 3,
            title: 'Kakao Simple EC Site',
            github_link: 'https://github.com/mediumryan/kakao-shop-demo',
            tag: 'React',
            url_path: 'https://mediumryan.github.io/kakao-shop-demo/',
            image_path: kakao_shop,
            type: 'self_made',
            description: 'シンプルなECサイトです。',
        },
        {
            id: 4,
            title: '66Days - Mobile only',
            github_link: 'https://github.com/mediumryan/66days',
            tag: 'React',
            url_path: 'https://mediumryan.github.io/66days/',
            image_path: habit,
            type: 'self_made',
            description: 'Recoilを活用した習慣化アプリです。',
        },
        {
            id: 5,
            title: 'Super Simple Calculator',
            github_link: 'https://mediumryan.github.io/report_calculator/',
            tag: 'React, TypeScript',
            url_path: 'https://mediumryan.github.io/report_calculator/',
            image_path: calculator,
            type: 'self_made',
            description: '四則演算が出来る簡単なアプリです。',
        },
        {
            id: 6,
            title: 'RyanTube(Clone)',
            github_link: 'https://github.com/mediumryan/youtube-clone',
            tag: 'React',
            url_path: 'https://mediumryan.github.io/youtube-clone/',
            image_path: youtube,
            type: 'clone',
            description:
                'YouTube(2022ver)の再生ページをコードクローンしてみました。',
        },
        {
            id: 7,
            title: 'Mini Game',
            github_link: 'https://github.com/mediumryan/mini-game-demo',
            tag: 'React',
            url_path: 'https://mediumryan.github.io/mini-game-demo/',
            image_path: mini_game,
            type: 'self_made',
            description: '人参をクリックするだけのシンプルなミニゲームです。',
        },

        {
            id: 8,
            title: 'Ryan Momentum',
            github_link: 'https://github.com/mediumryan/ryan_momentum',
            tag: 'React',
            url_path: 'https://mediumryan.github.io/ryan_momentum/',
            image_path: momentum,
            type: 'self_made',
            description:
                "Chromeのイクステンション'Momentum'よりインスピレーションを得たアプリです。",
        },
        {
            id: 9,
            title: 'ToDo List by React',
            github_link: 'https://github.com/mediumryan/recoil_todo/',
            tag: 'React',
            url_path: 'https://mediumryan.github.io/recoil_todo/',
            image_path: check_list,
            type: 'self_made',
            description: '簡単なToDoListアプリです。',
        },
        {
            id: 10,
            title: 'Snow Background',
            github_link: 'https://github.com/mediumryan/animation-snow',
            tag: 'HTML,CSS,JS',
            url_path: 'https://mediumryan.github.io/animation-snow/',
            image_path: animation_snow,
            type: 'self_made',
            description: '雪が降るアニメーションバックグラウンドです。',
        },
        {
            id: 11,
            title: 'The 10000Hours-Rule(Clone)',
            github_link: 'https://github.com/mediumryan/10000hours-alone',
            tag: 'HTML,CSS,JS',
            url_path: 'https://mediumryan.github.io/10000hours-alone/',
            image_path: outlier,
            type: 'clone',
            description:
                "YouTuber 'Jeju coding basecamp'さんの'一万時間の法則プロジェクト'をコードクローンしました。",
        },
        {
            id: 12,
            title: 'Weather App with OpenWeatherMap',
            github_link: 'https://github.com/mediumryan/weather-app-demo',
            tag: 'React',
            url_path: 'https://mediumryan.github.io/weather-app-demo/',
            image_path: weather,
            type: 'self_made',
            description:
                'Open weather map APIを活用して現在使用者の場所や気温、天気等を見れる簡単なアプリです。',
        },
        {
            id: 13,
            title: 'Owltastic(Clone)',
            github_link: 'https://github.com/mediumryan/owltastic',
            tag: 'React',
            url_path: 'https://mediumryan.github.io/owltastic/',
            image_path: owl,
            type: 'clone',
            description: "個人ページ'Owltastic'をコードクローンしました。",
        },
        {
            id: 14,
            title: 'Fashion blog - W3C(Clone)',
            github_link: 'https://github.com/mediumryan/w3c_fashion',
            tag: 'React',
            url_path: 'https://mediumryan.github.io/w3c_fashion/',
            image_path: w3c_fashion,
            type: 'clone',
            description: 'W3Cのサンプルページをコードクローンしました。',
        },
        {
            id: 15,
            title: 'Ximena Vengoechea(Clone)',
            github_link: 'https://github.com/mediumryan/ximenavengoechea_clone',
            tag: 'React',
            url_path: 'https://mediumryan.github.io/ximenavengoechea_clone/',
            image_path: ximena,
            type: 'clone',
            description:
                "個人ページ'Ximena Vengoechea'をコードクローンしました。",
        },
        {
            id: 16,
            title: 'Ana Santos(Clone)',
            github_link: 'https://github.com/mediumryan/ana_santos_clone',
            tag: 'React',
            url_path: 'https://mediumryan.github.io/ana_santos_clone/',
            image_path: ana_santos,
            type: 'clone',
            description: "個人ページ'Ana Santos'をコードクローンしました。",
        },
        {
            id: 17,
            title: 'Ryan Fashion Store',
            github_link: 'https://github.com/mediumryan/ryan-shopping',
            tag: 'React',
            url_path: 'https://mediumryan.github.io/ryan-shopping/',
            image_path: ana_santos,
            type: 'self_made',
            description: '個人ECサイトを作ってみました。（Front Side only）',
        },
    ],
});
