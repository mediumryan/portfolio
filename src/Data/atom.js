import outlier from './../images/project_images/10000hours.png';
import animation_snow from './../images/project_images/snow.png';
import check_list from './../images/project_images/check_list.png';
import kakao_shop from './../images/project_images/kakao-shop.png';
import mini_game from './../images/project_images/mini-game.png';
import momentum from './../images/project_images/momentum-clone.png';
import movie_app from './../images/project_images/movie-app.png';
import portfolio from './../images/project_images/portfolio-demo.png';
import search_bar from './../images/project_images/search-bar.png';
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
            title: 'NetFlix(Clone)',
            github_link: 'https://github.com/mediumryan/nomad_netflix',
            tag: 'React',
            url_path: 'https://mediumryan.github.io/nomad_netflix',
            image_path: netflix,
            type: 'clone',
            description:
                '구 넷플릭스 웹페이지를 바탕으로 제 아이디어를 추가한 클론코딩앱입니다.',
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
                '최대 1천개의 가상화폐 정보를 그래프, 숫자로 표현한 트래커앱입니다.',
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
                '일본의 대기업 Toyota의 랜딩페이지를 클론코딩하였습니다.',
        },
        {
            id: 3,
            title: 'Kakao Simple EC Site',
            github_link: 'https://github.com/mediumryan/kakao-shop-demo',
            tag: 'React',
            url_path: 'https://mediumryan.github.io/kakao-shop-demo/',
            image_path: kakao_shop,
            type: 'self_made',
            description:
                'Kakao 공식 페이지의 이미지를 빌려와 제가 나름대로 구상한 EC 사이트입니다.',
        },
        {
            id: 4,
            title: '66Days - Mobile only',
            github_link: 'https://github.com/mediumryan/66days',
            tag: 'React',
            url_path: 'https://mediumryan.github.io/66days/',
            image_path: habit,
            type: 'self_made',
            description:
                '66일간 같은 일을 반복해 습관을 만들고자 직접 앱을 제작해 보았습니다.',
        },
        {
            id: 5,
            title: 'Super Simple Calculator',
            github_link: 'https://mediumryan.github.io/report_calculator/',
            tag: 'React, TypeScript',
            url_path: 'https://mediumryan.github.io/report_calculator/',
            image_path: calculator,
            type: 'self_made',
            description:
                '두개의 숫자를 넣고 원하는 수식을 클릭하면 자동적으로 값을 도출하는 간단한 계산기앱입니다.',
        },
        {
            id: 6,
            title: 'Search Bar with React',
            github_link: 'https://github.com/mediumryan/react-searchbar-demo',
            tag: 'React',
            url_path: 'https://mediumryan.github.io/react-searchbar-demo/',
            image_path: search_bar,
            type: 'self_made',
            description: 'React로 검색창 기능을 연습하고자 만든 앱입니다.',
        },
        {
            id: 7,
            title: 'Portfolio with Dream Coding',
            github_link: 'https://github.com/mediumryan/portfolio-proto',
            tag: 'HTML,CSS,JS',
            url_path: 'https://mediumryan.github.io/portfolio-proto/',
            image_path: portfolio,
            type: 'self_made',
            description:
                'Dream coding with Ellie의 강의를 바탕으로 저의 아이디어를 추가해 만든 포트폴리오 앱입니다.',
        },
        {
            id: 8,
            title: 'Movie Info App',
            github_link: 'https://github.com/mediumryan/TMDB_basic',
            tag: 'React',
            url_path: 'https://mediumryan.github.io/TMDB_basic/',
            image_path: movie_app,
            type: 'self_made',
            description:
                'TMDB API를 이용해 만든 간단한 영화 소개앱입니다. Netflix앱의 하위버전입니다.',
        },

        {
            id: 9,
            title: 'RyanTube(Clone)',
            github_link: 'https://github.com/mediumryan/youtube-clone',
            tag: 'React',
            url_path: 'https://mediumryan.github.io/youtube-clone/',
            image_path: youtube,
            type: 'clone',
            description: '2022년 기준 Youtube 페이지의 클론코딩 앱입니다.',
        },
        {
            id: 10,
            title: 'Mini Game',
            github_link: 'https://github.com/mediumryan/mini-game-demo',
            tag: 'React',
            url_path: 'https://mediumryan.github.io/mini-game-demo/',
            image_path: mini_game,
            type: 'self_made',
            description:
                '제한시간 안에 일정 개수의 당근을 클릭하면 승리하고, 시간안에 당근을 모두 클릭하지 못하거나 곤충을 클릭하게되면 패배하는 간단한 미니게임앱입니다.',
        },

        {
            id: 11,
            title: 'Momentum(Clone)',
            github_link: 'https://github.com/mediumryan/momemtum_clone',
            tag: 'React',
            url_path: 'https://mediumryan.github.io/momemtum_clone/',
            image_path: momentum,
            type: 'clone',
            description:
                'Google Chrome의 인기 익스텐션 Momentum에 영감을 받아 제 나름대로 비슷한 앱을 만들어 보았습니다.',
        },
        {
            id: 12,
            title: 'ToDo List by React',
            github_link: 'https://mediumryan.github.io/recoil_todo/',
            tag: 'React',
            url_path: 'https://github.com/mediumryan/recoil_todo/',
            image_path: check_list,
            type: 'self_made',
            description: 'React를 이용해 만든 아주 간단한 투두리스트앱입니다.',
        },
        {
            id: 13,
            title: 'Snow Background',
            github_link: 'https://github.com/mediumryan/animation-snow',
            tag: 'HTML,CSS,JS',
            url_path: 'https://mediumryan.github.io/animation-snow/',
            image_path: animation_snow,
            type: 'self_made',
            description:
                '눈이 내리는 배경을 animation 효과만을 이용해 표현해보고자 했습니다.',
        },
        {
            id: 14,
            title: 'The 10000Hours-Rule(Clone)',
            github_link: 'https://github.com/mediumryan/10000hours-alone',
            tag: 'HTML,CSS,JS',
            url_path: 'https://mediumryan.github.io/10000hrous-alone/',
            image_path: outlier,
            type: 'clone',
            description:
                '유튜버 제주코딩베이스캠프의 10000시간의 법칙 프로젝트 클론코딩앱입니다.',
        },
        {
            id: 15,
            title: 'Weather App with OpenWeatherMap',
            github_link: 'https://github.com/mediumryan/weather-app-demo',
            tag: 'React',
            url_path: 'https://mediumryan.github.io/weather-app-demo/',
            image_path: weather,
            type: 'self_made',
            description: 'Open weather map API를 이용해 만든 간단한앱입니다.',
        },
        {
            id: 16,
            title: 'Owltastic(Clone)',
            github_link: 'https://github.com/mediumryan/owltastic',
            tag: 'React',
            url_path: 'https://mediumryan.github.io/owltastic/',
            image_path: owl,
            type: 'clone',
            description:
                '코딩 공부를 위해 개인 페이지 Owltastic을 클론코딩 하였습니다.',
        },
        {
            id: 17,
            title: 'Fashion blog - W3C(Clone)',
            github_link: 'https://github.com/mediumryan/w3c_fashion',
            tag: 'React',
            url_path: 'https://mediumryan.github.io/w3c_fashion/',
            image_path: w3c_fashion,
            type: 'clone',
            description: 'W3C의 샘플페이지를 클론코딩 하였습니다.',
        },
        {
            id: 18,
            title: 'Ximena Vengoechea(Clone)',
            github_link: 'https://github.com/mediumryan/ximenavengoechea_clone',
            tag: 'React',
            url_path: 'https://mediumryan.github.io/ximenavengoechea_clone/',
            image_path: ximena,
            type: 'clone',
            description:
                '코딩 공부를 위해 개인 페이지 Ximena Vengoechea를 클론코딩 하였습니다.',
        },
        {
            id: 19,
            title: 'Ana Santos(Clone)',
            github_link: 'https://github.com/mediumryan/ana_santos_clone',
            tag: 'React',
            url_path: 'https://mediumryan.github.io/ana_santos_clone/',
            image_path: ana_santos,
            type: 'clone',
            description:
                '코딩 공부를 위해 개인 페이지 Ana Santos를 클론코딩 하였습니다.',
        },
    ],
});
