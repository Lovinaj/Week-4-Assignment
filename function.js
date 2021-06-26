//Write a function min(a,b) which returns the least of two numbers a and b. (hint: check conditional statement and functions)
//	e.g min(2,5) should return 2


function min(a, b) {
    return(a < b? a : b);
}
console.log(min(2, 5));

//OR

let min = (a, b) => {return(a < b? a : b)};
console.log(min(2, 5));