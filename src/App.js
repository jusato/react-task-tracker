import { useState, useEffect } from "react"
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false) //dentro do useState() coloca o valor default, ai depois vai poder mudar chamando setFunction()
  //Vamos fazer o useState() aqui em App [./App.js] e não em Tasks [./components/Task] para estar no top level, 
  //porque vamos querer usar isso em outros componentes. 

  //piece of state (tasks) and function to update the state (setTasks)
  const [tasks, setTasks] = useState([]) //valor default: vetor vazio (sem tasks) 

  //-----------
  //Vamos usar useEffect() para pegar os dados do JSON server (os que foram colocados em db.json)
  //(fetch tasks from the backend and use them)
  useEffect(() => { //recebe uma função
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])          //esse [] passado é um dependency array (não vamos usar aqui, mas é bom passar caso user queira mudar valor)

  const fetchTasks = async () => {
    const response = await fetch('http://localhost:5000/tasks') //onde a gente falou que ia estar o server em package.json (port 5000) + /nomeElemento (tasks), como a gente colocou em db.json (aqui poderia colocar qualquer back server, esse nosso é local, mas poderia ser um "real")
    const data = await response.json()
    return data
  }

  const fetchTask = async (id) => {
    const response = await fetch(`http://localhost:5000/tasks/${id}`) //onde a gente falou que ia estar o server em package.json (port 5000) + /nomeElemento (tasks), como a gente colocou em db.json (aqui poderia colocar qualquer back server, esse nosso é local, mas poderia ser um "real")
    const data = await response.json()
    return data
  }
  //-----------

  //Add Task
  const addTask = async (task) => {
    const response = await fetch('http://localhost:5000/tasks', {
      method: 'POST', 
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await response.json()

    setTasks([...tasks, data]) //data é a nova task que acabou de ser criada

    /*
    const id = Math.floor(Math.random()*10000) + 1 //gerar um id aleatorio
    const newTask = {id, ...task} //essa newTask vai ter esse id aleatorio gerado acima e os valores do parametro task (objeto) passado 
    setTasks([...tasks, newTask]) //alterar o vetor de tasks copiando todas as tasks que ja tinha e adicionando a newTask
    */
  }

  //Função para deletar task quando clicar no X
  const deleteTask = async (id) => { //queremos deletar/fazer não aparecer na tela a task com esse id passado
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    }) //para deletar de verdade se clicar em deletar
    setTasks(tasks.filter((task) => task.id !== id)) //então a gente filtra pegando as tasks que não tem esse id, e so mostra as tasks com id diferente desse
  }

  //Toggle reminder - função para quando dar doubleClick na task mudar para ativar ou desativar o reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updatedTask = {...taskToToggle, reminder: !taskToToggle.reminder}
    const response = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT', //porque é update
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    })
    const data = await response.json()

    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: data.reminder } : task)) //"...tasks" copia tudo igual de task, menos reminder, que vira o oposto do que era
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
