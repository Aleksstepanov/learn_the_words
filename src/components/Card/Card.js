import React from 'react';
import style from './Card.module.scss';
import classNames from 'classnames';

class Card extends React.Component {
    state = {
        done: false,
        isRemembered: false,
    }
    onCardClick = () => {
        if (!this.state.isRemembered) {
            this.setState(( {done} ) => {
                return {
                    done: !done,
                }
            })
        }
    }
    onRememberClick = () => {
        this.setState(( {isRemembered} ) => {
            return {
                isRemembered: !isRemembered,
            }
        });
        this.onCardClick();
    }
    render() {
        const { rus, eng } = this.props;
        const { done } = this.state;
        const cardClass = [style.card];

        if (done) {
            cardClass.push(style.done);
        }
        return (
            <div className={ classNames(style.card, { 
                                                        [style.done]: this.state.done, 
                                                        [style.isRemembered]: this.state.isRemembered
                                                    }) }
             
            >
                <div className={ classNames(style.cardInner) } onClick={ this.onCardClick }>
                    <div className={style.cardFront}>
                        { eng }
                    </div>
                    <div className={style.cardBack}>
                        { rus }
                    </div>
                </div>
                <div className = {classNames(style.icons)}>
                <i className="material-icons" onClick={this.onRememberClick}>check</i>
                </div>
            </div>
        )
    }
}

export default Card;