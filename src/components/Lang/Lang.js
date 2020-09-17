import React from 'react';
import './Lang.scss';

const Lang = () => {
    const change = () => {
        console.log('change');
    }
    return (
        <div className="switch">
            <label> Rus
        <input type="checkbox" className="Lang" onClick={change}/>
        <span className="lever"></span>
      Eng
    </label>
  </div>
  )
}

export default Lang;