import React from 'react';
import style from './Card.module.scss';
import classNames from 'classnames';

class Card extends React.Component {
    state = {
        done: false,
    }
    onCardClick = () => {
        this.setState({
            done: !this.state.done,
        })
    }
    render() {
        const { rus, eng } = this.props;
        const { done } = this.state;
        const cardClass = [style.card];

        if (done) {
            cardClass.push(style.done);
        }
        return (
            <div className={ classNames(style.card, { [style.done]: done }) }
             onClick={this.onCardClick}
            >
                <div className={ classNames(style.cardInner)}>
                    <div className={style.cardFront}>
                        { eng }
                    </div>
                    <div className={style.cardBack}>
                        { rus }
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Card;