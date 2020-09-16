import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import HeaderBlock from './components/HeaderBlocks/HeaderBlock';

const AppList = () => {
  const items = ['Item 1', 'Item 2', 'Item 3'];
  return (
    <ul>
      { items.map((item) => <li>{ item }</li>)}
      <hr></hr>
      <li>{ items[0] }</li>
      <li>{ items[1] }</li>
    </ul>
  )
}
const AppHeader = () => {
   return (
    <>
      <HeaderBlock />
      <h1 className="header">Hallo World</h1>
    </>
    
  )
}
const AppInput = () => {
  const placeholder = 'Search user...'
  return (
    <label>
      <input placeholder={ placeholder }></input>
    </label>
  )
}
const App = () => {
  return (
    <React.Fragment>
    <AppInput />
    <AppHeader />
    <AppList />
  </React.Fragment>
  )
}

ReactDom.render(<App />, document.getElementById('root'));