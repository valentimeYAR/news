import React from 'react';
import s from './RightBlock.module.scss'
import AdBlock from "./AdBlock/AdBlock.jsx";
import Top from "./Top/Top.jsx";

const RightBlock = () => {
    return (
        <div className={s.container}>
            <AdBlock/>
            <Top/>
        </div>
    );
};

export default RightBlock;