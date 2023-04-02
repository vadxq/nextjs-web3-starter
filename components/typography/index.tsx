'use client';

import { HTMLAttributes, ReactNode } from 'react';
import { tv } from 'tailwind-variants';
import { Colors } from '@/types/components/theme';

export type VariantType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'lead'
  | 'paragraph'
  | 'small';

export type ColorsType = 'inherit' | 'current' | 'black' | 'white' | Colors;

const typography = tv({
  base: 'antialiased font-sans',
  variants: {
    color: {
      inherit: 'text-inherit',
      current: {
        color: 'text-current'
      },
      black: {
        color: 'text-black'
      },
      white: {
        color: 'text-white'
      },
      'blue-gray':
        'text-blue-gray-900 bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400',
      gray: 'text-gray-700 bg-gradient-to-tr from-gray-600 to-gray-400',
      brown: 'text-brown-500 bg-gradient-to-tr from-brown-600 to-brown-400',
      'deep-orange':
        'text-deep-orange-500 bg-gradient-to-tr from-deep-orange-600 to-deep-orange-400',
      orange: 'text-orange-500 bg-gradient-to-tr from-orange-600 to-orange-400',
      amber: 'text-amber-500 bg-gradient-to-tr from-amber-600 to-amber-400',
      yellow: 'text-yellow-500 bg-gradient-to-tr from-yellow-600 to-yellow-400',
      lime: 'text-lime-500 bg-gradient-to-tr from-lime-600 to-lime-400',
      'light-green':
        'text-light-green-500 bg-gradient-to-tr from-light-green-600 to-light-green-400',
      green: 'text-green-500 bg-gradient-to-tr from-green-600 to-green-400',
      teal: 'text-teal-500 bg-gradient-to-tr from-teal-600 to-teal-400',
      cyan: 'text-cyan-500 bg-gradient-to-tr from-cyan-600 to-cyan-400',
      'light-blue':
        'text-light-blue-500 bg-gradient-to-tr from-light-blue-600 to-light-blue-400',
      blue: 'text-blue-500 bg-gradient-to-tr from-blue-600 to-blue-400',
      indigo: 'text-indigo-500 bg-gradient-to-tr from-indigo-600 to-indigo-400',
      'deep-purple':
        'text-deep-purple-500 bg-gradient-to-tr from-deep-purple-600 to-deep-purple-400',
      purple: 'text-purple-500 bg-gradient-to-tr from-purple-600 to-purple-400',
      pink: 'text-pink-500 bg-gradient-to-tr from-pink-600 to-pink-400',
      red: 'text-red-500 bg-gradient-to-tr from-red-600 to-red-400'
    },
    variant: {
      h1: 'text-5xl tracking-normal font-semibold leading-tight',
      h2: 'text-4xl tracking-normal font-semibold leading-[1.3]',
      h3: 'text-3xl tracking-normal font-semibold leading-snug',
      h4: 'text-2xl tracking-normal font-semibold leading-snug',
      h5: 'text-xl tracking-normal font-semibold leading-snug',
      h6: 'text-base tracking-normal font-semibold leading-relaxed',
      lead: 'text-xl font-normal leading-relaxed',
      paragraph: 'text-base font-light leading-relaxed',
      small: 'text-sm font-light leading-normal'
    },
    textGradient: {
      true: 'bg-clip-text text-transparent'
    }
  },
  defaultVariants: {
    variant: 'paragraph',
    color: 'inherit',
    textGradient: false
  }
});

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  className?: string;
  variant?: VariantType;
  color?: ColorsType;
  textGradient?: boolean;
}

export const Typography = ({
  variant,
  textGradient,
  color,
  children,
  className
}: TypographyProps) => {
  return (
    <div
      className={typography({
        variant,
        textGradient,
        color,
        class: className
      })}
    >
      {children}
    </div>
  );
};
