//! Basics Comparison :
console.log(1>2);
console.log(1<2);
console.log(1>=2);
console.log(1<=2);
console.log(1==2);
console.log(1!=2);

//! Tricy :

console.log("2">1);
console.log("02">1);

console.log(null>0); // 'false'
console.log(null==0); // 'false'
console.log(null>=0); // 'true'

/* 
 !Notes :
 The reason is equity check (==) and the comparison check (>=,<=,>,<) work differently .
 Comparisions convert null to a Number , threating as '0'. 
*/

//! Strict check (=== , !==)
console.log("2"===2);