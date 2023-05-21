import {create} from "zustand";

export const useOpinions = create((set, get) => ({
    opinions: [
        {
            avatar: 'https://cdn.iportal.ru/preview/news/authors/33390e5b600bb933236d614a3d1f91620467f600_48_48_c.jpg.webp-portal',
            name: 'ЕКАТЕРИНА ЕВСТАФЬЕВА',
            text: 'Русский Шерлок: в новом детективе Шахназарова впечатляет только декольте героини, а Пореченкову хорошо удается кричать',
            viewsCount: 514,
            commentsCount: 6,
        },
        {
            avatar: 'https://cdn.iportal.ru/preview/news/authors/dc01ac1c3e9d7cf962552f8c11b9b8840fe5428c_48_48_c.jpg.webp-portal',
            name: 'ОЛЬГА КУЛИКОВА',
            text: '«Комплексов стало гораздо меньше». Взгляд 40-летней женщины на личный опыт вступления в зрелость',
            viewsCount: 514,
            commentsCount: 6,
        },
        {
            avatar: 'https://cdn.iportal.ru/preview/news/authors/eb57f1e2a94bb72f39b9ef0da93c10e208b93427_48_48_c.jpg.webp-portal',
            name: 'МЕРЕТЯ ТУСИДА',
            text: '«Задолбали кости мамонта притаскивать». Чистосердечный монолог учительницы детей оленеводов из тундры',
            viewsCount: 514,
            commentsCount: 6,
        },
    ]
}))