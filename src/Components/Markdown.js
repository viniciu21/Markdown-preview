import React, {useState} from 'react';
import * as S from './styles';
import marked from 'marked';
import {saveAs} from 'file-saver';

import('highlight.js').then((hljs) => {
    marked.setOptions({
      highlight: (code, lang) => {
        if (lang && hljs.getLanguage(lang)) {
          return hljs.highlight(lang, code).value
        }
        return hljs.highlightAuto(code).value
      }
    })
})

const Markdown = () => {

    const [text, setText] = useState('');

    const [textHtml, setTextHtml] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
        setTextHtml(e.target.value);

    }

    const handleSave = () => {
        const nameOfFile = prompt('nome do arquivo');
        const blob = new Blob([text], {type: "text/plain;charset=utf-8"});
        saveAs(blob, `${nameOfFile || "README"}.md`)
    }
    const handleEnter = (e) => {
        if(e.key === "Enter"){
            const divText = `${text}\n`;
            setTextHtml(divText);
        }
    }

    return(
        <S.MarkdownPreviewer>
            <S.Header>Markdown Previewer</S.Header>
            <S.Text>
                <S.Textarea 
                    value={textHtml} 
                    onChange={(e) => handleChange(e)} 
                    onKeyPress={(e) => handleEnter(e)}
                />
                <S.TextFormated dangerouslySetInnerHTML={{ __html: marked(textHtml)}}/>
            </S.Text>
            <S.ButtonSave onClick={() => handleSave()}>Save as ...</S.ButtonSave>
        </S.MarkdownPreviewer>
    )
}

export default Markdown;