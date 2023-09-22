console.log("Jack Ma maslahatlari");

const list = [
  "yaxshi talaba boling", //0-20
  "togri boshliq tanlang va koproq xato qiling", //20-30
  "uzingizni ishlashingizni boshlang", //30-40
  "siz kuchli bolgan narsalarni qiling", //40-50
  "yoshlarga investitsiya qiling", //50-60
  "endi dam oling", //60
];

function maslahatBering(a, callback) {
  if (typeof a !== "number") callback("insert a number", null);
  else if (a <= 20) callback(null, list[0]);
  else if (a > 20 && a <= 30) callback(null, list[1]);
  else if (a > 30 && a <= 40) callback(null, list[2]);
  else if (a > 40 && a <= 50) callback(null, list[3]);
  else if (a > 50 && a <= 60) callback(null, list[4]);
  else {
    callback(null, list[5]);
  }
}

maslahatBering(40, (err, data) => {
  if (err) console.log("ERROR", err);
  console.log("Javob:", data);
});
console.log("passed here 1");

maslahatBering(65, (err, data) => {
    if (err) console.log("ERROR", err);
    console.log("Javob:", data);
  });
  
