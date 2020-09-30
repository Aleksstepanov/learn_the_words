import React from 'react';
import style from './Paragraph.module.scss';

const Paragraph = ({children}) => {
    return (
        <p className={style.paragraph}>{ children }</p>
    )
}

export default Paragraph;

