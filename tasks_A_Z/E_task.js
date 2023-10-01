const word = "hello world";
const getReverse = (a) => {
  const arr = a.split("");
  return arr.reverse().toString().replaceAll(',','');
};

const result=getReverse(word)
console.log('Result:',result);
