// import data from '@emoji-mart/data'
// import Picker from '@emoji-mart/react'
// import { useEffect, useRef } from 'react';
// // import '@emoji-mart/react/dist/styles.css';


// export default ({onSelect=()=>""}) => {
//     const pickerRef = useRef();

//     useEffect(() => {
//         const root = pickerRef.current;
//         if (root) {

//             const pickerEl = root.querySelector('em-emoji-picker');
//             const shadow = pickerEl?.shadowRoot;
//             console.log(shadow);
//             if (shadow) {
//                 const style = document.createElement('style');
//                 console.log(style);
//                 style.textContent = `
//                     *:not([style*="EmojiMart"]):not([data-emoji-set]) {
//                     font-family: 'mikhak', sans-serif !important;
//                     }
//                     .emoji-mart-emoji:has([style*="EmojiMart"]){
//                         height: 0
//                     }
//                     .search input[type="search"]{border: 1px solid transparent !important}
//                     .search input[type="search"]:focus{border: 1px solid #ccc !important; box-shadow: none !important}
//                 `;
//                 shadow.prepend(style);
//             }
//         }
//     }, []);
//     return (
//         <div ref={pickerRef} className='emoji-picker w-max'>
//             <Picker data={data} locale={'fa'} previewPosition={'none'} onEmojiSelect={onSelect} />
//         </div>
//     )
// }



"use client";

import { EmojiPicker } from "frimousse";

export default function MyEmojiPicker() {
    return (
        <EmojiPicker.Root className="isolate flex h-[368px] w-fit flex-col bg-white dark:bg-neutral-900">
            <EmojiPicker.Search className="z-10 mx-2 mt-2 appearance-none rounded-md bg-neutral-100 px-2.5 py-2 text-sm dark:bg-neutral-800" />
            <EmojiPicker.Viewport className="relative flex-1 outline-hidden">
                <EmojiPicker.Loading className="absolute inset-0 flex items-center justify-center text-neutral-400 text-sm dark:text-neutral-500">
                    Loading…
                </EmojiPicker.Loading>
                <EmojiPicker.Empty className="absolute inset-0 flex items-center justify-center text-neutral-400 text-sm dark:text-neutral-500">
                    No emoji found.
                </EmojiPicker.Empty>
                <EmojiPicker.List
                    className="select-none pb-1.5"
                    components={{
                        CategoryHeader: ({ category, ...props }) => (
                            <div
                                className="bg-white px-3 pt-3 pb-1.5 font-medium text-neutral-600 text-xs dark:bg-neutral-900 dark:text-neutral-400"
                                {...props}
                            >
                                {category.label}
                            </div>
                        ),
                        Row: ({ children, ...props }) => (
                            <div className="scroll-my-1.5 px-1.5" {...props}>
                                {children}
                            </div>
                        ),
                        Emoji: ({ emoji, ...props }) => (
                            <button
                                className="flex size-8 items-center justify-center rounded-md text-lg data-[active]:bg-neutral-100 dark:data-[active]:bg-neutral-800"
                                {...props}
                            >
                                {emoji.emoji}
                            </button>
                        ),
                    }}
                />
            </EmojiPicker.Viewport>
        </EmojiPicker.Root>
    );
}