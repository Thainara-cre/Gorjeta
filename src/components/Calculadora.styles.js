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

    &:has(input:focus),
    &:has(input:hover) {
        outline: 2px solid #26C2AE;
    }

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

        &:hover {
            background-color:  #9FE8DF;
        }
    }

    input[type="button"].selected {
        background: #26C2AE;
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

            
        &:focus,
        &:hover {
            outline: 2px solid #26C2AE;
        }
    }

    @media (min-width: 950px)  {
        grid-template-columns: repeat(3, 1fr);
    }
`

export const PorcentagemContainer = styled(ContaContainer)``

export const PessoasContainer = styled(ContaContainer)``

