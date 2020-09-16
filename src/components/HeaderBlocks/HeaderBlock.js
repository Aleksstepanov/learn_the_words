import React from 'react';
import s from './style.css';

const HeaderBlock = () => {
    return (
        <div className={s.cover}>
            <div className={s.wrap}>
                <h1 className={s.header}>Учите слова онлайн!</h1>
                <p>Воспользуйте карточкой для запоминания и пополнения словарных запасов!</p>
            </div>
        </div>
    )
}

export default HeaderBlock;