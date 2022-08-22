import React from 'react'
import { FaTrashAlt, FaRegCheckSquare, FaTasks } from 'react-icons/fa'

const Header = ({ checkAll, deleteAll }) => {

  return (
    <div className='header'>
      <h3>
        <FaTasks /> 
        La todo list
      </h3>

      <div className='actions'>

        <span onClick={() => checkAll()}> 
          <FaRegCheckSquare /> 
        </span>

        <span onClick={() => deleteAll()}> 
          <FaTrashAlt /> 
        </span>

      </div>
      
    </div>
  )
}

export default Header