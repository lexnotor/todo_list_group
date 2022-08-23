import React from 'react';
import '../App.css';
import { FaTrashAlt, FaRegCheckSquare, FaTasks } from 'react-icons/fa';

const Header = ({ checkAll, deleteAll }) => {

  return (
    <div className='header'>
      <div>
        <h3>
          <FaTasks />
        </h3>
      </div>
      <div>
        La todo list
      </div>
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