import clsx from 'clsx';

import type { ButtonProps } from './Button.types';
import styles from './Button.styles';

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
        styles.base,
        styles[variant],
        fullWidth && styles.fullWidth,
        className,
      )}
      {...rest}
    >
      {icon}
      {children}
    </button>
  );
};
