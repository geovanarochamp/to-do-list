import { useState } from "react";
import * as S from "./style";

export function ListStatus({ data }) {

    return (
        <S.StatusWrapper>
            <S.StatusTask>
                <S.StatusText>
                Tarefas Concluidas: <span>{data.filter( (task) => ( task.taskCompleted )).length}</span>
                </S.StatusText>
            </S.StatusTask>
            <S.StatusTask>
                <S.StatusText>
                Total de Tarefas: <span>{data.length}</span>
                </S.StatusText>
            </S.StatusTask>
        </S.StatusWrapper>  
    )
}