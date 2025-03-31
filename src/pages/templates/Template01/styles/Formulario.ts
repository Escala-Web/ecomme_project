import styled from "styled-components";

export const Formulario = styled.form`

    margin: 2rem 0;

    .form_block {
        display: flex;
        flex-direction: column;
    }

    .mt {
        margin-top: 2rem;
    }

    label {
        font-size: 14px;
        width: 100%;
        font-weight: 400;

        color: ${({ theme }) => theme.text_secondary};

        padding-bottom: 6px;
        
    }

    input {
        width: 100%;
        background-color: ${({ theme }) => theme.secondary};

        border: 1px solid ${({ theme }) => theme.text_third};
        padding: .8rem 1rem;

        border-radius: 8px;

        outline: 0;

        &:focus {
            border: 1px solid ${({ theme }) => theme.accent};
            opacity: .7;
        }

    }

    .form_flex {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .button {
        /* background-color: aqua; */
        padding: .8rem 1rem;
        font-size: 16px;
        font-weight: 600;
    }

    .contain {
        background-color: ${({ theme }) => theme.accent};
        color: ${({ theme }) => theme.secondary};
        padding: .8rem 2rem;

        border-radius: 6px;
    }

    .no_contain {
        background-color: transparent;
        color: ${({ theme }) => theme.accent};

        padding: .8rem .4rem;
    }



`;