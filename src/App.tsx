
import { useState } from 'react';
import './App.css';
import { Todolist } from './Todolist';

export type TasksState = {
  [key: string]: TaskType[]
}
export type TaskType = {
  id: string,
  title: string,
  isDone: boolean
}

export type Todolist = {
  id: string,
  title: string,
  filter: FilterType
}


export type FilterType = "All" | "Active" | "Completed"

function App() {
  // стейт

  const todolistId1 = crypto.randomUUID()
  const todolistId2 = crypto.randomUUID()

  const [todolists, setTodolists] = useState<Todolist[]>([
    { id: todolistId1, title: 'What to learn', filter: 'All' },
    { id: todolistId2, title: 'What to buy', filter: 'All' },
  ])

  const [tasks, setTasks] = useState<TasksState>({
    [todolistId1]: [
      { id: crypto.randomUUID(), title: 'HTML&CSS', isDone: true },
      { id: crypto.randomUUID(), title: 'JS', isDone: true },
      { id: crypto.randomUUID(), title: 'ReactJS', isDone: false },
    ],
    [todolistId2]: [
      { id: crypto.randomUUID(), title: 'Rest API', isDone: true },
      { id: crypto.randomUUID(), title: 'GraphQL', isDone: false },
    ],
  })
  

  // функции

  const changeFilter = (todolistId: string, newValueFilter: FilterType) => {// изменение фильтра    
    setTodolists(todolists.map(todolist => todolist.id === todolistId ? { ...todolist, filter:newValueFilter  } : todolist))    
  }
  const deteteTask = (todolistId: string, taskId: string) => { // удаление таски
    setTasks({ ...tasks, [todolistId]: tasks[todolistId].filter(task => task.id !== taskId) })
    //let newTasks = tasks.filter(task => task.id != taskId)
    //setTasks(tasks.filter(task => task.id != taskId))
  }

  const addTask = (todolistId: string, newTaskTitle: string) => { // добавление таски
    let newTask = {
      id: crypto.randomUUID(),
      title: newTaskTitle,
      isDone: false
    }    
    setTasks({...tasks, [todolistId]: [newTask, ...tasks[todolistId]] })
    
  }

  const changeTaskStatus = (todolistId: string, taskId: string, newTaskStatus: boolean) => {

    setTasks({...tasks, [todolistId]: tasks[todolistId].map( task => task.id == taskId ? {...task, isDone: newTaskStatus} : task)})
  }

  const deleteTodolist = (todolistId: string) => {
    setTodolists(todolists.filter( todolist => todolist.id !== todolistId) )
    delete tasks[todolistId]
    setTasks({ ...tasks })
    
  }


  return (



    <div className="App">

      {todolists.map(todolist => {
        let filteredTasks: TaskType[] = tasks[todolist.id]

        if (todolist.filter === "Active") {
          filteredTasks = tasks[todolist.id].filter(task => !task.isDone)
        }
        if (todolist.filter === "Completed") {
          filteredTasks = tasks[todolist.id].filter(task => task.isDone)
        }


        return (



          <Todolist
            key={todolist.id}
            todolistId={todolist.id}
            title={todolist.title}
            tasks={filteredTasks}
            filter={todolist.filter}
            deteteTask={deteteTask}
            changeFilter={changeFilter}
            addTask={addTask}
            changeTaskStatus={changeTaskStatus}
            deleteTodolist={deleteTodolist}
          />
        )
      })

      }

    </div>
  );
}

export default App;
