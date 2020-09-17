import React from 'react';
import './App.css';
import ContentBlock from './components/ContentBlock/ContentBlock';
import HeaderBlock from './components/HeaderBlocks/HeaderBlock'
import FooterBlock from './components/FooterBlock/FooterBlock';
import footerContent from './Data/footerContent';

const App = () => {
  const Cards = {
    col: 6,
  }
  return (
    <React.Fragment>
    <HeaderBlock title="Учите слова онлайн!"/>
    <ContentBlock {...Cards}/>
    <FooterBlock {...footerContent}/>
    </React.Fragment>
  )
}

export default App;
