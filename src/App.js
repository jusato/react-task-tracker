import { useState } from "react"
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {

  //Vamos fazer o useState() aqui em App [./App.js] e não em Tasks [./components/Task] para estar no top level, 
  //porque vamos querer usar isso em outros componentes. 
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

  //Função para deletar task quando clicar no X
  const deleteTask = (id) => { //queremos deletar/fazer não aparecer na tela a task com esse id passadao
    setTasks(tasks.filter((task) => task.id !== id)) //então a gente filtra pegando as tasks que não tem esse id, e so mostra as tasks com id diferente desse
  }

  return (
    //Não pode fazer tasks.push() por exemplo, porque state é imutável, não pode mudar diretamente
    //por isso foi declarado acima como const [tasks, setTasks], para mudar usando apenas setTasks()
    //Exemplo: setTasks([...])
    <div className="container">
      <Header />  {/*poderia passar um valor para props title aqui, tipo title='Hello'*/}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask}/>) //passar props tasks declarada acima em const [tasks, setTasks] = useState(...)
        : ('No tasks to show') 
      }
    </div>
  );
}

export default App;
