import React from 'react';
import ContentBlock from './components/ContentBlock/ContentBlock';
import HeaderBlock from './components/HeaderBlocks/HeaderBlock'
import FooterBlock from './components/FooterBlock/FooterBlock';
import footerContent from './Data/footerContent';
import Header from './components/Header/Header';
import Paragraph from './components/Paragraph/Paragraph';
import Nav from './components/Nav/Nav';

const App = () => {
  const Cards = {
    col: 6,
  }
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
    <ContentBlock {...Cards}/>
    <FooterBlock {...footerContent}/>
    </React.Fragment>
  )
}

export default App;
