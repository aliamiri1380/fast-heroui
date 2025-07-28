import React, { useState, useRef } from 'react';
import FroalaEditorComponent from 'react-froala-wysiwyg';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import { createPopper } from '@popperjs/core';
import { toInnerText } from '../utils';

const App = () => {
  const [content, setContent] = useState('');
  const [showMenu, setShowMenu] = useState(false);
  const editorRef = useRef(null);
  const menuRef = useRef(null);

  // Froala configuration
  const config = {
    direction: 'rtl', // Enable RTL for Farsi
    language: 'fa', // Set language to Persian (Farsi)
    placeholderText: 'متن خود را اینجا وارد کنید', // Placeholder in Farsi
    toolbarButtons: ['bold', 'italic'], // Basic toolbar
    events: {
      'contentChanged': function (editor) {
        const text = toInnerText(this.html.get());
        console.log('-',text);
        
        if (text.endsWith('/')) {
          setShowMenu(true);
          // Position the popup
          const range = this.selection.getRangeAt(0);
          const rect = range.getBoundingClientRect();
          if (menuRef.current) {
            createPopper(range, menuRef.current, {
              placement: 'bottom-start',
            });
          }
        } else {
          setShowMenu(false);
        }
      },
      'froalaEditor.initialized': function (editor) {
        editorRef.current = this; // Store editor instance
      },
    },
  };

  // Slash command menu component
  const SlashMenu = () => (
    <div
      ref={menuRef}
      style={{
        display: showMenu ? 'block' : 'none',
        background: 'white',
        border: '1px solid #ccc',
        padding: '10px',
        zIndex: 1000,
        direction: 'rtl',
      }}
    >
      <button onClick={() => {
        editorRef.current.html.insert('<h1>سرتیتر</h1>');
        setShowMenu(false);
      }}>سرتیتر</button>
      <button onClick={() => {
        editorRef.current.html.insert('<p>پاراگراف</p>');
        setShowMenu(false);
      }}>پاراگراف</button>
      <button onClick={() => {
        editorRef.current.html.insert('<ul><li>مورد</li></ul>');
        setShowMenu(false);
      }}>لیست</button>
    </div>
  );

  return (
    <div style={{ padding: '20px' }}>
      <FroalaEditorComponent
        tag="textarea"
        config={config}
        model={content}
        onModelChange={setContent}
      />
      <SlashMenu />
    </div>
  );
};

export default App;