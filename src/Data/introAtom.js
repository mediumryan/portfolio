import { atom } from 'recoil';

export const introCategoryState = atom({
    key: 'intro_category',
    default: [
        {
            id: 'intro_0',
            value: '自己紹介',
            isActive: true,
        },
        {
            id: 'intro_1',
            value: '経歴',
            isActive: false,
        },
        {
            id: 'intro_2',
            value: 'スキル',
            isActive: false,
        },
    ],
});

export const introWorkState = atom({
    key: 'intro_work',
    default: [
        {
            id: 'work_0',
            company: '大和ハウスリアルティマネジメント株式会社',
            position: '一般社員•プロント',
            period: '2020.02 ~ 2022.02',
        },
        {
            id: 'work_1',
            company: 'アデコ株式会社',
            position: '一般社員•Reviewer',
            period: '2022.02 ~ 在職中',
        },
    ],
});

export const introEducationState = atom({
    key: 'intro_education',
    default: [
        {
            id: 'edu_0',
            college: '韓国観光大学',
            major: '観光日本語',
            period: '2013.03 ~ 2015.03 (卒業)',
        },
        {
            id: 'edu_1',
            college: '学位銀行制',
            major: 'コンピューターエンジニアリング',
            period: '2021.03 ~ 2023.08 (学位取得)',
        },
    ],
});
