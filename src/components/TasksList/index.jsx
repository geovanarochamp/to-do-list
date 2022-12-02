import * as S from "./style";

export function TasksList({ data, setList, setTask, setEditedTask }) {   
  
  function handleClickCompleteTask(id) {
    const newList = data.map( (task, index) => (
      index === id ? {...task, taskCompleted: !task.taskCompleted } : task
    ))

    setList(newList)
  }

  function handleClickDeleteTask(id) {
    const newList = data.filter( (task, index) => ( index !== id ))

    setList(newList)
  }

  function handleClickEditTask(id){
    const editTask = data.filter( (task, index) => ( index === id ))
    setTask(editTask[0].descriptionTask)
    setEditedTask(editTask[0].descriptionTask)
  }

  return (         
    <div className="tasks-wrapper">
      <S.TasksList>
        { data.map( (task, index) => { 
          const statusIcon = task.taskCompleted ? ".\\src\\assets\\img\\icon-uncheck.svg" : ".\\src\\assets\\img\\icon-check.svg"      
          
          return (
            <S.Task key={index} isCompleted = {task.taskCompleted}>
              <div className="task-title"> {task.descriptionTask} </div>
              <S.TaskButtons>
                <img src=".\src\assets\img\icon-trash.svg" onClick={() => handleClickDeleteTask(index)}/>
                <img src=".\src\assets\img\icon-pencil.svg" onClick={() => handleClickEditTask(index)} />
                <img src={statusIcon} onClick={() => handleClickCompleteTask(index)}/>
              </S.TaskButtons>
            </S.Task>
        )})}       

      </S.TasksList>
    </div>
  )
}