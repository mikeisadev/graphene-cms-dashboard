import { useQuill } from 'react-quilljs';
import 'react-quill/dist/quill.snow.css';
import { useEffect, useState, useRef } from 'react';
import { QuillEditorProps } from '../../@types';

export default function QuillEditor(props: QuillEditorProps) {
    const counterRef = useRef<HTMLDivElement>(null)
    const { quill, quillRef, Quill } = useQuill({ modules: { counter: true } });

    if (Quill && !quill) {
        Quill.register('modules/counter', function(quill:any, options:any) {
          quill.on('text-change', function() {
            console.log(quill.getText())
            const text = quill.getText();

            counterRef.current!.innerText = text.split(/\s+/).length;
          });
        });
      }

    useEffect(() => {
        if (quill) {
          quill.on('text-change', (delta, oldDelta, source) => {
            props.setValue(quillRef.current.firstChild.innerHTML)
          });
        }
      }, [quill]);

    // useEffect(() => {
    //     console.log(value)
    // }, [value])
  
    return (
      <div className='quill-editor'>
        <div ref={quillRef} ></div>
        <div ref={counterRef} ></div>
      </div>
    );
}