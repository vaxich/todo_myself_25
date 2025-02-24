import { FilterType, TaskType } from "./App"
import { Button } from "./Button"
import './App.css';
import { ChangeEvent, useState, KeyboardEvent } from "react";


type TodolistPropsType = {
    title: string
    tasks: TaskType[]
    filter: FilterType
    deteteTask: (taskId: string) => void
    changeFilter: (newValueFilter: FilterType) => void
    addTask: (newTaskTitle: string) => void
    changeTaskStatus: (taskId: string, newTaskStatus: boolean) => void
}

export const Todolist = (props: TodolistPropsType) => {
    // пропсы
    const { title, tasks, filter, deteteTask, changeFilter, addTask, changeTaskStatus } = props

    // стейт

    const [inputValue, setinputValue] = useState<string>("")
    const [error, setError] = useState<string | null>(null)

    // функции

    const addTaskOnClickHandler = () => {
        if (inputValue.trim() !== "") {
            addTask(inputValue)
            setinputValue("")
        } else {
            setError("наименование не может быть пустым")
        }

    }

    const changeTaskTitleValue = (event: ChangeEvent<HTMLInputElement>) => {
        setError(null)
        setinputValue(event.currentTarget.value)

    }

    const createTaskOnEnterHandler = (event: KeyboardEvent<HTMLInputElement>) => {
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
                    className={error ? "error" : ""}
                    type="text"
                    value={inputValue}
                    onChange={changeTaskTitleValue}
                    onKeyDown={createTaskOnEnterHandler}
                />
                <button
                    onClick={addTaskOnClickHandler}

                >+</button>
                {error && <div className={error ? "error-message" : ""}>{error}</div>}
            </div>
            <ul>
                {tasks.map(task => {

                    const deleteTaskHandler = () => {
                        deteteTask(task.id)
                    }
                    const changeTaskStatusOnClick = (event: ChangeEvent<HTMLInputElement>) => {
                        changeTaskStatus(task.id, event.currentTarget.checked)
                    }
                    return (

                        <li key={task.id} className={task.isDone ? "is-done" : ""}>
                            <input
                                type="checkbox"
                                checked={task.isDone}
                                onChange={changeTaskStatusOnClick}
                            />
                            <span>{task.title}</span>
                            <Button title='X' onClick={deleteTaskHandler} />
                        </li>


                    )
                })}
            </ul>
            <div className="App">
                <Button
                    title='All'
                    className={filter === "All" ? "active-filter" : ""}
                    onClick={() => changeFilter("All")}
                />
                <Button
                    title='Active'
                    className={filter === "Active" ? "active-filter" : ""}
                    onClick={() => changeFilter("Active")}
                />
                <Button
                    title='Completed'
                    className={filter === "Completed" ? "active-filter" : ""}
                    onClick={() => changeFilter("Completed")}
                />
            </div>
        </div>
    )
}