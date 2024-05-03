import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

// import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
function Parent()
{
  var [num,setcounter]=useState(0)
  function changenum()
  {
    setcounter(Math.floor(Math.random()*10)+5)
  }
  return(
    <div>
      <h1>{num}</h1>
      <button onClick={changenum}>CLICK RANDOM NUMBER</button>
    </div>
  )
}
root.render(
 <Parent></Parent>
);


