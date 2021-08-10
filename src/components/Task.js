import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div 
            className={`task ${task.reminder ? 'reminder' : ''}`} //se task.reminder = true, vai pegar o estilo css de reminder. senão, pega nada
            onDoubleClick={() => onToggle(task.id)}
        >
            <h3>
                {task.text} 
                <FaTimes //delete button
                    style={{ color: "red", cursor: 'pointer'}} 
                    onClick={() => onDelete(task.id)} // quando clicar, vai usar a props que pegou de Tasks, que por sua vez pegou de App, que possui função onDelete
                />
            </h3> 
            <p>{task.day}</p>           
        </div>
    )
}

export default Task
