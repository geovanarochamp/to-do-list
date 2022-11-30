import styled from "styled-components"

export const Container = styled.div`
    width: 60vw;
    text-align: center;
`;

export const Title = styled.h1`
    font-weight: 900;
    font-size: 40px;
    text-transform: uppercase;

    background: linear-gradient(270.16deg, #CC00FF -2.84%, #5756FF 33.42%, #07FDFD 99.91%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
`

export const Input = styled.input`
    width: 80%;
    height: 50px;
    padding: 16px 20px;
    border-radius: 10px 0px 0px 10px;
    
    background: #FFFFFF;
    outline: none;
    border: none;

    filter: drop-shadow(0px 10px 20px #F0F0F0);
`

export const Button = styled.button`
    width: 20%;
    height: 50px;
    padding: 10px 16px;

    background: linear-gradient(82.87deg, #07FDFD -2.81%, #4D69FE 43.36%, #CC00FF 95.68%);
    border-radius: 0px 10px 10px 0px;
    outline: none;
    border: none;

    color: #fff;
    font-weight: 400;
    font-size: 20px;

    cursor: pointer;
`

export const InputWrapper = styled.div`
    margin: 20px 0;
    display: flex;
    align-items: center;
`

export const StatusWrapper = styled.div`
    display: flex;
    gap: 20px;
    margin-bottom: 12px;
`

export const StatusTask = styled.div`
    width: 100%;
    height: 40px;

    padding: 10px 16px;

    background: #FFFFFF;
    border: 1px solid #D9D9D9;
    box-shadow: 0px 10px 20px rgba(240, 240, 240, 0.25);
`

export const StatusText = styled.h3`
    font-weight: 600;
    font-size: 16px;

    background: linear-gradient(270.16deg, #CC00FF -2.84%, #5756FF 33.42%, #07FDFD 99.91%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
`

export const Tasks = styled.ul`
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
    font-size: 20px;
    background: #FFFFFF;
    box-shadow: 0px 10px 20px rgba(240, 240, 240, 0.25);  
`

export const TaskButtons = styled.div`
    display: flex;
    gap: 10px;
`