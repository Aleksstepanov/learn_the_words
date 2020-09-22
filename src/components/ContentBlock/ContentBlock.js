import React, {Component} from 'react';
import style from './ContentBlock.module.scss';
import Card from '../Card/Card';
import classNames from 'classnames';
import '../../../node_modules/materialize-css//dist/css/materialize.min.css';
// const Cards = require.context('./img', true, /\.jpg$/);
// const path = Cards.keys();
// const image = path.map((elem) => Cards(elem));

class ContentBlock extends Component {
    state = {
        value: '',
        label: '',
    }
    handleInputChenge = (event) => {
        this.setState({
            value: event.target.value,
        });
    }
    onSubmitForm = (event) => {
        event.preventDefault();
        this.setState(({ value }) => {
            return {
                label: value,
                value: '',
            }
        });
        this.props.onAdd(this.state.value);
    }
    render() {
        const {onDeletedItem, onAdd, ...item} = this.props;
        console.log(item);
        return (
            <>
                <div>
                    { this.state.label }
                </div>
                <form className= { classNames(style.form) }
                    onSubmit={ this.onSubmitForm }
                >
                <div className={ classNames("input-field", "col", "s6", style.inputAdd) }>
                    <input id="last_name" type="text" className={ classNames("validate") }
                    value={ this.state.value } onChange={this.handleInputChenge}
                    ref={this.inputRef}
                    />
                </div>
                <a className={ classNames("waves-effect", "waves-light", "btn", 'blue', 'lighten-2') }
                onClick={ this.onSubmitForm }
                >
                    Add New Word
                </a>
                </form>
                <div className={style.card__wraper}>
                    {
                        Object.values(item).map(({eng, rus, id}) => <Card 
                                                                        eng={eng} 
                                                                        rus={rus} 
                                                                        key={id} 
                                                                        onDeleted={ () => onDeletedItem(id)
                                                                    }/>)
                    }
                </div>
            </>
        )
    }
}

export default ContentBlock;