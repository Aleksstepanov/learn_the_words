import React, {Component} from 'react';
import ContentBlock from './components/ContentBlock/ContentBlock';
import HeaderBlock from './components/HeaderBlocks/HeaderBlock'
import FooterBlock from './components/FooterBlock/FooterBlock';
import footerContent from './Data/footerContent';
import Header from './components/Header/Header';
import Paragraph from './components/Paragraph/Paragraph';
import Nav from './components/Nav/Nav';
import wordList from './Data/wordsList';

class App extends Component {
  state = {
    wordArr: wordList,
  }
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
      <ContentBlock {...wordArr} onDeletedItem={ this.onDeletedItem }/>
      <FooterBlock {...footerContent}/>
      </React.Fragment>
    )
  }
}

export default App;
