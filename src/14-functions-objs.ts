(() => {
  const login = (data: {email: string, password: number}) =>{
    console.log(data.email, data.password);
  }

  login({
    email: 'danielcast@yahoo.com',
    password: 1234
  });

  type Sizes = 'S' | 'M' | 'L' | 'XL'

  const products: any[] = [];

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
})();
