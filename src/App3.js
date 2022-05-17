////////////////////////////////Использование useRef

import React, {useState, useRef, useEffect} from 'react';
import './App.css';

export default function App3() {

    const ref  = useRef(null)

    useEffect(() => {
        // console.log(ref)
    })

    const handleFocus = () => {
        ref.current.focus();
        ref.current.style.color = 'red'
    }
  return (
    <div className='form'>
        <input ref={ref}/>
        <button onClick={handleFocus}>focus</button>
    </div>
  )
}
