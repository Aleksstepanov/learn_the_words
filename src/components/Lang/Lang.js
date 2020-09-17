import React from 'react';
import Menu from '../Menu/Menu';
import menuitem from '../../Data/menuItem';
import './Lang.scss';

const Lang = () => {
    let selectLang = false;
    const change = () => {
        selectLang = !selectLang;
    }
    return (
        <>
            <div className="switch">
                    <label> Rus
                <input type="checkbox" className="Lang" onClick={change} value="Eng"/>
                <span className="lever"></span>
                Eng
                </label>
            </div>
            {selectLang ? <Menu {...menuitem.menuEng}/> : <Menu {...menuitem.menuRus}/>}
        </>
  )
}

export default Lang;