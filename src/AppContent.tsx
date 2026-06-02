import {
  HiOutlinePlus,
  HiOutlineMinus,
  HiOutlineSparkles,
} from 'react-icons/hi2';
import useGlobalContext from './hooks/useGlobalContext';

import styles from './AppContent.styles';
import { Button } from './components';

const AppContent = () => {
  const { globalValue, setGlobalValue } = useGlobalContext();

  const handleIncrement = (): void => {
    setGlobalValue((prev) => prev + 1);
  };

  const handleDecrement = (): void => {
    if (globalValue > 0) {
      setGlobalValue((prev) => prev - 1);
    }
  };

  const handleReset = (): void => {
    setGlobalValue(0);
  };

  const isDisabled = globalValue === 0;

  return (
    <main className={styles.container}>
      <section className={styles.sectionWrapper}>
        <div className={styles.headerIcon}>
          <HiOutlineSparkles size={24} />
        </div>

        <p className={styles.headerSpan}>Contador global</p>

        <h1 className={styles.title}>{globalValue}</h1>

        <p className={styles.textContent}>
          Este valor se administra desde el contexto y puede compartirse entre
          componentes.
        </p>

        <div className={styles.buttonWrapper}>
          <Button
            variant="primary"
            icon={<HiOutlinePlus size={20} />}
            onClick={handleIncrement}
          >
            Aumentar contador
          </Button>

          <Button variant="ghost" onClick={handleReset} disabled={isDisabled}>
            Resetear contador
          </Button>

          <Button
            variant="secondary"
            icon={<HiOutlineMinus size={20} />}
            onClick={handleDecrement}
            disabled={isDisabled}
          >
            Decrementar contador
          </Button>
        </div>
      </section>
    </main>
  );
};

export default AppContent;
