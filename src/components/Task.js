import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete }) => {
    return (
        <div className='task'>
            <h3>
                {task.text} 
                <FaTimes 
                    style={{ color: "red", cursor: 'pointer'}} 
                    onClick={() => onDelete(task.id)} // quando clicar, vai usar a props que pegou de Tasks, que por sua vez pegou de App, que possui função onDelete
                />
            </h3> 
            <p>{task.day}</p>           
        </div>
    )
}

export default Task
