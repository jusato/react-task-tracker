import { useState } from "react"

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('') //dentro do useState tem o default value
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault() //para não submit to a page

        //se user não digitar nada e clicar em submit
        if(!text) {
            alert('Please add a task.')
            return
        }

        //mandar os valores digitados para onAdd
        onAdd({text, day, reminder})

        //clear the form
        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input 
                    type='text' 
                    placeholder='Add Task' 
                    value={text} 
                    onChange={(e) => setText(e.target.value)} //a gente muda text com setText() que vai ser qualquer coisa que for digitado (e.target.value)
                />
            </div>
            <div className='form-control'>
                <label>Day and Time</label>
                <input 
                    type='text' 
                    placeholder='Add Day and Time' 
                    value={day} 
                    onChange={(e) => setDay(e.target.value)}
                />
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input 
                    type='checkbox'
                    checked={reminder}//para deixar a caixa unchecked se reminder for false
                    value={reminder} 
                    onChange={(e) => setReminder(e.currentTarget.checked)} //aqui não é target.value porque é checkbox, ai fazendo currentTarget.checked vai dar um true or false falando se ta checked ou não
                />
            </div>

            <input type='submit' value='Save Task' className='btn btn-block'/>
        </form>
    )
}

export default AddTask
