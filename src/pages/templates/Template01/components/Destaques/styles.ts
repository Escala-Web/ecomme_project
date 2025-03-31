import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    /* height: 600px; */

    background-color: ${({ theme }) => theme.secondary};

    padding: 2rem 1rem;

    .container_images {
        padding-top: 2rem;

        display: flex;
        align-items: center;

        justify-content: space-between;
        box-sizing: border-box;
    }

    .image {
        /* background-color: aqua; */

        width: 33%;
        height: 300px;

        border-radius: 8px;

        /* padding: 1rem; */

        box-shadow: 0 0 3px ${({ theme }) => theme.text_secondary};

        overflow: hidden;
        transition: .2s;

         
        background-image: url("https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D");
        background-size: cover;
        background-position: center;
        position: relative;

        &::before {
            content: "";
            position: absolute;
            inset: 0;
            background-color: rgba(0, 0, 0, 0.26);
            
        }
        
    }

    .content {
        background-image: ${({ theme }) => `linear-gradient(to bottom, rgba(0, 0, 0, 0.03), ${theme.accent})`};



        padding: 1rem;
        position: absolute;
        bottom: 0;
        width: 100%;

        display: flex;
        flex-direction: column;
        
        gap: 1rem;

        a {
            background-color: ${({ theme }) => theme.secondary};
            color: ${({ theme }) => theme.accent};
            font-weight: 600;
            border-radius: 10px;
            padding: .6rem 1rem;
            width: 40%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    .name_product {
        font-size: 16px;
        font-weight: 600;
        color: ${({ theme }) => theme.text_third};
    }

    .price {
        font-size: 26px;
        font-weight: 600;
        color: ${({ theme }) => theme.text_third};
    }

`;