import React from 'react';
import s from './RightBlock.module.scss'
import AdBlock from "./AdBlock/AdBlock.jsx";
import Top from "./Top/Top.jsx";
import Opinions from "./Opinions/Opinions.jsx";
import Recommendations from "./Recommendations/Recommendations.jsx";

const RightBlock = () => {
    return (
        <div className={s.container}>
            <AdBlock/>
            <Top/>
            <AdBlock/>
            <Opinions/>
            <Recommendations/>
        </div>
    );
};

export default RightBlock;