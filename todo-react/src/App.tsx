import React from 'react';
import './App.css';


function App() {

  const [tasks,setTasks] = React.useState([{message:"first task" , id:1}])

  const addTask = (task:{message:string , id:number}) => {
    setTasks([...tasks,task])
  }

  const deleteTask = (id:number) => {
    setTasks(tasks.filter(task => task.id!== id))
  }
  return (
    <div >  
      <>
        <input />
        <button onClick={()=>addTask({message:"second task" , id:2})}>Add task</button>
      </>
      <ul>
      {tasks.map((task) => <>
        <li key={task.id}>{task.message} <button onClick={()=>deleteTask(task.id)}>delete</button></li>
      </> )}
      </ul>
    </div>
  );
}

export default App;
