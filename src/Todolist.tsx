import { FilterType, TaskType } from "./App"
import { Button } from "./Button"
import './App.css';
import { ChangeEvent, useState , KeyboardEvent} from "react";


type TodolistPropsType = {
    title: string
    tasks: TaskType[]
    deteteTask: (taskId: string) => void
    changeFilter: (newValueFilter: FilterType) => void
    addTask: (newTaskTitle: string) => void
}

export const Todolist = (props: TodolistPropsType) => {
// пропсы
    const { title, tasks, deteteTask, changeFilter, addTask } = props

    // стейт

    const [inputValue, setinputValue] = useState<string>("")

    // функции

    const addTaskOnClickHandler = () => {
        addTask(inputValue)
        
        setinputValue("")
    }

    const changeTaskTitleValue = (event: ChangeEvent<HTMLInputElement>) => {
        setinputValue(event.currentTarget.value)
        
    }

    const createTaskOnEnterHandler  = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.code === "Enter") {
            addTask(inputValue)
            setinputValue("")
        }
    }

    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input
                    type="text"
                    value={inputValue}
                    onChange={changeTaskTitleValue}
                    onKeyDown={createTaskOnEnterHandler}
                />
                <button
                    onClick={addTaskOnClickHandler}
                    
                >+</button>
            </div>
            <ul>
                {tasks.map(task => {

                    const deleteTaskHandler = () => {
                        deteteTask(task.id)
                    }
                    return (

                        <li key={task.id} >
                            <input type="checkbox" checked={task.isDone} />
                            <span>{task.title}</span>
                            <Button title='X' onClick={deleteTaskHandler} />
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