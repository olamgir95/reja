function checkSimilarity(a, b) {
  console.log(a.split("").sort().toString() === b.split("").sort().toString());
}

checkSimilarity("laepp", "apple");
