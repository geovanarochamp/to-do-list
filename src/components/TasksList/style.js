import styled from "styled-components"

export const TasksList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 12px;
`

export const Task = styled.li`
    list-style: none;

    width: 100%;
    height: 60px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 16px;
   
    color: #5A5A5A;
    font-weight: 400;
    font-size: 16px;
    text-transform: uppercase;

    background: ${props => props.isCompleted ? "#ebfff4" : "#FFF" };
    border: 1px solid;
    border-color: ${props => props.isCompleted ? "#c1e7b7" : "#ededed" };;
    border-radius: 8px;
    box-shadow: 0px 10px 20px rgba(240, 240, 240, 0.25);  
`

export const TaskButtons = styled.div`
    display: flex;
    gap: 10px;
    cursor: pointer;
`

export const InfoText = styled.div`
    margin-top: 50px;

    h3 {
        font-weight: 400;    
        color: #5A5A5A;
    }
`