import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    gap: 1rem;

    justify-content: center;

    width: 100%;


    margin-top: 4rem;
    margin-bottom: 4rem;

    .container_image {
        /* background-color: aqua; */
        width: 500px;

        border-radius: 6px;
        
        border: 1px solid #F5F5F5;
        box-shadow: 0 0 7px #F5F5F5;

        padding: 1rem;
        box-sizing: border-box;
    }

    .container_image {
        width: 500px;
        
        background-image: url("https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D");
        background-size: cover;
        background-position: center;
        position: relative;

        border-radius: 6px;
        
        border: 1px solid #F5F5F5;
        box-shadow: 0 0 7px #F5F5F5;

        padding: 1rem;
        box-sizing: border-box;

        overflow: hidden;
       
    }

    .container_image::before {
        content: "";
        position: absolute;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.61);
    }

    .container_product_principal {
        width: 100%;

        display: flex;
        flex-direction: column;

        gap: 1rem;

    }


    .container_header {
        display: flex;
        align-items: center;

        justify-content: space-between;

        a {
            color: ${({ theme }) => theme.text_secondary};
            font-size: 16px;
            font-weight: 600;
        }
    }

    .container_product {
        display: flex;
        align-items: center;

        flex-wrap: wrap;

        gap: 1rem;

        /* justify-content: space-between; */
    }

`;
