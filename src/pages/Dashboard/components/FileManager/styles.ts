import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: column;

    .container_header {
        /* background-color: aqua; */
        height: 40px;

        display: flex;
        align-items: center;
        justify-content: space-between;

        border-bottom: 1px solid #ccc;

        h4 {
            font-size: 1.2rem;
        }
    }

    .actions {

        /* background-color: aqua; */

        width: 20%;
        display: flex;
        justify-content: end;

        padding-bottom: 1rem;

        span {
            width: 40px;
            height: 40px;
            /* background-color: aqua; */

            cursor: pointer;
            
            border-radius: 4px;
            border: 1px solid #ccc;

            display: flex;
            align-items: center;
            justify-content: center;

            svg {
                font-size: 1.8rem;
                background-color: transparent;

                color: #bd9834;
            }
        }
    }

    .container_file_manager {
        display: flex;
        align-items: start;

        gap: .8rem;

        padding-top: 1rem;

        /* height: 100%; */
    }

    .header_file_manager {

        width: 180px;

        display: flex;
        flex-direction: column;

        /* gap: .6rem; */

        p {
            font-size: 14px;
            font-weight: 400;
            color: #333;

            cursor: pointer;

            padding: .8rem 0;

            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;

            &:hover {
                background-color: #f4f4f4;
            }
        }
        
    }

    .folder_list {
        display: flex;
        align-items: center;
        gap: .6rem;

        position: relative;
    }

    .info {
        display: flex;
        align-items: center;

        gap: .6rem;
    }

    .card_media {

        cursor: pointer;

        height: 100px;
        width: 100px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;

        p {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;

            width: 80px;

            text-align: center;
        }

        svg {
            font-size: 4.8rem;
            background-color: transparent;
        }
    }

    .container_loading {
        /* background-color: #bd9834; */
        width: 100%;

        position: absolute;
        
        left: 0;
        top: 0;
        width: 1180px;

        height: 560px;

        display: flex;
        align-items: center;
        justify-content: center;
    }
`;