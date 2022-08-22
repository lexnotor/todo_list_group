import React, {useState} from 'react'

const Footer = () => {

  const [inputEl, setInputEl] = useState("");
  console.log(inputEl);

  const validate = () =>{
    if (inputEl === ""){
      inputEl = inputEl.trim();
    }
  }

  return (
    <div>
      <form onSubmit={e => {e.preventDefault()}}>
        <input type="text" onChange={(e) => setInputEl(e.target.value)}/>
        <input type="Submit" value="+" onClick={validate()}></input>
      </form>
    </div>
  )
}

export default Footer