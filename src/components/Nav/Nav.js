import React from 'react';
import style from './Nav.module.scss';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
import classNames from 'classnames';

class Nav extends React.Component {
    state = {
        lang: true,
    }
    onSwitchLang = () => this.setState({ 
        lang: !this.state.lang, 
    });
    render() {
        const menu = {
            rus: ['домой', 'о нас', 'контакты'],
            eng: ['home', 'about', 'contact'],
        }
        return (
            <nav className= {style.nav}>
                <div className= { classNames('nav-wrapper', 'blue', 'lighten-2', style.nav__wrapper) }>
                  <ul id="nav-mobile" className="right hide-on-med-and-down">
                    {this.state.lang ? menu.rus.map((elem, index) => <li key={index}>{elem}</li>) : menu.eng.map((elem, index) => <li key={index}>{elem}</li>)}
                  </ul>
                  <div className={ classNames(style.switch__wrapper, "switch")}>
                    <label className={ style.switch__text }>
                        RUS 
                    <input type="checkbox" onClick={ this.onSwitchLang }/>
                    <span className="lever"></span>
                        ENG
                    </label>
                  </div>
                </div>
            </nav>
        )
    }
}

export default Nav;