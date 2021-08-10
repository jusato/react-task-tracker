const tasks = [
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

const Tasks = () => {
    return (
        <>
          {tasks.map((task) => ( //Usando map() para criar uma lista, map recebe uma função como parâmetro, por isso arrow function
              <h3 key={task.id} >{task.text}</h3> //Each child in a list should have a unique "key" prop.
          ))} 
        </>
    )
}

export default Tasks
