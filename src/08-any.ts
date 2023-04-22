(() => {
  let myDinamicVar: any;
  myDinamicVar = 10000;
  myDinamicVar = 'Literalmente acepta todo XD'
  myDinamicVar = {};
  myDinamicVar = ["Call of Duty", "Modern Warfare", 2]

  const rta = (myDinamicVar as string).toLocaleLowerCase();
  console.log(rta);

  myDinamicVar = 1212;
  const rta2 = (<number>myDinamicVar).toFixed;
  console.log(rta2)
})();
