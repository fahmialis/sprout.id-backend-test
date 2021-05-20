function number(n) {
  let output = ''
  for( let i = n; i >= 1; i--){
    output += i
  }

  for(let i = 2; i <= n; i++){
    output += i
  }
  return output
}

console.log(number(6));
console.log(number(7));
console.log(number(3));
console.log(number(2));
