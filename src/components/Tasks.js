import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => { //pegando a props tasks e onDelete que foram passada em App.js

    return (
        <>
          {tasks.map((task) => ( //Usando map() para criar uma lista, map recebe uma função como parâmetro, por isso arrow function
              <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/> //Each child in a list should have a unique "key" prop.
          ))} 
        </>
    )
}

export default Tasks
