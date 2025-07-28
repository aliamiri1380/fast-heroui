import Link from '@tiptap/extension-link';

export const CustomLink = Link.extend({
  addAttributes() {
    return {
      href: {
        default: null,
      },
      target: {
        default: this.options.HTMLAttributes.target,
      },
      class: {
        default: null,
      },
      download: {
        default: null,
      },
    };
  },
});

export default CustomLink; 