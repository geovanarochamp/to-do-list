import styled from "styled-components"

export const StatusWrapper = styled.div`
    display: flex;
    gap: 20px;
    margin-bottom: 12px;

    @media (max-width: 450px) {
        flex-direction: column;
    }
`

export const StatusTask = styled.div`
    width: 100%;
    height: 40px;

    padding: 10px 16px;

    background: #FFFFFF;
    border: 1px solid #D9D9D9;
    border-radius: 4px;
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