import { TaskType } from "./App"
import { Button } from "./Button"



type TodolistPropsType = {
    title: string
    tasks: TaskType[]
}

export const Todolist = (props: TodolistPropsType) => {

    const { title, tasks } = props

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
                        <li >
                            <input type="checkbox" checked={task.isDone} /> <span>{task.title}</span>
                        </li>
                    )
                })}
            </ul>
            <div>
                <Button title='All' />
                <Button title='Active' />
                <Button title='Completed' />
            </div>
        </div>
    )
}