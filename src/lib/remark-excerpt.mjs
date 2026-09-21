import { toString } from 'mdast-util-to-string';

const MARKER = '<!-- end -->';

export function remarkExcerpt() {
  return (tree, file) => {
    const children = tree.children;
    const idx = children.findIndex(
      (node) => node.type === 'html' && node.value.trim() === MARKER,
    );
    if (idx === -1) return;

    file.data.astro.frontmatter.excerpt = children
      .slice(0, idx)
      .map((node) => toString(node))
      .join(' ')
      .trim();

    children.splice(idx, 1);
  };
}
