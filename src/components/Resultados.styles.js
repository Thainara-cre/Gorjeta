import styled from "styled-components";

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