import clsx from 'clsx';

import type { ButtonProps } from './Button.types';

export const Button = ({
  type = 'button',
  children,
  icon,
  variant = 'primary',
  fullWidth = false,
  className,
  ...rest
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={clsx(
        'flex cursor-pointer items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 disabled:active:scale-100',
        variant === 'primary' &&
          'bg-blue-600 text-white shadow-md shadow-blue-600/20 hover:bg-blue-700 disabled:hover:bg-blue-600',
        variant === 'secondary' &&
          'border border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-50 disabled:hover:bg-white',
        variant === 'third' &&
          'font-medium text-white bg-slate-800 hover:bg-slate-700',
        variant === 'ghost' &&
          'font-medium text-slate-500 hover:bg-slate-100 hover:text-slate-700 disabled:hover:bg-transparent disabled:hover:text-slate-500',
        fullWidth && 'w-full',
        className,
      )}
      {...rest}
    >
      {icon}
      {children}
    </button>
  );
};
