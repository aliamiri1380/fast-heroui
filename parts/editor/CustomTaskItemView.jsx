import React from 'react';
import { NodeViewContent, NodeViewWrapper } from '@tiptap/react';
import { Checkbox } from '@/components/ui/checkbox';

const CustomTaskItemView = ({ node, updateAttributes, editor, getPos }) => {
  const { checked } = node.attrs;

  const handleCheckboxChange = (newCheckedState) => {
    updateAttributes({
      checked: newCheckedState,
    });
    // After changing the state, focus the editor back to the position 
    // of the task item's text content.
    if (editor.isEditable) {
      editor.commands.focus(getPos() + 1);
    }
  };

  return (
    <NodeViewWrapper as="li" className={`task-item custom-task-item ${checked ? 'checked' : ''}`} data-checked={checked}>
      <Checkbox
        className="mt-1 mr-2"
        checked={checked}
        onCheckedChange={handleCheckboxChange}
        contentEditable={false}
      />
      <NodeViewContent as="div" />
    </NodeViewWrapper>
  );
};

export default CustomTaskItemView; 