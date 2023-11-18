type NumberArray = number[];

interface User {
    name: string,
    age: number
}

type Users = User[];

//create a function that takes array as a input and returns the first element of the input
function showTheFirstDigit(nums: NumberArray): number {
  //make a variable
//   let result: number = nums[0];
//   return result;
 return nums[0];
}

let result = showTheFirstDigit([1,2,4])
console.log(result)

//function for getting the first item wether its number or string
function getFirstItem(arr: (number | string)[]) : number | string {
  return arr[0]
}

let result1 = getFirstItem([2,3,4]);
let result2 = getFirstItem(["One","Two","Three"]);

console.log(result1);
console.log(result2);