/* 
! Map() : [iterator->loop]
*   The map() method is used for creating a new array from an existing one, applying 
*   function to each one of the elements of the first array.
*/

const num = [1, 2, 3, 4, 5];

const doubleNum= num.map((ele) => ele*2)

console.log(doubleNum);