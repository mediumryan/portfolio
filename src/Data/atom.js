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
            type: 'clone',
            value: 'Clone',
            state: true,
        },
        {
            id: 'type_2',
            type: 'self_made',
            value: 'Self Made',
            state: false,
        },
    ],
});

export const nowTypeState = atom({
    key: 'now_type_state',
    default: 'clone',
});

export const projectState = atom({
    key: 'project_state',
    default: [
        {
            id: 0,
            title: 'NetFlix Clone',
            github_link: 'https://github.com/mediumryan/nomad_netflix',
            tag: 'React',
            url_path: 'https://mediumryan.github.io/nomad_netflix',
            image_path: netflix,
            type: 'clone',
        },
        {
            id: 1,
            title: 'Coin Tracker',
            github_link: 'https://github.com/mediumryan/crypto_tracker',
            tag: 'React',
            url_path: 'https://mediumryan.github.io/crypto_tracker',
            image_path: coin_tracker,
            type: 'self_made',
        },
        {
            id: 2,
            title: 'Toyota-Home(Clone)',
            github_link: 'https://github.com/mediumryan/toyota-home',
            tag: 'React',
            url_path: 'https://mediumryan.github.io/toyota-home/',
            image_path: toyota,
            type: 'clone',
        },
        {
            id: 3,
            title: 'Simple EC Site (Kakao)',
            github_link: 'https://github.com/mediumryan/kakao-shop-demo',
            tag: 'React',
            url_path: 'https://mediumryan.github.io/kakao-shop-demo/',
            image_path: kakao_shop,
            type: 'self_made',
        },
        {
            id: 4,
            title: 'Weather App with OpenWeatherMap',
            github_link: 'https://github.com/mediumryan/weather-app-demo',
            tag: 'React',
            url_path: 'https://mediumryan.github.io/weather-app-demo/',
            image_path: weather,
            type: 'self_made',
        },
        {
            id: 5,
            title: 'Super Simple Calculator',
            github_link: 'https://mediumryan.github.io/report_calculator/',
            tag: 'React, TypeScript',
            url_path: 'https://mediumryan.github.io/report_calculator/',
            image_path: calculator,
            type: 'self_made',
        },
        {
            id: 6,
            title: 'Search Bar with React',
            github_link: 'https://github.com/mediumryan/react-searchbar-demo',
            tag: 'React',
            url_path: 'https://mediumryan.github.io/react-searchbar-demo/',
            image_path: search_bar,
            type: 'self_made',
        },
        {
            id: 7,
            title: 'Portfolio with Dream Coding',
            github_link: 'https://github.com/mediumryan/portfolio-proto',
            tag: 'HTML,CSS,JS',
            url_path: 'https://mediumryan.github.io/portfolio-proto/',
            image_path: portfolio,
            type: 'self_made',
        },
        {
            id: 8,
            title: 'Movie Info App',
            github_link: 'https://github.com/mediumryan/TMDB_basic',
            tag: 'React',
            url_path: 'https://mediumryan.github.io/TMDB_basic/',
            image_path: movie_app,
            type: 'self_made',
        },

        {
            id: 9,
            title: 'RyanTube (Youtube Clone Coding)',
            github_link: 'https://github.com/mediumryan/youtube-clone',
            tag: 'React',
            url_path: 'https://mediumryan.github.io/youtube-clone/',
            image_path: youtube,
            type: 'clone',
        },
        {
            id: 10,
            title: 'Mini Game',
            github_link: 'https://github.com/mediumryan/mini-game-demo',
            tag: 'React',
            url_path: 'https://mediumryan.github.io/mini-game-demo/',
            image_path: mini_game,
            type: 'self_made',
        },

        {
            id: 11,
            title: 'Momentum App Clone Coding',
            github_link: 'https://github.com/mediumryan/momemtum_clone',
            tag: 'React',
            url_path: 'https://mediumryan.github.io/momemtum_clone/',
            image_path: momentum,
            type: 'clone',
        },
        {
            id: 12,
            title: 'ToDo List by React',
            github_link: 'https://mediumryan.github.io/recoil_todo/',
            tag: 'React',
            url_path: 'https://github.com/mediumryan/recoil_todo/',
            image_path: check_list,
            type: 'self_made',
        },
        {
            id: 13,
            title: 'Snow Background',
            github_link: 'https://github.com/mediumryan/animation-snow',
            tag: 'HTML,CSS,JS',
            url_path: 'https://mediumryan.github.io/animation-snow/',
            image_path: animation_snow,
            type: 'self_made',
        },
        {
            id: 14,
            title: 'The 10000Hours-Rule',
            github_link: 'https://github.com/mediumryan/10000hours-alone',
            tag: 'HTML,CSS,JS',
            url_path: 'https://mediumryan.github.io/10000hrous-alone/',
            image_path: outlier,
            type: 'clone',
        },
        {
            id: 15,
            title: '66Days(Only mobile)',
            github_link: 'https://github.com/mediumryan/66days',
            tag: 'React',
            url_path: 'https://mediumryan.github.io/66days/',
            image_path: habit,
            type: 'self_made',
        },
        {
            id: 16,
            title: 'Owltastic(Clone)',
            github_link: 'https://github.com/mediumryan/owltastic',
            tag: 'React',
            url_path: 'https://mediumryan.github.io/owltastic/',
            image_path: owl,
            type: 'clone',
        },
        {
            id: 17,
            title: 'Fashion blog - W3C',
            github_link: 'https://github.com/mediumryan/w3c_fashion',
            tag: 'React',
            url_path: 'https://mediumryan.github.io/w3c_fashion/',
            image_path: w3c_fashion,
            type: 'clone',
        },
        {
            id: 18,
            title: 'Ximena Vengoechea(Clone)',
            github_link: 'https://github.com/mediumryan/ximenavengoechea_clone',
            tag: 'React',
            url_path: 'https://mediumryan.github.io/ximenavengoechea_clone/',
            image_path: ximena,
            type: 'clone',
        },
        {
            id: 19,
            title: 'Ana Santos(Clone)',
            github_link: 'https://github.com/mediumryan/ana_santos_clone',
            tag: 'React',
            url_path: 'https://mediumryan.github.io/ana_santos_clone/',
            image_path: ana_santos,
            type: 'clone',
        },
    ],
});
