import React from 'react';

export function generateKeys(element: React.ReactNode, prefix = ''): Record<string, string> {
  const keys: Record<string, string> = {};

  function traverse(node: React.ReactNode, currentPrefix: string) {
    if (typeof node === 'string' || typeof node === 'number') {
      const key = currentPrefix || 'text';
      keys[key] = String(node);
    } else if (React.isValidElement(node)) {
      const children = node.props.children;
      const componentName = typeof node.type === 'string' ? node.type : node.type.name || 'Component';
      const newPrefix = currentPrefix ? `${currentPrefix}.${componentName}` : componentName;

      if (Array.isArray(children)) {
        children.forEach((child, index) => traverse(child, `${newPrefix}.${index}`));
      } else if (children) {
        traverse(children, newPrefix);
      }
    }
  }

  traverse(element, prefix);
  return keys;
}