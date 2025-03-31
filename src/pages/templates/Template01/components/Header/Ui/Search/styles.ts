import styled from "styled-components";

export const ContainerSearch = styled.div`
  display: flex;
  flex-direction: column; /* Este flex-direction pode ser removido ou ajustado */
  position: relative;

  .container_search {
    display: flex;
    align-items: center;

    /* Os inputs e botões ficam lado a lado por padrão */
    @media (max-width: 842px) {
      width: 100%; /* Ajuste o tamanho no mobile */
    }

    input {
      padding: 12px 16px;
      outline: 0;
      border: 1px solid #ccc;
      border-radius: 4px 0 0 4px;
      min-width: 450px;

      font-size: 14px;

      @media (max-width: 1190px) {
        min-width: 300px;
      }

      @media (max-width: 842px) {
        width: 100%;
        padding: 6px 12px;
      }
    }

    button {
      padding: 12px 16px;
      outline: 0;

      border-radius: 0 4px 4px 0;
      cursor: pointer;

      background-color: ${({ theme }) => theme.secondary};
      border: 1px solid #ccc;
      font-weight: 400;

      font-weight: 400px;

      font-size: 14px;

      @media (max-width: 842px) {
 
        padding: 6px 12px;
      }
    }
  }

  .container_search_results {
    position: absolute;
    width: 100%;
    top: 43px;
    left: 0;
    max-height: 500px;
    z-index: 9999;
    border: 1px solid #ccc;
    border-radius: 0 0 4px 4px;

  }
`;
