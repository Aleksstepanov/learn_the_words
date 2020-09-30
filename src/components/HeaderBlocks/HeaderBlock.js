import React from 'react';
import style from './HeaderBlock.module.scss'

const HeaderBlock = ({ highBackground = false, children}) => {
    const styleCover = highBackground ? { backgroundImage: 'none'} : {};
    return (
        <>
            <div className={style.cover} style = {styleCover}>
            <div className={style.wrap}>
                { Object.values(children) }
            </div>
            </div>
        </>
    )
}

export default HeaderBlock;