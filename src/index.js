module.exports = function reverse (n) {
    if (n < 0) {
       n = -1 * n;
    } else {
         n = n * 1;
    }
    let x = n.toString().split("").reverse().join("");
    
    console.log(x);
  return  x;
}
