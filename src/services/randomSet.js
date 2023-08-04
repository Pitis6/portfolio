function randon() {
  const set = new Set();
  while (set.size < 3) {
    const number = Math.floor(Math.random() * 4);
    set.add(number);
    console.log(1)
  }
  return set;
}

console.log(randon());
