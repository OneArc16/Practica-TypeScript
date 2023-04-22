(() => {
  let userId: string | number;

  userId = 10;
  userId = "10";

function greeting(myText: string | number){
  if (typeof myText === 'string'){
    console.log(`string ${myText.toLocaleLowerCase()}`)
  }else {
    myText
  }
}
greeting('pepe')
greeting(12321)
})();
