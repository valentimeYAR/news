import React from 'react';
import s from './mainBlock.module.scss'
import MajorNews from "./MajorNews/MajorNews.jsx";
import GeneralNews from "./GeneralNews/GeneralNews.jsx";
import {useGeneralNews} from "../../store/MainBlock/GeneralNews/store.js";

const MainBlock = () => {
    const {news} = useGeneralNews(state => state)
    return (
        <div className={s.container}>
            <MajorNews/>
            <div className={s.generalNews}>
                {news.map((el, index) => <GeneralNews title={el.title} img={el.img} commentsCount={el.commentsCount}
                                                      imgTitle={el.imgTitle} viewsCount={el.viewsCount} key={index}/>)}
            </div>
        </div>
    );
};

export default MainBlock;