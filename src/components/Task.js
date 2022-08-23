import React, { useState } from 'react'
import { FaTrashAlt, FaRegCheckSquare, FaEdit } from 'react-icons/fa'


const Task = (props) => {

    // Nous recuperons les propriétés des la tâche avec la destructuration
    const { check:checked, title:titre, id:tkey } = props.task;
    // Nous reccuperons les fonctions check, del et update, nous permettant
    // de faire des actions sur une tâche precise
    const { check, del, update } = props;
    // Ce state permet de savoir si l'on est entrain d'editer la tâche ou paas
    const [isEdited, setIsEdited] = useState(false);
    // Ce state permet de garder en memoire le nouveau titre saisi par l'utilisateur
    const [updatedText, setUpdatedText] = useState('')
    // Nous créons ici deux fonctions, permettant de modifier les deux states ci-haut
    const changeEditable = (b) => {
        b && setUpdatedText(titre);
        // Quand on termine l'edition, nous verifions que le texte saisi n'est pas
        // vide avant d'executer la fonction update de App.js
        !b && updatedText.trim().length && update(tkey, updatedText.trim())
        setIsEdited(b);
    }

    const changeUpdate = (e) => {
        const texte = e.target.value + '';
        setUpdatedText(texte)
    }

    return (
        <div className='list-item'>

            {
                // Selon qu'on est entrain de l'editer ou pas, nous afficherons
                // soit une balise <input/> ou une balise <h4>
                isEdited ?
                    <div>
                        <input
                            type="text"
                            value={updatedText}
                            onBlur={() => changeEditable(false)}
                            onChange={ changeUpdate}
                        />
                        <button>Valider</button>
                    </div>
                    :
                    <h4
                        className={checked ? 'barre' : ''}
                        onClick={() => changeEditable(true)}
                    > {titre} </h4>
            }
            {/* Nous different bouton d'actions, ici nous utilisons des 
              * <span> à la place des <button>
              * l'icône utilisée vient de react-icons
              */}
            <div className='actions'>
                {/* Notre Bouton checker */}
                <span
                    onClick={() => check(tkey)}
                    className={checked ? 'check' : ''}
                >
                    <FaRegCheckSquare />
                </span>
                {/* Notre Bouton supprimer */}
                <span
                    onClick={() => del(tkey)}
                    className={'del'}
                >
                    <FaTrashAlt />
                </span>
                {/* Notre Bouton Editer */}
                <span
                    onClick={() => changeEditable(true)}
                    className={'edit'}
                >
                    <FaEdit />
                </span>

            </div>
        </div>
    )
}

export default Task