(() =>{
  let prices = [1,2,3,4,5,6]
  // prices.push('sadadsad')
  // prices.push(true)
  // prices.push({});

  prices.push(123456)

  let products = ['FIFA', true]
  // products.push(12);

  let mixed: (number | string | boolean | Object)[] = ['hola', true];
  mixed.push(12);
  mixed.push('Xiaomi')
  mixed.push({});
})();
