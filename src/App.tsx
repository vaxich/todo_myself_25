
import './App.css';
import { Todolist } from './Todolist';


export type TaskType = {
  id: string,
  title: string,
  isDone: boolean
}

function App() {

  const title1: string = 'что учить';


  const tasks1: TaskType[] = [
    { id: '1', title: 'HTML', isDone: true },
    { id: '2', title: 'JS', isDone: true },
    { id: '3', title: 'React', isDone: false },
    { id: '3', title: 'TS', isDone: false },
    { id: '3', title: 'kamasutra', isDone: true },
  ]


  return (



    <div className="App">
      <Todolist title={title1} tasks={tasks1} />
    </div>
  );
}

export default App;
