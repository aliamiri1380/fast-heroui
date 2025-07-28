import "@blocknote/core/fonts/inter.css";
import ListItems from '@/components/parts/list_items'
import Circle from '@/components/parts/circle'
import * as Button from "@/components/ui/button"
import * as Select from "@/components/ui/select"
import { defaultBlockSpecs, BlockNoteSchema } from "@blocknote/core";
import { createReactBlockSpec } from "@blocknote/react";



import {
	defaultInlineContentSpecs,
	defaultStyleSpecs,
} from "@blocknote/core";


import {
	SuggestionMenuController,
	useCreateBlockNote,
} from "@blocknote/react";
import { BlockNoteView } from "@blocknote/shadcn";
import { fa } from './blocknote_fa'
// import "@blocknote/mantine/style.css";
import "@blocknote/shadcn/style.css";

import "./style.css";
import { useCallback, useEffect } from "react";
import { Avatar, Checkbox } from "@heroui/react";
function CustomSlashMenu(props) {
	console.log("++",props.items);
	
	const allowed = ["heading", "heading_2", "heading_3", "quote", "numbered_list", "bullet_list", "check_list", "paragraph", "code_block", "table", "image", "video", "audio", {/* "file" */ }]
	return <ListItems wrapperClassName="max-h-[300px]" items={[
		{
			'items': props.items.map((item, index) => (allowed.includes(item.key) ? { 'content': item.title, 'onClick': () => props.onItemClick?.(item) } : '')).filter(Boolean)
		}
	]} />
}


export default function App({ value = "", onChange = () => "", mentionList = [] }) {
	function CustomMentionMenu(props) {
		return <ListItems wrapperClassName="max-h-[300px]" items={[
			{
				'items': mentionList.map(r => <div className="grid grid-cols-[auto_1fr] gap-4">
					<Circle src={r.pic} size="sm" />
					<div>{r.name}</div>
				</div>)
			}
		]} />
	}

	const MyChecklist = createReactBlockSpec(
		{
			type: "my-checklist",
			propSchema: { checked: { default: false } },
			content: "inline",
			isSelectable: true,
		},
		{
			render: ({ block, editor, contentRef }) => (
				<div className="my-checklist">
					<Checkbox
						checked={block.props.checked}
						onChange={(val) => editor.updateBlock(block.id, { props: { checked: val } })}
					/>
					<div ref={contentRef} />
				</div>
			),
		}
	);

	const schema = BlockNoteSchema.create({
		blockSpecs: {
			// Adds all default blocks.
			...defaultBlockSpecs,
			// Adds the Alert block.
			checkListItem: MyChecklist,
		},
		// This is already the default, but you can add more inline content types here.
		inlineContentSpecs: defaultInlineContentSpecs,
		// This is already the default, but you can add more style types here.
		styleSpecs: defaultStyleSpecs,
	});

	// const schema = BlockNoteSchema.create({
	// 	blockSpecs: {
	// 		...defaultBlockSpecs,
	// 		// check_list: MyChecklist,
	// 		// checkListItem: MyChecklist
	// 	},
	// });

	const editor = useCreateBlockNote({
		dictionary: fa,
		schema: schema,
		tables: {
			splitCells: true,
			cellBackgroundColor: true,
			cellTextColor: true,
			headers: true,
		},
	});

	const htmlInputChanged = useCallback(
		async (e) => {
			// Whenever the current HTML content changes, converts it to an array of
			// Block objects and replaces the editor's content with them.
			const blocks = await editor.tryParseHTMLToBlocks(e.target.value);
			editor.replaceBlocks(editor.document, blocks);
		},
		[editor],
	);
	// For initialization; on mount, convert the initial HTML to blocks and replace the default editor's content
	useEffect(() => {
		async function loadInitialHTML() {
			const blocks = await editor.tryParseHTMLToBlocks(value);
			editor.replaceBlocks(editor.document, blocks);
		}
		loadInitialHTML();
	}, [editor]);

	const _onChange = async () => {
		const html = await editor.blocksToHTMLLossy(editor.document);
		onChange(html);
	};
	useEffect(() => {
		_onChange();
	}, []);

	return (
		<div dir="rtl">
			<BlockNoteView theme="light" dir="rtl" onChange={_onChange} editor={editor} slashMenu={false} shadCNComponents={{
				Select,
				// Button,
			}}  >
				<SuggestionMenuController
					triggerCharacter={"/"}
					suggestionMenuComponent={CustomSlashMenu}
				/>
				<SuggestionMenuController
					triggerCharacter={"@"}
					suggestionMenuComponent={CustomSlashMenu}
				/>
			</BlockNoteView>

		</div>
	);
}
