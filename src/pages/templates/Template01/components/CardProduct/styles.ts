import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`

    display: flex;
    flex-direction: column;

    /* gap: .8rem; */
    padding: .6rem;
    border: 1px solid ${({ theme }) => theme.secondary};

    box-shadow: 0 0 7px  ${({ theme }) => theme.secondary};

    height: 330px;
    width: 250px;

    border-radius: 4px;

    .media {

        width: 100%;
        height: 180px;
        

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .content {
        /* background-color: aqua; */

        height: 100%;

        display: flex;
        flex-direction: column;

        justify-content: space-between;

        span {
            color: ${({ theme }) => theme.accent};
            font-size: 16px;
            font-weight: bold;
            width: 100%;
        }

        p {
            color: ${({ theme }) => theme.text_secondary};
            font-size: 14px;
            font-weight: 400;

            width: 100%;
        }

        h4 {
            color: ${({ theme }) => theme.text_secondary};
            font-size: 20px;
            font-weight: bold;
            width: 100%;
        }
    }

`;