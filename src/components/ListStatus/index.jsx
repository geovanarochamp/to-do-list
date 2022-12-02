import * as S from "./style";

export function ListStatus() {
    return (
        <S.StatusWrapper>
            <S.StatusTask>
                <S.StatusText>
                Tarefas Realizadas: <span>0</span>
                </S.StatusText>
            </S.StatusTask>
            <S.StatusTask>
                <S.StatusText>
                Total de Tarefas: <span>3</span>
                </S.StatusText>
            </S.StatusTask>
        </S.StatusWrapper>  
    )
}