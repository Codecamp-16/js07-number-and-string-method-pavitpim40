// min = 2
// max = 10
// diff = 10-2 = 8 * (0.000000000000000000001 - 0.999999999999999999)
// 8*0.01
// 8*0.99999
function randomInRange(min, max) {
  // let something = 0 // (0.00000000001 -7.999999999999999)
  return min + (max - min) * Math.random();
}
