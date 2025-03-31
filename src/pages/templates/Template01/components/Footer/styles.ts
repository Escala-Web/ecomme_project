import styled from "styled-components";

export const ContainerFooter = styled.div`

    background-color: ${({ theme }) => theme.primary};
    height: 368px;

    padding-top: 60px;
    .container_footer {
        margin: 0 auto;
        max-width: 1440px;
        height: 100%;
        /* background-color: aqua; */
    }

    .container_footer {
        display: flex;
        justify-content: space-between;

        padding-bottom: 2rem;
        border-bottom: 1px solid ${({ theme }) => theme.text_third};
    }

    .footer_content {
        /* background-color: aquamarine; */
        width: 300px;
        color: ${({ theme }) => theme.text_third};

        font-weight: 600;

    }

    .about {
        width: 350px;
        /* background-color: aquamarine; */
    }

`;