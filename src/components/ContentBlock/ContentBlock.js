import React from 'react';
import style from './ContentBlock.module.scss';
import Card from '../Card/Card';
import wordList from '../../Data/wordsList';

const Cards = require.context('./img', true, /\.jpg$/);
const path = Cards.keys();
const image = path.map((elem) => Cards(elem));

const ContentBlock = ( {col} ) => {
    return (
        <div className={style.card__wraper}>
            {
                wordList.map(({eng, rus}, index) => <Card eng={eng} rus={rus} key={index}/>)
            }
        </div>
        
)
}

export default ContentBlock;