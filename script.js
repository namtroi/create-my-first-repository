function test(arr) {
  const obj = {};

  for (const i of arr) {
    obj[i] = (obj[i] || 0) + 1;
  }

  for (const key of Object.keys(obj)) {
    console.log(Number.parseInt(key) + 10);
  }

  return obj;
}

console.log(test([1, 3, 6, 7, 1]));

console.log('ddfdfldk fjldkfd');
