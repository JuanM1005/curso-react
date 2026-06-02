import { useMemo, useState } from 'react';
import { HiOutlinePlus, HiOutlineShoppingCart } from 'react-icons/hi2';

import { type ItemProps, INITIAL_DATA } from './itemCart.data';
import styles from './useMemo.styles';

const ShoppingCart = () => {
  const [items, setItems] = useState<ItemProps[]>(INITIAL_DATA);
  const [discount, setDiscount] = useState<number>(0);

  const totalCost = useMemo(() => {
    console.log('Calculando total...');

    return items.reduce((total, item) => total + item.price, 0);
  }, [items]);

  const finalCost = totalCost - discount;

  const addItem = (): void => {
    const newItem: ItemProps = {
      id: items.length + 1,
      name: `Producto ${items.length + 1}`,
      price: Math.random() * 5,
    };

    setItems((currentItems) => [...currentItems, newItem]);
  };

  return (
    <section className={styles.card}>
      <header className={styles.header}>
        <h2 className={styles.title}>Lista de compras</h2>

        <p className={styles.description}>
          Administra tus productos y aplica un descuento.
        </p>
      </header>

      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.id} className={styles.item}>
            <div className="flex items-center gap-3">
              <HiOutlineShoppingCart className="size-5 text-slate-400" />

              <span className={styles.itemName}>{item.name}</span>
            </div>

            <span className={styles.itemPrice}>${item.price.toFixed(2)}</span>
          </li>
        ))}
      </ul>

      <div className={styles.summary}>
        <div className={styles.row}>
          <span className={styles.label}>Costo total</span>

          <span className={styles.value}>${totalCost.toFixed(2)}</span>
        </div>

        <div className={styles.row}>
          <label htmlFor="discount" className={styles.label}>
            Descuento
          </label>

          <input
            id="discount"
            className={styles.input}
            type="number"
            min={0}
            step="0.01"
            value={discount}
            onChange={(e) => setDiscount(parseFloat(e.target.value) || 0)}
          />
        </div>

        <div className={styles.totalRow}>
          <span className={styles.totalLabel}>Costo final</span>

          <span className={styles.totalValue}>${finalCost.toFixed(2)}</span>
        </div>
      </div>

      <button type="button" className={styles.button} onClick={addItem}>
        <HiOutlinePlus className="size-5" />
        Agregar producto
      </button>
    </section>
  );
};

export default ShoppingCart;
