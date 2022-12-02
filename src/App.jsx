import { useState } from "react";
import * as S from "./styles/styles";

import { TasksList } from "./components/TasksList";
import { ListStatus } from "./components/ListStatus";

function App() {

  const [task, setTask] = useState('');
  const [list, setList] = useState([]);
  const [editedTask, setEditedTask] = useState('');

  function handleInputNewTask(event) {
    setTask(event.target.value)    
  }

  function handleEnterKeyDown(event) {
    if (event.key == "Enter") {
       handleClickNewTask()
    }
  }

  function handleClickNewTask() {
    if (editedTask) {

    } else {
      setList([...list, {idTask: ,descriptionTask: task, taskCompleted: false}])
      setTask('')
    }
  }
  
  return (
    <S.Container>
      <S.Title>To Do List</S.Title>

      <S.InputWrapper>
        <S.Input type="text" value={task} onChange={handleInputNewTask} onKeyDown={handleEnterKeyDown} />
        <S.Button onClick={handleClickNewTask}>Criar tarefa</S.Button>
      </S.InputWrapper>

      <ListStatus />
      
      <TasksList data={list} setList={setList} setTask={setTask} setEditedTask={setEditedTask}/>

    </S.Container>
  );
}

export default App;
