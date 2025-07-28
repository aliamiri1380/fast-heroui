import { Extension } from '@tiptap/core'
import Suggestion from '@tiptap/suggestion'

export const Commands = () => Extension.create({
  name: 'suggestion1',

  addOptions() {
    return {
      suggestion: {
        char: '/',
        pluginKey: `suggestion1`,
        command: ({ editor, range, props }) => {
          props.command({ editor, range })
        },
      },
    }
  },

  addProseMirrorPlugins() {
    return [
      Suggestion({
        editor: this.editor,
        ...this.options.suggestion,
        pluginKey: `suggestion1`,
      }),
    ]
  },
})

export const Commands2 = () => Extension.create({
  name: 'suggestion2',

  addOptions() {
    return {
      suggestion: {
        char: '@',
        pluginKey: `suggestion2`,
        command: ({ editor, range, props }) => {
          props.command({ editor, range })
        },
      },
    }
  },

  addProseMirrorPlugins() {
    return [
      Suggestion({
        editor: this.editor,
        ...this.options.suggestion,
        pluginKey: `suggestion2`
      }),
    ]
  },
})