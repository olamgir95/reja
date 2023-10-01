const word = "igufyi";

const letter = (vl) => {
  const new_arr = vl.split("").sort();

  const res = new_arr.filter(
    (vl, index) => new_arr[index] === new_arr[index + 1]
  );
  if (res.length >= 1) return true;
  else return false;
};
console.log(letter(word));
