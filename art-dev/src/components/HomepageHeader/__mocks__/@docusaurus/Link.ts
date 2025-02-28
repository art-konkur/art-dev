import React from 'react';

export default function MockLink({ children, to, ...props }) {
  return React.createElement('a', { ...props, href: to }, children);
}
