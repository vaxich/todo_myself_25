
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

  const title: string = 'что учить';

  const [tasks, setTasks] = useState<TaskType[]>([
    { id: '1', title: 'HTML', isDone: true },
    { id: '2', title: 'JS', isDone: true },
    { id: '3', title: 'React', isDone: false },
    { id: '4', title: 'TS', isDone: false },
    { id: '5', title: 'kamasutra', isDone: true }
  ])

  const [filter, setFilter] = useState<FilterType>("All");

  let filteredTasks: TaskType[] = tasks

  if (filter === "Active") {
    filteredTasks = tasks.filter(task => !task.isDone)
  }
  if (filter === "Completed") {
    filteredTasks = tasks.filter(task => task.isDone)
  }

  const changeFilter = (newValueFilter: FilterType) => {
    setFilter(newValueFilter)
  }
  const deteteTask = (taskId: string) => {
    //let newTasks = tasks.filter(task => task.id != taskId)
    setTasks(tasks.filter(task => task.id != taskId))
  }


  return (



    <div className="App">      
        <Todolist
          title={title}
          tasks={filteredTasks}
          deteteTask={deteteTask}
          changeFilter={changeFilter}
        />   
    </div>
  );
}

export default App;
