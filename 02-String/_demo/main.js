let str = 'stringify';

// str.slice(startIndex,endIndex)
// startIndex == Inclusive
// endIndex == exclusive

str.slice(0, 2); // 0,1
str.slice(2, 4); // 2,3
str.slice(2, 8); // 2,3,4,5,6,7
str.slice(2); // 2 ขึ้นไปจน string
str.slice(0); // ทั้ง string
str.slice(); // ทั้ง string

// indexOf  (lastIndexOf)
// includes,startWith (endWith)
// slice (substring, substr)
