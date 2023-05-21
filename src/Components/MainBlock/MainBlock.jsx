import React from 'react';
import s from './mainBlock.module.scss'
import MajorNews from "./MajorNews/MajorNews.jsx";

const MainBlock = () => {
    return (
        <div className={s.container}>
            <MajorNews/>
        </div>
    );
};

export default MainBlock;