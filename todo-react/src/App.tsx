import React from 'react';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';


const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  height:100%;
`
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`
const Center = styled.div`
  padding: 0 35% 0 35%;
`
const Button = styled.button<{ $primary?: boolean; }>`
  /* Adapt the colors based on primary prop */
  background: ${props => props.$primary ? "#BF4F74" : "white"};
  color: ${props => props.$primary ? "white" : "#BF4F74"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;
`;
const Input = styled.input<{ $inputColor?: string; }>`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.$inputColor || "#BF4F74"};
  background: orange;
  border: none;
  border-radius: 3px;
`;
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
    <Wrapper>
      <Title>Task Application</Title>
      <Center>
      <>
        <Input value={taskInput} onChange={(e)=>{setTaskInput(e.target.value)}}/>
        <Button onClick={()=>addTask({message:taskInput?taskInput:"default message" , id:small_id})}>Add task</Button>
      </>
      <ul>
      {tasks.map((task) => <>
        <li key={task.id}>
          <>
            {taskUpdate && task.id === updateTaskId ?<Input value={updateContent?updateContent:task.message} onChange={(e)=>setUpdateContent(e.target.value)} /> :task.message}
          </>
          <Button key={task.id} onClick={()=>updateTask(task.id,{message:updateContent,id:small_id})}>
            Update
          </Button>
          <Button key={task.id} onClick={()=>deleteTask(task.id)}>delete</Button>
        </li>
      </> )}
      </ul>
      </Center>
    </Wrapper>
  );
}

export default App;
