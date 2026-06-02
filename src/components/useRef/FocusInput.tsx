import { useEffect, useRef } from 'react';
import { HiOutlineCursorArrowRays } from 'react-icons/hi2';

import { Button } from '../Button/Button';
import styles from './FocusInput.styles';

const FocusInput = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const focusInput = (): void => {
    if (!inputRef) {
      console.log('No hay referencia al elemento HTML.');
      return;
    }

    inputRef.current?.focus();
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <section className={styles.card}>
      <div className={styles.header}>
        <h2 className={styles.title}>Focus Input</h2>

        <p className={styles.description}>
          El input se enfoca automáticamente al montar el componente y cuando se
          hace click en el boton.
        </p>
      </div>

      <div className={styles.fieldWrapper}>
        <label htmlFor="focus-input" className={styles.label}>
          Mensaje
        </label>

        <input
          id="focus-input"
          ref={inputRef}
          type="text"
          placeholder="Escribe algo..."
          className={styles.input}
        />
      </div>

      <Button
        variant="primary"
        icon={<HiOutlineCursorArrowRays size={20} />}
        onClick={focusInput}
        fullWidth={true}
      >
        Enfocar Input
      </Button>
    </section>
  );
};

export default FocusInput;
