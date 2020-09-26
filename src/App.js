import React, {Component} from 'react';
import * as firebase from 'firebase';
import ContentBlock from './components/ContentBlock/ContentBlock';
import HeaderBlock from './components/HeaderBlocks/HeaderBlock'
import FooterBlock from './components/FooterBlock/FooterBlock';
import footerContent from './Data/footerContent';
import Header from './components/Header/Header';
import Paragraph from './components/Paragraph/Paragraph';
import Nav from './components/Nav/Nav';
import wordList from './Data/wordsList';

const firebaseConfig = {
  apiKey: "AIzaSyAV3iMeAcIni8mUrddISDvLafeeE7sAfS0",
  authDomain: "learn-the-words-5efd5.firebaseapp.com",
  databaseURL: "https://learn-the-words-5efd5.firebaseio.com",
  projectId: "learn-the-words-5efd5",
  storageBucket: "learn-the-words-5efd5.appspot.com",
  messagingSenderId: "643760712759",
  appId: "1:643760712759:web:24cea69dc0946110f823b2"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

class App extends Component {
  state = {
    wordArr: [],
  }
  componentDidMount() {
    database.ref('/cards').once('value').then(res => {
      this.setState({
        wordArr: res.val(),
      })
    });
console.log(this.state);
  }
  
  inputRef = React.createRef();
  onDeletedItem = (id) => {
    this.setState(({wordArr}) => {
      const idx = wordArr.findIndex((item) => item.id === id);
      const newWordArr = [
        ...wordArr.slice(0, idx),
        ...wordArr.slice(idx + 1)
      ]
      return {
        wordArr: newWordArr,
      }
    })
  }
  onAdd = (value) => {
    this.setState(({wordArr}) => {
      const idArray = wordArr.map((elem) => elem.id);
      const idMax = Math.max.apply(null, idArray);
      const newWord = {
        eng: value,
        rus: value,
        id: idMax + 1,
      }
      const newWordArr = [...wordArr, newWord];
      return {
        wordArr: newWordArr,
      }
    })
  }
  render() {
    const { wordArr } = this.state;
    return (
      <React.Fragment>
      <Nav />
      <HeaderBlock>
        
        <Header>
          Учите слова онлайн
        </Header>
        <Paragraph>
          Воспользуйте карточкой для запоминания и пополнения словарных запасов!
        </Paragraph> 
      </HeaderBlock>
      <ContentBlock {...wordArr} onDeletedItem={ this.onDeletedItem } onAdd= {(value) => this.onAdd(value) }/>
      <FooterBlock {...footerContent}/>
      </React.Fragment>
    )
  }
}

export default App;
