(() => {
  const caclTotal = (prices: number[]): string => {
    let total = 0
    prices.forEach((item) =>{
      total += item
    });
    return total.toString();
  }
  const printTotal = (prices: number[]): void =>{
    const rta = caclTotal(prices)
    console.log(`El total es ${rta}`)
  }

  const rta = caclTotal([1,2,3,4,5,6,7])
  console.log(rta);
})();
