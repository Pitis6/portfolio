export default function random() {
  const randomProyects =[]
  const set = new Set();
  while (set.size < 3) {
    const number = Math.floor(Math.random() * 4);
    set.add(number);
  }
  for(const item of set){
    randomProyects.push(item)
  }
  return randomProyects;
}


