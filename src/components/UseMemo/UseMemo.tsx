import { useMemo, useState } from 'react';
import { HiOutlinePlus, HiOutlineShoppingCart } from 'react-icons/hi2';

import { type ItemProps, INITIAL_DATA } from './data/itemCart.data';

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
    <section className="mx-auto w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <header className="mb-6">
        <h2 className="text-xl font-bold text-slate-900">Lista de compras</h2>

        <p className="mt-1 text-sm text-slate-500">
          Administra tus productos y aplica un descuento.
        </p>
      </header>

      <ul className="mb-6 space-y-3">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3"
          >
            <div className="flex items-center gap-3">
              <HiOutlineShoppingCart className="size-5 text-slate-400" />

              <span className="text-sm font-medium text-slate-700">
                {item.name}
              </span>
            </div>

            <span className="text-sm font-semibold text-slate-900">
              ${item.price.toFixed(2)}
            </span>
          </li>
        ))}
      </ul>

      <div className="space-y-4 border-t border-slate-200 pt-5">
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium text-slate-500">Costo total</span>

          <span className="font-semibold text-slate-900">
            ${totalCost.toFixed(2)}
          </span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <label htmlFor="discount" className="font-medium text-slate-500">
            Descuento
          </label>

          <input
            id="discount"
            className="w-28 rounded-lg border border-slate-200 bg-white px-3 py-2 text-right text-sm font-semibold text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            type="number"
            min={0}
            step="0.01"
            value={discount}
            onChange={(e) => setDiscount(parseFloat(e.target.value) || 0)}
          />
        </div>

        <div className="flex items-center justify-between rounded-xl bg-blue-50 px-4 py-4">
          <span className="font-semibold text-blue-700">Costo final</span>

          <span className="text-lg font-bold text-blue-700">
            ${finalCost.toFixed(2)}
          </span>
        </div>
      </div>

      <button
        type="button"
        className="mt-6 flex w-full cursor-pointer items-center justify-center rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition hover:bg-blue-700 active:scale-[0.98]"
        onClick={addItem}
      >
        <HiOutlinePlus className="size-5" />
        Agregar producto
      </button>
    </section>
  );
};

export default ShoppingCart;
