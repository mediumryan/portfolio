import outlier from './../images/project_images/10000hours.png';
import animation_snow from './../images/project_images/animation-snow.png';
import check_list from './../images/project_images/check-list.png';
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

// atom
import { atom } from 'recoil';

export const projects = atom({
    key: 'projects-data',
    default: [
        {
            id: 0,
            title: 'NetFlix Clone',
            tag: 'React',
            url_path: 'https://mediumryan.github.io/nomad_netflix',
            image_path: netflix,
        },
        {
            id: 1,
            title: 'Coin Tracker',
            tag: 'React',
            url_path: 'https://mediumryan.github.io/crypto_tracker',
            image_path: coin_tracker,
        },
        {
            id: 2,
            title: 'Fashion blog - W3C',
            tag: 'React',
            url_path: 'https://mediumryan.github.io/w3c_fashion/',
            image_path: w3c_fashion,
        },
        {
            id: 3,
            title: 'RyanTube (Youtube Clone Coding)',
            tag: 'HTML,CSS,JS',
            url_path: 'https://mediumryan.github.io/youtube-clone/',
            image_path: youtube,
        },
        {
            id: 4,
            title: 'Weather App with OpenWeatherMap',
            tag: 'React',
            url_path: 'https://mediumryan.github.io/weather-app-demo/',
            image_path: weather,
        },
        {
            id: 5,
            title: 'Super Simple Calculator',
            tag: 'HTML,CSS,JS',
            url_path: 'https://mediumryan.github.io/report_caculator/',
            image_path: calculator,
        },
        {
            id: 6,
            title: 'Search Bar with React',
            tag: 'React',
            url_path: 'https://mediumryan.github.io/react-searchbar-demo/',
            image_path: search_bar,
        },
        {
            id: 7,
            title: 'Portfolio with Dream Coding',
            tag: 'HTML,CSS,JS',
            url_path: 'https://mediumryan.github.io/portfolio-proto/',
            image_path: portfolio,
        },
        {
            id: 8,
            title: 'Movie Info App',
            tag: 'React',
            url_path: 'https://mediumryan.github.io/TMDB_basic/',
            image_path: movie_app,
        },
        {
            id: 9,
            title: 'Momentum App Clone Coding',
            tag: 'HTML,CSS,JS',
            url_path: 'https://mediumryan.github.io/momemtum_clone/',
            image_path: momentum,
        },
        {
            id: 10,
            title: 'Mini Game',
            tag: 'HTML,CSS,JS',
            url_path: 'https://mediumryan.github.io/mini-game-demo/',
            image_path: mini_game,
        },
        {
            id: 11,
            title: 'Simple EC Site (Kakao)',
            tag: 'React',
            url_path: 'https://mediumryan.github.io/kakao-shop-demo/',
            image_path: kakao_shop,
        },
        {
            id: 12,
            title: 'ToDo List by React',
            tag: 'React',
            url_path: 'https://mediumryan.github.io/check_list/',
            image_path: check_list,
        },
        {
            id: 13,
            title: 'Snow Background',
            tag: 'HTML,CSS,JS',
            url_path: 'https://mediumryan.github.io/animation-snow/',
            image_path: animation_snow,
        },
        {
            id: 14,
            title: 'The 10000Hours-Rule',
            tag: 'HTML,CSS,JS',
            url_path: 'https://mediumryan.github.io/10000hrous-alone/',
            image_path: outlier,
        },
    ],
});
