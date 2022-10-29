import React, { useState } from 'react'

export default function Texta() {
    const [myWord , setMyWord ] = useState('my name is naveen ');

    const ChangeWord = () =>{
   let val = myWord;
   if (val==='my name is naveen') {
    setMyWord('neo sharma')
   } else {
    setMyWord('my name is naveen')
   }
 
}
  return (
    <div> 
      <h1>{myWord}</h1>
      <button className='new_section' onClick={ChangeWord} >Click me to change</button>
       </div>  
  )
}
