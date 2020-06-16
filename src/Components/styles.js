import styled from 'styled-components';
import 'highlight.js/styles/dracula.css';

export const MarkdownPreviewer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    
`
export const Header = styled.header`
    color: white;
    width: 100vw;
    text-align: right;
`

export const Text = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
`

export const Textarea = styled.textarea`
    flex: 0.4 0.5 0;
    height: 400px;
    margin: 0 auto;
    border-radius: 5px;
    box-shadow: -19px 10px 33px -5px rgba(0,65,41,1);
    padding: 10px;
`

export const TextFormated = styled.div`
    flex: 0.4 0.5 0;
    height: 400px;
    background-color: white;
    margin: auto;
    border-radius: 5px;
    column-gap: 10px;
    outline: none;
    padding: 10px;

    p{
        word-break: break-all;
    }
    overflow: scroll;

`

