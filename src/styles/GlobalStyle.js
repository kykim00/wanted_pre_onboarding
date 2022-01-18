import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};
    body{
        padding: 0;
        margin: 0;
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 14px;
        line-height: 1.42857143;
    };
    button{
        display: flex;
        cursor: pointer;
        outline: none;
        border-radius: 50%;
        border: none;
        position: relative;
        width: 28px;
        height: 28px;
        background: transparent;
        padding: 0;
    };
    input{
        display: flex;
        outline: none;
        padding-left: 10px;
    }
    a {
      color: black;
      text-decoration: none;
    }
`;

export default GlobalStyle;
