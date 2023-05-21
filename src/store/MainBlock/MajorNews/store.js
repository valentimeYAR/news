import {create} from "zustand";

export const useMajorNews = create((set, get) => ({
    news: {
        id: '1',
        image: 'https://cdn.iportal.ru/preview/news/articles/1f6577efda70538550a096a1069e0a940b6b8791_666_375_c.jpg.webp-portal',
        imageTitle: 'СПЕЦОПЕРАЦИЯ НА УКРАИНЕ',
        subtitle: "Он посчитал и мобилизованных, и контрактников",
        title: "Губернатор Ярославской области рассказал, сколько человек отправили на СВО от одного из районов",
        viewsCount: 4444,
        commentsCount: 44,
    }
}))