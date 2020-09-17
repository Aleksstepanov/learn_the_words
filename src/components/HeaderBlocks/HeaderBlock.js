import React from 'react';
import s from './HeaderBlock.module.scss'
import Lang from '../Lang/Lang';

const HeaderBlock = ({ title, highBackground = false}) => {
    const styleCover = highBackground ? { backgroundImage: 'none'} : {};
    return (
        <>
            <div className={s.cover} style = {styleCover}>
            <div className={s.wrap}>
                <Lang />
                <h1 className={s.header}>{title}</h1>
                <p className={s.descr}>Воспользуйте карточкой для запоминания и пополнения словарных запасов!</p>
            </div>
        </div>
        </>
        
    )
}

export default HeaderBlock;