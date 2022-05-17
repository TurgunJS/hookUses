//////////////////////////////Использование useCallback

import React, {useCallback, useEffect, useState} from 'react'

export default function App2() {
    const [message, setMessage] = useState('message');
    const [count, setCount] = useState (0);


    const greenting = useCallback ((text) => {
        console.log('hello everybody', text);
    },[]);

  useEffect(() => {
      greenting(message);
  }, [greenting, message]);


  return <button onClick={() => setCount(count + 1)}>it was clicked {count} time</button>
}
