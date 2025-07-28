import Button from './button'
import { Button as Button2, Kbd } from "@heroui/react";
import React, { useState } from "react";
import { Editor, RichUtils, Modifier, getDefaultKeyBinding } from "draft-js";
import "draft-js/dist/Draft.css"

import createToolbarPlugin from '@draft-js-plugins/static-toolbar';
import { ItalicButton, BoldButton, UnderlineButton, UnorderedListButton, OrderedListButton, BlockquoteButton } from '@draft-js-plugins/buttons';
import 'draft-js/dist/Draft.css'
import { convertFromHTML, convertToRaw, EditorState, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { onAddLink } from './editor_link';
import { Badge, Tooltip } from "@heroui/react";


const toolbarPlugin = createToolbarPlugin();
const { Toolbar } = toolbarPlugin;
const plugins = [toolbarPlugin];
var text = '';

export default function TextEditor(props) {
	const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

	const handleEditorChange = (newState) => {
		setEditorState(newState);
	};

	// function handleKeyCommand(command, editorState) {
	// 	if (['underline', 'italic', 'bold'].includes(command)){
	// 		const newState = RichUtils.handleKeyCommand(editorState, command);
	
	// 		if (newState) {
	// 			handleEditorChange(newState);
	// 			return 'handled';
	// 		}
	// 	}
		

	// 	return 'not-handled';
	// }

	const handleKeyCommand = (command, editorState) => {
        if (command.startsWith('custom-inline-')) {
            const symbol = command.split('-')[2]; // Extract symbol, e.g., "b" for "*"
            const selection = editorState.getSelection();
            const contentState = editorState.getCurrentContent();
            const selectedText = contentState.getBlockForKey(selection.getStartKey())
                .getText()
                .slice(selection.getStartOffset(), selection.getEndOffset());

            // Add the custom inline symbol around the selected text
            const newContentState = Modifier.replaceText(
                contentState,
                selection,
                `${symbol}${symbol}${selectedText}${symbol}${symbol}`
            );

            setEditorState(EditorState.push(editorState, newContentState, 'insert-characters'));
            return 'handled';
        }

        return 'not-handled';
    };

    // Custom key bindings for inline commands
    const keyBindingFn = (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'b') return 'custom-inline-*'; // Ctrl+B -> Asterisks
        if ((e.ctrlKey || e.metaKey) && e.key === 'i') return 'custom-inline-_'; // Ctrl+I -> Underscores
        if ((e.ctrlKey || e.metaKey) && e.key === 'u') return 'custom-inline-~'; // Ctrl+U -> Tildes
        return getDefaultKeyBinding(e); // Default key bindings
    };

	return (
		<div className='editor-wrapper border-1 border-slate-300 dark:border-slate-800 rounded-xl'>
			<Toolbar>
				{
					(externalProps) => (
						<div className='editor-toolbar-wrapper flex gap-1'>
							{props.bold && <Tooltip content={"CTRL B"}><Button2 dir="ltr" variant="light" isIconOnly onClick={(e) => {e.preventDefault();handleKeyCommand('bold', editorState)}}><i className='ti ti-bold'></i></Button2></Tooltip>}
							{props.italic && <Tooltip content="CTRL I"><Button2 dir="ltr" variant="light" isIconOnly onClick={(e) => {e.preventDefault();handleKeyCommand('italic', editorState)}}><i className='ti ti-italic'></i></Button2></Tooltip>}
							{props.underline && <Tooltip content="CTRL U"><Button2 dir="ltr" variant="light" isIconOnly onClick={(e) => {e.preventDefault();handleKeyCommand('underline', editorState)}}><i className='ti ti-underline'></i></Button2></Tooltip>}
							{props.list && <Tooltip><Button2 dir="ltr" variant="light" isIconOnly><i className='ti ti-list'></i><UnorderedListButton {...externalProps} /></Button2></Tooltip>}
							{props.ol && <Button2 isIconOnly><i className="ti ti-list-ol"></i><OrderedListButton {...externalProps} /></Button2>}
							{/* <Button2 isIconOnly><i className='ti ti-quote-right'></i><BlockquoteButton {...externalProps} /></Button2> */}
							{props.link && <Button2 dir="ltr" variant="light" isIconOnly onClick={() => onAddLink(editorState, setEditorState)}><i className='ti ti-link'></i></Button2>}
						</div>
					)
				}
			</Toolbar>
			<div>
				<Editor onBlur={() => {props.onBlur(draftToHtml(convertToRaw(editorState.getCurrentContent())))}}
					handleKeyCommand={handleKeyCommand}
					keyBindingFn={keyBindingFn}
					// handleKeyCommand={handleKeyCommand}
					editorState={editorState} onChange={handleEditorChange} placeholder={props.placeholder ?? 'بنویسید ...'} plugins={plugins} />
			</div>
		</div>
	);
}
