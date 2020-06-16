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

    const [text, setText] = useState('')

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleSave = () => {
        const blob = new Blob([text], {type: "text/plain;charset=utf-8"});
        saveAs(blob, "README.md")
    }
    return(
        <S.MarkdownPreviewer>
            <S.Header>QUaluqer coisa</S.Header>
            <button onClick={() => handleSave()}>lala</button>
            <S.Text>
                <S.Textarea value={text} onChange={(e) => handleChange(e)}/>
                <S.TextFormated dangerouslySetInnerHTML={{ __html: marked(text)}}/>
            </S.Text>
        </S.MarkdownPreviewer>
    )
}

export default Markdown;