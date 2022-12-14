fetch('https://dummyjson.com/products/14')
  .then(res => res.json())
  .then(console.log)

function sum(a, b) {
    return a + b
}

console.log(sum(1,5))