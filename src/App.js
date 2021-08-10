import { useState } from "react"
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false) //dentro do useState() coloca o valor default, ai depois vai poder mudar chamando setFunction()
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

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random()*10000) + 1 //gerar um id aleatorio
    const newTask = {id, ...task} //essa newTask vai ter esse id aleatorio gerado acima e os valores do parametro task (objeto) passado 
    setTasks([...tasks, newTask]) //alterar o vetor de tasks copiando todas as tasks que ja tinha e adicionando a newTask
  }

  //Função para deletar task quando clicar no X
  const deleteTask = (id) => { //queremos deletar/fazer não aparecer na tela a task com esse id passadao
    setTasks(tasks.filter((task) => task.id !== id)) //então a gente filtra pegando as tasks que não tem esse id, e so mostra as tasks com id diferente desse
  }

  //Toggle reminder - função para quando dar doubleClick na task mudar para ativar ou desativar o reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task)) //"...tasks" copia tudo igual de task, menos reminder, que vira o oposto do que era
  }
 
  return (
    //Não pode fazer tasks.push() por exemplo, porque state é imutável, não pode mudar diretamente
    //por isso foi declarado acima como const [tasks, setTasks], para mudar usando apenas setTasks()
    //Exemplo: setTasks([...])
    <div className="container">
      <Header 
        onAdd={() => setShowAddTask(!showAddTask)} //onAdd vai ser passado para Header ./components/Header.js como uma prop. Além disso o "valor" dessa prop é uma função que muda o valor do showAddTask para o contrário do que está quando chamada
        showAdd={showAddTask} //também vamos passar para Header o valor de showAddTask. Para isso é só passar uma nova prop chamada showAdd, que vai ter valor igual a showAddTask
      /> 
      {showAddTask && <AddTask onAdd={addTask}/>}     {/*Esse é um jeito de fazer um ternary sem o else (se showAddTask = true, <AddTask/>. Senão, nada*/}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) //passar props tasks declarada acima em const [tasks, setTasks] = useState(...)
        : ('No tasks to show') 
      }
    </div>
  );
}

export default App;
