import React from 'react';
import './App.css';
import { v4 as uuid } from 'uuid';

function App() {

  const [tasks,setTasks] = React.useState([{message:"first task" , id:"sample"}])
  const [taskInput,setTaskInput] = React.useState("")
  const unique_id = uuid();
  const small_id = unique_id.slice(0,8)
  const addTask = (task:{message:string , id:string}) => {
    setTasks([...tasks,task])
    setTaskInput("")
  }

  const deleteTask = (id:string) => {
    setTasks(tasks.filter(task => task.id!== id))
  }
  return (
    <div >  
      <>
        <input value={taskInput} onChange={(e)=>{setTaskInput(e.target.value)}}/>
        <button onClick={()=>addTask({message:taskInput?taskInput:"default message" , id:small_id})}>Add task</button>
      </>
      <ul>
      {tasks.map((task) => <>
        <li key={task.id}>{task.message} <button key={task.id} onClick={()=>deleteTask(task.id)}>delete</button></li>
      </> )}
      </ul>
    </div>
  );
}

export default App;
