import * as S from "./style";

export function TasksList({ data, setList, setTask, setEditedTask }) {   
  
  function handleClickCompleteTask(id) {
    const newList = data.map( (task) => (
      task.idTask === id ? {...task, taskCompleted: !task.taskCompleted } : task
    ))

    setList(newList)
  }

  function handleClickDeleteTask(id) {
    const newList = data.filter( (task) => ( task.idTask !== id ))

    setList(newList)
  }

  function handleClickEditTask(id){
    const editTask = data.filter( (task) => ( task.idTask === id ))
    setTask(editTask[0].descriptionTask)
    setEditedTask({id: editTask[0].idTask, task: editTask[0].descriptionTask, completed: editTask[0].taskCompleted})
  }

  return (         
    <>
      {data.length > 0 ? (
        <S.TasksList>
          { data.map( (task) => { 
            const statusIcon = task.taskCompleted ? ".\\src\\assets\\img\\icon-uncheck.svg" : ".\\src\\assets\\img\\icon-check.svg"      
            
            return (
              <S.Task key={task.idTask} isCompleted = {task.taskCompleted}>
                <div className="task-title"> {task.descriptionTask} </div>
                <S.TaskButtons>
                  <img src=".\src\assets\img\icon-trash.svg" onClick={() => handleClickDeleteTask(task.idTask)}/>
                  <img src=".\src\assets\img\icon-pencil.svg" onClick={() => handleClickEditTask(task.idTask)} />
                  <img src={statusIcon} onClick={() => handleClickCompleteTask(task.idTask)}/>
                </S.TaskButtons>
              </S.Task>
          )})}       

        </S.TasksList>
      ): (
        <S.InfoText>
          <h3>Não há tarefas cadastradas.</h3>
        </S.InfoText>
      )}
    </>
  )
}