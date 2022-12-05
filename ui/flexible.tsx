'use client';

import { useEffect } from 'react';

export const Flexible = () => {
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches)
      document.documentElement.classList.add('dark');
    else document.documentElement.classList.add('light');
  }, []);
  return <div></div>;
};
