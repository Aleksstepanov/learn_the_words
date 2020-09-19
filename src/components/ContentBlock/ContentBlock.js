import React from 'react';
import './ContentBlock.scss';
import Desc from '../../Data/descCard';
const Cards = require.context('./img', true, /\.jpg$/);
const path = Cards.keys();
const image = path.map((elem) => Cards(elem));

const ContentBlock = ( {col} ) => {
    let cards = [];
    for (let i = 0; i<col; i++) {
        cards[i] = (
            <div className="card" key={i}>
                <div className="card-image">
                  <img src={ image[i] } alt="card"/>
                  <span className="card-title">Card Title</span>
                </div>
                <div className="card-content">
                    <p>{Object.values(Desc)[i]}</p>
                </div>
                <div className="card-action">
                <p>This is a link</p>
                </div>
             </div>
        )
    }
    return (
        <div className="card__wraper">    
              {cards}
        </div>
)
}

export default ContentBlock;