import TaskItem from '@tiptap/extension-task-item';
import { ReactNodeViewRenderer } from '@tiptap/react';
import CustomTaskItemView from './CustomTaskItemView.jsx';

const CustomTaskItem = TaskItem.extend({
  addNodeView() {
    return ReactNodeViewRenderer(CustomTaskItemView, {
      editor: this.editor,
    });
  },
});

export default CustomTaskItem; 