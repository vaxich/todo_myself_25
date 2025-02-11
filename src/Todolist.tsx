import { FilterType, TaskType } from "./App"
import { Button } from "./Button"
import './App.css';


type TodolistPropsType = {
    title: string
    tasks: TaskType[]
    deteteTask: (taskId: string) => void
    changeFilter: (newValueFilter: FilterType) => void
}

export const Todolist = (props: TodolistPropsType) => {

    const { title, tasks, deteteTask, changeFilter } = props

    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input type="text" />
                <button>+</button>
            </div>
            <ul>
                {tasks.map(task => {
                    return (
                        
                            <li key = {task.id} >
                                <input type="checkbox" checked={task.isDone} /> 
                                <span>{task.title}</span>
                                <Button title='X' onClick={() => deteteTask(task.id)} />
                            </li>
                        

                    )
                })}
            </ul>
            <div className="App">
                <Button title='All' onClick={() => changeFilter("All")} />
                <Button title='Active' onClick={() => changeFilter("Active")} />
                <Button title='Completed' onClick={() => changeFilter("Completed")} />
            </div>
        </div>
    )
}