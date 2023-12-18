// - จงเขียนฟังก์ชันเพื่อตรวจสอบข้อความ
// หากในข้อความนั้นมีคำว่า xxx, sex, porn
// ให้ return ค่าเป็น true
// แต่ถ้าไม่มีให้ return ค่าเป็น false

// - ให้ตรวจสอบแบบ case-insensitive เช่น XXX, pOrn, sEX ให้ถือว่าเป็นคำเดียวกับ
// 		xxx, porn, sex ตามลำดับ

// P1 - case insensitive => Normalize
// P2 - detect word

function normalizeString(str) {
  return str.toLowerCase();
}

// normalizeString("AAAAAAA")
// normalizeString("aaaaaaa")

function isSpam(str) {
  return str.includes('xxx') || str.includes('sex') || str.includes('porn');
}

isSpam('aaaaxxxaaaa'); // true
isSpam('aaaasexaaaa'); // true
isSpam('aaaapornaaaa'); // true
isSpam('aaaaPoRnaaaa'); // false

// Original Problem = P1 + P2
const checkSpam = function (str) {
  // generate lowerCase String
  let strCheck = normalizeString(str);

  // detect word
  let checkResult = isSpam(strCheck);

  // return ผลลัพธ์ในการ detect
  return checkResult;
};

checkSpam('aaaaXXxXXXXxaaaa');
