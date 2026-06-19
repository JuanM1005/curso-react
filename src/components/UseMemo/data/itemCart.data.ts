export interface ItemProps {
  id: number;
  name: string;
  price: number;
}

export const INITIAL_DATA: ItemProps[] = [
  {
    id: 1,
    name: 'Playera Algodón',
    price: 29.99,
  },
  {
    id: 2,
    name: 'Tenis Deportivos',
    price: 89.99,
  },
  {
    id: 3,
    name: 'Mochila Urbana',
    price: 45.0,
  },
];
