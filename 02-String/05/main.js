// จงเขียนฟังก์ชัน truncate(str, length) เพื่อตัดข้อความ

// case-1 ถ้าหากข้อความมีความยาวมากกว่ากำหนด ให้ตัดความยาวของข้อความให้เท่ากับความยาวที่กำหนดแล้วต่อท้ายด้วย …
// ex :  truncate("What I'd like to tell on this topic is:", 20); // What I'd like to te…

// case-2 ถ้าความยาวข้อความสั้นกว่าความยาวที่กำหนดให้ return เป็นข้อความเดิม
// ex : truncate("Hi everyone!", 20); // Hi everyone!

function truncate(str, len) {
  // case-1 : (str.len > len)
  // return len ?  str.slice(0,len-1) + "..."
  // case-2 (str.len < len )
  // return str

  // return str.length > len ?  str.slice(0,len-1) + "..." :str;
  return len < str.length ? str.slice(0, len - 1) + '...' : str;
}

truncate('Hi everyone!', 20);
truncate("What I'd like to tell on this topic is:", 20);
