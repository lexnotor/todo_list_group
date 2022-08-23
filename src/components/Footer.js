import React, {useState} from 'react'

const Footer = ( {addTask}) => {

  const [inputEl, setInputEl] = useState("");

  const validate = () =>{
    if (inputEl.trim() === "") return;
    addTask(inputEl);
    setInputEl(""); 
  }

  return (
    <div>
      <form onSubmit={e => {e.preventDefault()}}>
        <input type="text" onChange={(e) => setInputEl(e.target.value)} value={inputEl} />
        <button type="submit" onClick={()=>validate()}>+</button>
      </form>
    </div>
  )
}

export default Footer