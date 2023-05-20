import styled from "styled-components";

export const MainContainer = styled.main `
    background: #fff;
    border-radius: 1.5625rem 1.5625rem 0rem 0rem;
    padding: 2rem;

    @media (min-width: 950px) {
        display: grid;
        grid-template-columns: 1fr 1fr;

        max-width: 57.5rem;
        gap: 3rem;
        margin-inline: auto;
        padding: 3rem;
        border-radius: 1.5625rem;
    }
`

export const Label = styled.label `
    color: #5E7A7D;
    line-height: 1.5rem;
    margin-bottom: 0.375rem;
    display: block;
`

export const InputContainer = styled.div `
    background-color: #F3F9FA;
    padding: 0.375rem 1rem;
    display: flex;
    align-items: center;
    border-radius: 0.3125rem;
    input {
        border:none;
        font-size: 1.5rem;
        background: transparent;
        text-align: right;
        width: 100%;
        outline: none;
        color: #00474B;

        &::placeholder {
            color: #9EBBBD;
        }

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
    }
`

export const ContaContainer = styled.div `
    margin-bottom: 2rem;
`

export const ButtonsContainer = styled.div `
    margin-top: 0.625rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    input {
        border: none;
        outline: none;
        font-size: 1.5rem;
        padding: 0.375rem 1rem;
        cursor: pointer;
        border-radius: 0.3125rem;
    }

    input[type="button"] {
        background: #00474B;
        color: #F3F9FA;
    }

    input#custom-tip {
        width: 100%;
        background: #F3F9FA;
        text-align: center;
        color: #00474B;

        &::placeholder {
            color: #54787B;
        }

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
    }

    @media (min-width: 950px)  {
        grid-template-columns: repeat(3, 1fr);
    }
`

export const PorcentagemContainer = styled(ContaContainer)``

export const PessoasContainer = styled(ContaContainer)``

export const ResultadoContainer = styled.div`
    background: #00474B;
    border-radius: 0.9375rem;
    padding: 2rem 1.5rem;

    button {
        width: 100%;
        background: #26C2AE;
        color: #00474B;
        border: none;
        font-size: 1.25rem;
        padding-block: 0.5rem;
        text-transform: uppercase;
        border-radius: 0.3125rem;
    }

    @media (min-width: 950px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

    }
`

export const GorjetaContainer = styled.div `
    display: flex;
    margin-bottom: 1.25rem;
    justify-content: space-between;
    align-items:center;

    p:last-child {
        color: #26C2AE;
        font-size: 2rem;
        line-height: 3rem;
    }
    
    p:first-child {
        color: white;
        line-height: 1.5rem;

        span {
            color: #7F9D9F;
            font-size: 0.75rem;
        }
    }
`

export const TotalContainer = styled(GorjetaContainer)`
    margin-bottom: 2rem;
`

export const GorjetaTotalContainer = styled.div `
    
`