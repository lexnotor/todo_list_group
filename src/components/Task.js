import React, { useState } from 'react'
import { FaTrashAlt, FaRegCheckSquare } from 'react-icons/fa'


const Task = (props) => {

    const { checked, deleted, titre, tkey } = props.task;
    const { check, del } = props;

    const [isEdited, setIsEdited] = useState(false);


    return (
        <div className='list-item'>

            {
                isEdited ?
                    <div>
                        <input 
                            type="text"
                        />
                    </div>
                    :
                    <h4 className={checked ? 'barre' : ''} > {titre} </h4>
            }

            <div className='actions'>

                <span
                    onClick={() => check(tkey)}
                    className={checked ? 'check' : ''}
                >
                    <FaRegCheckSquare />
                </span>

                <span
                    onClick={() => del(tkey)}
                    className={deleted ? 'del' : ''}
                >
                    <FaTrashAlt />
                </span>

            </div>
        </div>
    )
}

export default Task