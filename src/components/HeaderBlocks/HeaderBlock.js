import React from 'react';
import s from './HeaderBlock.module.scss'
import ReactLogo from '../../logo.svg';
import {ReactComponent as ReactLogoSvg} from '../../logo.svg';

const HeaderBlock = () => {
    return (
        <div className={s.cover}>
            <div className={s.wrap}>
                <h1 className={s.header}>Учите слова онлайн!</h1>
                <p className={s.descr}>Воспользуйте карточкой для запоминания и пополнения словарных запасов!</p>
                <img src={ ReactLogo } alt=""/>
                <ReactLogoSvg />
            </div>
        </div>
    )
}

export default HeaderBlock;