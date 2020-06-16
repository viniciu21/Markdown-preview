import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
    body{
    }
    html,body{
        background: linear-gradient(to bottom, #41295a, #2f0743); 
        width: 100vw;
        height: 100vh;
    }
    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
`

export default Global;