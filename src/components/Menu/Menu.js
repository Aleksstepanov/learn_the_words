import React from 'react';
import Lang from '../Lang/Lang';
import style from './Menu.module.scss'

const Menu = (props) => {
    const menu = props.menuEng.map((item, index) => <li className="menu__item" key={index}>{item}</li>);
    return (
        <>
            <Lang />
            <ul className={style.menu}>
                { menu }
            </ul>
        </>
    )
}

export default Menu;