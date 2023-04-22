import { addProduct, calcStock, products } from './product.service'

addProduct({
  title: 'Pro1',
  createAt: new Date(1992, 1, 1),
  stock: 5
});
addProduct({
  title: 'Pro2',
  createAt: new Date(1992, 1, 1),
  stock: 12,
  size: 'S'
});
console.log(products);

const total = calcStock()
console.log(total);
