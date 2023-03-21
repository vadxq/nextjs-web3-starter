'use client';

import Link from 'next/link';
import { useContext } from 'react';
import StartRouterChange from './state';

export default function LayoutLink({
  href,
  style,
  children,
  className
}: React.ComponentProps<'a'>) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const startChange = useContext(StartRouterChange);
  const useLink = href && href.startsWith('/');
  if (useLink)
    return (
      <Link
        href={href}
        className={className}
        onClick={() => {
          const { pathname, search, hash } = window.location;
          if (href !== pathname + search + hash) startChange();
        }}
        style={style}
      >
        {children}
      </Link>
    );
  return (
    <a href={href} style={style} className={className}>
      {children}
    </a>
  );
}
