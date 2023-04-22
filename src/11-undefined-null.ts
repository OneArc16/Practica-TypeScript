(() => {
  // let myNumber: number = undefined;
  // let myString: string = null;

  let muNull: null = null;
  let myUndefined: undefined = undefined

  let myNumber: number | null = null;
  myNumber = 123;

  let myString: string | undefined = undefined;
  myString = 'pepe'

  function h1(name: string | null){
    let hello = 'hola';
    if(name){
      hello += 'name';
    }else{
      hello += 'nobody'
    }
    console.log(hello)
  }

  function h1V2(name: string | null){
    let hello = 'hola';
    hello += name?.toLocaleLowerCase();
    console.log(hello)
  }


  h1('nicolas');
  h1(null);

  h1V2('Nicolas')
  h1V2
})();
