import React from 'react';
import { v4 as uuid } from 'uuid';

function App() {

  const [tasks,setTasks] = React.useState([{message:"first task" , id:"sample"}])
  const [taskInput,setTaskInput] = React.useState("")
  const [taskUpdate,setTaskupdate] = React.useState(false)
  const [updateTaskId,setUpdateTaskId] = React.useState("")
  const [updateContent,setUpdateContent] = React.useState("")
  const unique_id = uuid();
  const small_id = unique_id.slice(0,8)
  const addTask = (task:{message:string , id:string}) => {
    setTasks([...tasks,task])
    setTaskInput("")
  }

  const deleteTask = (id:string) => {
    setTasks(tasks.filter(task => task.id!== id))
  }

  const updateTask = (id:string,taskUpdated:{message:string, id:string}) => {
    if(taskUpdate){
    setTasks(tasks.map(task => task.id === id? taskUpdated : task))
    setTaskupdate(false)
    setUpdateContent("")
    setUpdateTaskId("")
    }else{
      setUpdateTaskId(id)
      setTaskupdate(true)
    }
  }
  return (
    <div >  
      <>
        <input value={taskInput} onChange={(e)=>{setTaskInput(e.target.value)}}/>
        <button onClick={()=>addTask({message:taskInput?taskInput:"default message" , id:small_id})}>Add task</button>
      </>
      <ul>
      {tasks.map((task) => <>
        <li key={task.id}>
          <>
            {taskUpdate && task.id === updateTaskId ?<input value={updateContent?updateContent:task.message} onChange={(e)=>setUpdateContent(e.target.value)} /> :task.message}
          </>
          <button key={task.id} onClick={()=>updateTask(task.id,{message:updateContent,id:small_id})}>
            Update
          </button>
          <button key={task.id} onClick={()=>deleteTask(task.id)}>delete</button>
        </li>
      </> )}
      </ul>
    </div>
  );
}

export default App;
