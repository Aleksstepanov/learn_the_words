import React from 'react';
import style from './Menu.module.scss'

const Menu = (props) => {
    const menu = Object.values(props).map((item, index) => <li className="menu__item" key={index}>{item}</li>);
    return (
        <>
            <ul className={style.menu}>
                {menu}
            </ul>
        </>
    )
}

export default Menu;