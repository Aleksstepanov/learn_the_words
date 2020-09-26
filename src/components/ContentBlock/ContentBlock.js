import React, {Component} from 'react';
import style from './ContentBlock.module.scss';
import Card from '../Card/Card';
import ProgressDeterminate from '../ProgressDeterminate/ProgressDeterminate';
import ProgressIndeterminate from '../ProgressIndeterminate/ProgressIndeterminate';
import classNames from 'classnames';
import getTranslateWord from '../../sevices/dictionary';
class ContentBlock extends Component {
    state = {
        value: '',
        label: '',
        isBusy: false,
    }
    handleInputChenge = (event) => {
        this.setState({
            value: event.target.value,
        });
    }
    getTheWord = async () => {
        const RusValue = /^[а-яё]/i;
        const EngValue = /^[a-z]/i;
        
        if (RusValue.test(this.state.value)) {
            const getWord = await getTranslateWord(this.state.value, 'ru-en');
        this.setState(() => {
            return {
                label: getWord.translate,
                value: '',
                isBusy: false,
            }
        });
        }
        else if (EngValue.test(this.state.value)) {
            const getWord = await getTranslateWord(this.state.value);
        this.setState(() => {
            return {
                label: getWord.translate,
                value: '',
                isBusy: false,
            }
        }); 
        }
        else console.log('Введите корректное слово!');
        
    }
    onSubmitForm = async (event) => {
        
        if (this.state.value.length > 1) {
            event.preventDefault();
            this.setState({
                isBusy: true,
            }, this.getTheWord);
            this.props.onAdd(this.state.label);
        }
    }
    render() {
        const {onDeletedItem, onAdd, ...item} = this.props;
        const isBusy = this.state.isBusy;
        return (
            <>
                <div>
                    { this.state.label }
                </div>
                <form className= { classNames(style.form) }
                    onSubmit={ this.onSubmitForm }
                >
                <div className={ classNames("input-field", "col", "s6", style.inputAdd) }>
                    <input id="new_word" type="text" className={ classNames("validate") }
                    value={ this.state.value } onChange={this.handleInputChenge}
                    ref={this.inputRef}
                    />
                    <label htmlFor="new_word"> New word</label>
                </div>
                <a className={ classNames("waves-effect", "waves-light", "btn", 'blue', 'lighten-2') }
                onClick={ this.onSubmitForm }
                >
                    Add New Word
                </a>
                </form>
                {isBusy
                    ?<ProgressIndeterminate />
                    :<ProgressDeterminate />
                }
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