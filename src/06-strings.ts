(() => {
  let productTitle = 'My amazing product';
  //productTitle = null;
  //productTitle = () => {};
  //productTitle = 123;

  productTitle = 'My amazing product charged';
  console.log('productTitle', productTitle)

  const productDescription = "I'm sdidihwidhjsnajj"
  console.log('productDescription', productDescription);

  let productPrice = 100;
  let isNew: boolean = false;
  const summary = `
    tittle: ${productTitle}
    descrption: ${productDescription}
    price: ${productPrice}
    isNew: ${isNew}
  `
  console.log(summary);
})();
