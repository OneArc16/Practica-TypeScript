(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL'
  type Product = {
    title: string,
    createAt: Date,
    stock: number,
    size?: Sizes
  };

  const products: Product[] = [];

  const addProduct = (data: {
    title: string,
    createAt: Date,
    stock: number,
    size?: Sizes
  }) => {
    products.push(data);
  }

  addProduct({
    title: 'Pro1',
    createAt: new Date(1992, 1, 1),
    stock: 12,
    size: 'S'
  });
  console.log(products);

  products.push({
    title: 'Pro3',
    createAt: new Date(1992, 1, 1),
    stock: 12,
    size: 'S'
  })
})();
