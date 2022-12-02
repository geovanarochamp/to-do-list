import styled from "styled-components"

export const Container = styled.div`
    width: 60vw;
    text-align: center;

    @media (max-width: 1120px) {
        width: 90vw;
    }
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

    border: 1px solid #ededed;
    border-radius: 8px 0px 0px 8px;
    
    background: #FFFFFF;
    outline: none;

    font-size: 16px;
    text-transform: uppercase;

    filter: drop-shadow(0px 10px 20px #F0F0F0);

    @media (max-width: 745px) {
        width: 70%;
        font-size: 16px;
    }
`

export const Button = styled.button`
    width: 20%;
    height: 50px;
    padding: 10px 16px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: linear-gradient(82.87deg, #07FDFD -2.81%, #4D69FE 43.36%, #CC00FF 95.68%);
    border-radius: 0px 8px 8px 0px;
    outline: none;
    border: none;

    color: #fff;
    font-weight: 400;
    font-size: 20px;

    cursor: pointer;

    @media (max-width: 745px) {
        width: 30%;
        font-size: 16px;
    }
`

export const InputWrapper = styled.div`
    margin: 20px 0;
    display: flex;
    align-items: center;
`