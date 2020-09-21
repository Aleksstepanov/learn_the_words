import React from 'react';
import style from './ContentBlock.module.scss';
import Card from '../Card/Card';
// const Cards = require.context('./img', true, /\.jpg$/);
// const path = Cards.keys();
// const image = path.map((elem) => Cards(elem));

const ContentBlock = ( {onDeletedItem, ...item} ) => {
    return (
        <div className={style.card__wraper}>
            {
                Object.values(item).map(({eng, rus, id}) => <Card 
                                                                eng={eng} rus={rus} key={id} 
                                                                onDeleted={ () => {
                                                                                    console.log('level 2')
                                                                                    onDeletedItem(id);
                                                                }
                                                            }/>)
            }
        </div>
        
)
}

export default ContentBlock;