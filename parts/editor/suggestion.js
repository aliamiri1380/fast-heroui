// // suggestion.js
// import { ReactRenderer } from '@tiptap/react'
// import tippy from 'tippy.js'
// import CommandsList from './commandsList' // This should be a React component



// export default {
//   items: ({ query }) => {
//     return [
//       {
//         title: 'متن',
//         icon: 'abc',
//         command: ({ editor, range }) =>
//           editor.chain().focus().deleteRange(range).setNode('paragraph').run(),
//       },
//       {
//         title: 'عنوان 1',
//         icon: 'h-1',
//         command: ({ editor, range }) =>
//           editor.chain().focus().deleteRange(range).setNode('heading', { level: 1 }).run(),
//       },
//       {
//         title: 'عنوان 2',
//         icon: 'h-2',
//         command: ({ editor, range }) =>
//           editor.chain().focus().deleteRange(range).setNode('heading', { level: 2 }).run(),
//       },
//       {
//         title: 'عنوان 3',
//         icon: 'h-3',
//         command: ({ editor, range }) =>
//           editor.chain().focus().deleteRange(range).setNode('heading', { level: 3 }).run(),
//       },
//       {
//         title: 'لیست بدون شماره',
//         icon: 'list',
//         command: ({ editor, range }) =>
//           editor.chain().focus().deleteRange(range).toggleBulletList().run(),
//       },
//       {
//         title: 'لیست با شماره',
//         icon: 'list-numbers',
//         command: ({ editor, range }) =>
//           editor.chain().focus().deleteRange(range).toggleOrderedList().run(),
//       },
//       {
//         title: 'چک باکس',
//         icon: 'checkbox',
//         command: ({ editor, range }) => {
//           editor
//             .chain()
//             .deleteRange(range)
//             .insertContent({
//               type: 'taskList',
//               content: [
//                 {
//                   type: 'taskItem',
//                   attrs: { checked: false },
//                   content: [
//                     {
//                       type: 'paragraph',
//                     },
//                   ],
//                 },
//               ],
//             })
//             // Set the focus to the end of the inserted content
//             .focus('end')
//             .run();
//         },
//       },
//       {
//         title: 'نقل قول',
//         icon: 'quote',
//         command: ({ editor, range }) =>
//           editor.chain().focus().deleteRange(range).toggleBlockquote().run(),
//       },
//       {
//         title: 'خط افقی',
//         icon: 'separator',
//         command: ({ editor, range }) =>
//           editor.chain().focus().deleteRange(range).setHorizontalRule().run(),
//       },
//       {
//         title: 'پیوست',
//         icon: 'device-tv-old',
//         command: ({ editor, range }) => {
//           const input = document.createElement('input');
//           input.type = 'file';
//           input.onchange = e => {
//             const file = e.target.files[0];
//             if (file) {
//                 editor.commands.insertFile(file, range);
//             }
//           };
//           input.click();
//         },
//       },
//       {
//         title: 'زیر وظیفه',
//         icon: 'list-tree',
//         command: ({ editor, range }) =>
//           editor.chain().focus().deleteRange(range).insertContent('<p>Subtask:</p>').run(),
//       },
//       {
//         title: 'برچسب',
//         icon: 'tag',
//         command: ({ editor, range }) =>
//           editor.chain().focus().deleteRange(range).insertContent('<span class="tag">#Tag</span>').run(),
//       },
//       {
//         title: 'وظیفه/یادداشت مرتبط',
//         icon: 'notes',
//         command: ({ editor, range }) =>
//           editor.chain().focus().deleteRange(range).insertContent('<a href="#">Linked Task</a>').run(),
//       },
//     ]
//       .filter(item => item.title.toLowerCase().startsWith(query.toLowerCase()))
//       .slice(0, 10)
//   },

//   render: () => {
//     let component
//     let popup

//     return {
//       onStart: props => {
//         component = new ReactRenderer(CommandsList, {
//           props,
//           editor: props.editor,
//         })

//         if (!props.clientRect) {
//           return
//         }

//         popup = tippy('body', {
//           getReferenceClientRect: props.clientRect,
//           appendTo: () => document.body,
//           content: component.element,
//           showOnCreate: true,
//           interactive: true,
//           trigger: 'manual',
//           placement: 'bottom-start',
//         })
//       },

//       onUpdate(props) {
//         component.updateProps(props)

//         if (!props.clientRect) {
//           return
//         }

//         popup[0].setProps({
//           getReferenceClientRect: props.clientRect,
//         })
//       },

//       onKeyDown(props) {
//         if (props.event.key === 'Escape') {
//           popup[0].hide()
//           return true
//         }

//         return component.ref?.onKeyDown?.(props)
//       },

//       onExit() {
//         popup[0].destroy()
//         component.destroy()
//       },
//     }
//   },
// }


// suggestion.js
import { ReactRenderer } from '@tiptap/react'
import tippy from 'tippy.js'
import CommandsList from './commandsList' // This should be a React component

export default function createSuggestion({ char, items }) {
  return {
    char,
    items: ({ query }) => {
      return items
        .filter(item => item.title.toLowerCase().startsWith(query.toLowerCase()))
        .slice(0, 10)
    },
    render: () => {
      let component
      let popup

      return {
        onStart: props => {
          component = new ReactRenderer(CommandsList, {
            props,
            editor: props.editor,
          })

          if (!props.clientRect) {
            return
          }

          popup = tippy('body', {
            getReferenceClientRect: props.clientRect,
            appendTo: () => document.body,
            content: component.element,
            showOnCreate: true,
            interactive: true,
            trigger: 'manual',
            placement: 'bottom-start',
          })
        },

        onUpdate(props) {
          component.updateProps(props)

          if (!props.clientRect) {
            return
          }

          popup[0].setProps({
            getReferenceClientRect: props.clientRect,
          })
        },

        onKeyDown(props) {
          if (props.event.key === 'Escape') {
            popup[0].hide()
            return true
          }

          return component.ref?.onKeyDown?.(props)
        },

        onExit() {
          popup[0].destroy()
          component.destroy()
        },
      }
    },
  }
}