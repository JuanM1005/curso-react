import styles from './Button.module.css';
import type ButtonProps from './Button.types';

export const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {label}
    </button>
  );
};
