import React from 'react';
import s from './HeaderBlock.module.scss'
import Lang from '../Lang/Lang';

const HeaderBlock = ({ highBackground = false, children}) => {
    console.log(children);
    const styleCover = highBackground ? { backgroundImage: 'none'} : {};
    return (
        <>
            <div className={s.cover} style = {styleCover}>
            <div className={s.wrap}>
                <Lang />
                { Object.values(children) }
            </div>
            </div>
        </>
    )
}

export default HeaderBlock;