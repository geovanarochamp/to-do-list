import { useState } from "react";
import {
  Container,
  Title,
  Input,
  Button,
  InputWrapper,
  StatusWrapper,
  StatusTask,
  StatusText,
  Task, 
  Tasks,
  TaskButtons
} from "./styles/styles";
import "./App.css";

function App() {
  return (
    <Container>
      <Title>To Do List</Title>

      <InputWrapper>
        <Input type="text" />
        <Button>Criar tarefa</Button>
      </InputWrapper>

      <StatusWrapper>
        <StatusTask>
          <StatusText>
            Tarefas Realizadas: <span>0</span>
          </StatusText>
        </StatusTask>
        <StatusTask>
          <StatusText>
            Total de Tarefas: <span>3</span>
          </StatusText>
        </StatusTask>
      </StatusWrapper>
      <div className="tasks-wrapper">
        <Tasks>
          <Task>
            <div className="task-title">Task 1</div>
            <TaskButtons>
              <img src=".\src\assets\img\icon-trash.svg" />
              <img src=".\src\assets\img\icon-pencil.svg" />
              <img src=".\src\assets\img\icon-check.svg" />
            </TaskButtons>
          </Task>
          <Task>
            <div className="task-title">Task 2</div>
            <TaskButtons>
              <img src=".\src\assets\img\icon-trash.svg" />
              <img src=".\src\assets\img\icon-pencil.svg" />
              <img src=".\src\assets\img\icon-check.svg" />
            </TaskButtons>
          </Task>
          <Task>
            <div className="task-title">Task 3</div>
            <TaskButtons>
              <img src=".\src\assets\img\icon-trash.svg" />
              <img src=".\src\assets\img\icon-pencil.svg" />
              <img src=".\src\assets\img\icon-check.svg" />
            </TaskButtons>
          </Task>
        </Tasks>
      </div>
    </Container>
  );
}

export default App;
