import React from 'react';
import './App.css';
import ContentBlock from './components/ContentBlock/ContentBlock';
import HeaderBlock from './components/HeaderBlocks/HeaderBlock'

const App = () => {
  const Cards = {
    col: 6,
  }
  return (
    <React.Fragment>
    <HeaderBlock title="Учите слова онлайн!"/>
    <ContentBlock {...Cards}/>
    </React.Fragment>
  )
}

export default App;
