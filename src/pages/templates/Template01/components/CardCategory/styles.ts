import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: column;

    gap: .6rem;

    padding-top: 2rem;

    .container_card {
        display: flex;
        align-items: center;
        justify-content: center;

        flex-wrap: wrap;

        gap: .4rem;
    }

    .card {
    background-color: ${({ theme }) => theme.secondary};
    padding: 0.8rem 1rem;
    border-radius: 4px;
    position: relative;
    cursor: pointer;
    transition: 0.2s;
    z-index: 1;
    overflow: hidden; /* Garante que o efeito do ::before fique dentro do card */

    &::before {
        content: '';
        background-color: ${({ theme }) => theme.text_secondary};
        width: 0;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        border-radius: 4px;
        transition: width 0.3s ease-in-out; /* Adicionando transição suave */
        z-index: 1;

        
    }

    &:hover::before {
        width: 100%;
    }

    p {
        font-size: 16px;
        font-weight: 400; /* Corrigido */
        color: ${({ theme }) => theme.text_primary};
        position: relative; /* Mantém sobre o efeito do ::before */
        z-index: 2; /* Garante que o texto fique visível */
    }
}

.content {
    padding-top: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    flex-wrap: wrap;

    text-align: start;
}

`;