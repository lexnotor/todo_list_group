import React, {useRef} from 'react'

const Footer = () => {

  const inputEl = useRef(null);
  const onButtonClick = () => {
    if(inputEl.current.value.trim()){
      return;
    } else {
      console.log(inputEl.current.value);
    }
  };

  return (
    <div>
      <form onSubmit={e => {e.preventDefault()}}>
        <input ref={inputEl} type="text" />
        <button onClick={onButtonClick}>+</button>
      </form>
    </div>
  )
}

export default Footer