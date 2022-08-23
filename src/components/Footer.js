import React, { useState } from 'react'
import { BsPlusCircleFill } from 'react-icons/bs';

const Footer = ({ addTask }) => {

  const [inputEl, setInputEl] = useState("");

  const validate = () => {
    if (inputEl.trim() === "") return;
    addTask(inputEl);
    setInputEl("");
  }

  return (
    <div className='footer'>
      <form onSubmit={e => { e.preventDefault() }}>
        <div style={{ position: 'relative' }}>
          <input type="text" className='input' onChange={(e) => setInputEl(e.target.value)} value={inputEl} />
          <button type="submit" className='submit' onClick={() => validate()}><BsPlusCircleFill /></button>
        </div>
      </form>
    </div>
  )
}

export default Footer