import { useState } from "react";
import { v4 as uuid } from 'uuid';

import { TasksList } from "./components/TasksList";
import { ListStatus } from "./components/ListStatus";

import * as S from "./styles/styles";

function App() {

  const [task, setTask] = useState('');
  const [list, setList] = useState([]);
  const [editedTask, setEditedTask] = useState({});

  function handleInputNewTask(event) {
    setTask(event.target.value)    
  }

  function handleEnterKeyDown(event) {
    if (event.key == "Enter") {
       handleClickNewTask()
    }
  }

  function handleClickNewTask() {
    if (!task) {
      alert("Seu campo está vazio. Por favor, digite uma tarefa.")
      return
    }

    if (Object.keys(editedTask).length > 0) {
      const removedTaskList = list.filter( (task) => ( task.idTask !== editedTask.id ))    
      setList([...removedTaskList, {idTask: editedTask.id, descriptionTask: task, taskCompleted: editedTask.completed}])
      setTask('')

    } else {
      setList([...list, {idTask: uuid(), descriptionTask: task, taskCompleted: false}])
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

      <ListStatus data={list}/>
      
      <TasksList data={list} setList={setList} setTask={setTask} setEditedTask={setEditedTask}/>

    </S.Container>
  );
}

export default App;
