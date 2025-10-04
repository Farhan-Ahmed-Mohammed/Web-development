let arr=[1,2,4,5,7]

console.log(arr,typeof arr); // array is mutable unlike string is immutable
console.log(arr.length);
console.log(arr[0])
arr[0]=566;
console.log(arr);

console.log(arr.toString()); // now array is converted to string
console.log(arr.join("and")); // it adda and to every number of arr at the 
arr.pop();  //removes the last element 
console.log(arr);
arr.push(100);  //100 is pushed at hte end
console.log(arr);
arr.push("farhan");
console.log(arr);
arr.shift();  // it removes the first element
console.log(arr);
arr.unshift(45); //it pushes in the front of array
console.log(arr);
delete arr[0];  //delets the a[0] eleement in array and it is represdn as empty item in array and the size of array remains the same
console.log(arr);
let a1=[1,2,3];
let a2=[4,5,6];
let a3=[7,8,9];
console.log(a1.concat(a2,a3)); // it dont change the exisitng array a1 remamins the same but if we concat a2 and a3 are added in a1
let b=[6,2,9];
console.log(b);
b.sort();  //sorts the array
console.log(b);

let n=[1,2,3,4,5];
console.log(n);
n.splice(1,2); // elements at the index 1,2 are removed
console.log(n);
let m=[6,7,8,9,10]
console.log(m);
m.splice(1,2,22,33); //element sat index 1,2 are removed and replaced with 22,33
console.log(m);

let x=[1,2,3,4,5];
console.log(x);
console.log(x.slice(2)); //means start from index 2


