import {create} from "zustand";

export const useGeneralNews = create((set, get) => ({
    news: [
        {
            img: 'https://cdn.iportal.ru/preview/news/articles/4f25860d86bb986a3e598de8001c9af206b6aca3_318_179_c.jpg.webp-portal',
            imgTitle: 'ПРОИСШЕСТВИЯ',
            title: 'Окно вывалилось наружу: в центре Ярославля троллейбус врезался в автобус',
            viewsCount: 959,
            commentsCount: 8,
        },
        {
            img: 'https://cdn.iportal.ru/preview/news/articles/ced8dd8c8b43080bfa57954b0f08326d01264fe3_318_179_c.jpg.webp-portal',
            imgTitle: 'ГОРОД',
            title: 'Научиться бизнесу и получить скидку на обслуживание: что еще предлагают банки ярославским предприятиям',
            viewsCount: 1018,
            commentsCount: 0,
        },
        {
            img: 'https://cdn.iportal.ru/preview/news/articles/df113e7426029ebb2c68e5b4f36bc25c081af8f6_318_179_c.jpg.webp-portal',
            imgTitle: 'ПРОИСШЕСТВИЯ',
            title: '«Одного откачали»: в центре Ярославля начался пожар в коммуналке. Видео',
            viewsCount: 2409,
            commentsCount: 14,
        },
        {
            img: 'https://cdn.iportal.ru/preview/news/articles/834bb7d08b6dbb1e94227875b0c7d8dd087a01e2_318_179_c.jpg.webp-portal',
            imgTitle: 'ВЕСНА',
            title: 'Спасатели выпустили экстренное предупреждение о грозе и ветре в Ярославской области',
            viewsCount: 3853,
            commentsCount: 4,
        },
    ]
}))