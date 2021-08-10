import { useState } from "react"

const Tasks = () => {
    const [tasks, setTasks] = useState( //piece of state (tasks) and function to update the state (setTasks)
        [
            {
                id: 1,
                text: 'Doctors Appointment',
                day: 'Feb 5th at 2:30 pm',
                reminder: true,
            },
            {
                id: 2,
                text: 'Meeting at School',
                day: 'Feb 6th at 2:30 pm',
                reminder: true,
            },
            {
                id: 3,
                text: 'Food Shopping',
                day: 'Feb 7th at 2:30 pm',
                reminder: false,
            }
        ]  
    ) 

    return (
        //Não pode fazer tasks.push() por exemplo, porque state é imutável, não pode mudar diretamente
        //por isso foi declarado acima como const [tasks, setTasks], para mudar usando apenas setTasks()
        //Exemplo: setTasks([...])
        <>
          {tasks.map((task) => ( //Usando map() para criar uma lista, map recebe uma função como parâmetro, por isso arrow function
              <h3 key={task.id} >{task.text}</h3> //Each child in a list should have a unique "key" prop.
          ))} 
        </>
    )
}

export default Tasks
