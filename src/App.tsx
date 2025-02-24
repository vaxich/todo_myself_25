
import { useState } from 'react';
import './App.css';
import { Todolist } from './Todolist';


export type TaskType = {
  id: string,
  title: string,
  isDone: boolean
}

export type FilterType = "All" | "Active" | "Completed"

function App() {
// стейт
  const title: string = 'что учить';

  const [tasks, setTasks] = useState<TaskType[]>([
    { id: crypto.randomUUID(), title: 'HTML', isDone: true },
    { id: crypto.randomUUID(), title: 'JS', isDone: true },
    { id: crypto.randomUUID(), title: 'React', isDone: false },
    { id: crypto.randomUUID(), title: 'TS', isDone: false },
    { id: crypto.randomUUID(), title: 'kamasutra', isDone: true }
  ])

  const [filter, setFilter] = useState<FilterType>("All");

  // функции

  const changeFilter = (newValueFilter: FilterType) => {// изменение фильтра
    setFilter(newValueFilter)
  }
  const deteteTask = (taskId: string) => { // удаление таскм
    //let newTasks = tasks.filter(task => task.id != taskId)
    setTasks(tasks.filter(task => task.id != taskId))
  }

  const addTask = (newTaskTitle: string) => { // добавление таски
    let newTask = {
      id: crypto.randomUUID(),
      title: newTaskTitle,
      isDone: false
    }
    let newTasks = [newTask, ...tasks]
    setTasks(newTasks)
  }

  const changeTaskStatus = (taskId: string , newTaskStatus: boolean) => {
      const newState = tasks.map ( task => task.id === taskId ? {...task, isDone: newTaskStatus} : task)
      setTasks(newState)
  }

  // фтльтрация тасок

  let filteredTasks: TaskType[] = tasks

  if (filter === "Active") {
    filteredTasks = tasks.filter(task => !task.isDone)
  }
  if (filter === "Completed") {
    filteredTasks = tasks.filter(task => task.isDone)
  }

 


  return (



    <div className="App">      
        <Todolist
          title={title}
          tasks={filteredTasks}
          filter = {filter}
          deteteTask={deteteTask}
          changeFilter={changeFilter}
          addTask = {addTask}
          changeTaskStatus = {changeTaskStatus}
        />   
    </div>
  );
}

export default App;
