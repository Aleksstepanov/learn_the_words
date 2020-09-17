import React from 'react';
import style from './Menu.module.scss'

const Menu = (props) => {
    const a = [...props];
    console.log(a);
    //const menu = a.map((item, index) => <li className="menu__item" key={index}>{item}</li>);
    return (
        <>
            <ul className={style.menu}>
                <li>1</li>
            </ul>
        </>
    )
}

export default Menu;