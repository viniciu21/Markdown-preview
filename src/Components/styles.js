import styled from 'styled-components';

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
    width: 100%;
    height: 100%;
`

export const Textarea = styled.textarea`
    flex: 0.4 0.5 0;
    height: 400px;
    margin: auto;
    border-radius: 5px;
    box-shadow: -19px 10px 33px -5px rgba(0,65,41,1);
`

const TextFormated = styled.div`
    flex: 0.4 0.5 0;
    height: 400px;
    background-color: white;
    margin: auto;
    border-radius: 5px;
    column-gap: 10px;
    outline: none;
    p{
        word-break: break-all;
    }

`

