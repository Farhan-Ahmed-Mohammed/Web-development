console.log("Strings")
let a="farhan";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
// console.log(a[6]);

console.log(a.length);

let real_name="farhan"
let frnd="furqan"

console.log("His name is " +real_name+ " ans his frnd name is " +frnd);
console.log(`His name is ${real_name} and his frnd name is ${frnd}`);
//these are called template literals its above the below esc key symbol its not snigle quote

// \n is for new line

let b="maxpyane";
console.log(b.toUpperCase()); // to convert to upper case
console.log(b.toLowerCase());
console.log(b.length);  // here we want length so no parenthesis
console.log(b.slice(1,4)) //here 1 and 4 and after 4 are not included means we are printing onlt between 1 and 4
console.log(b.slice(1)); // it prints form index 1
console.log(b.replace("ma","77")); // here ma is replace with 77 it two times ma is there then only firs toccurance is replaced
console.log(b.concat(a,"anyotherstringcanbeadded","onemorealso")); //joining of 2 or more strings
console.log(b)  //at last it remains the same even we do chages it inmutable means cannot be changed
console.log(b.charAt(0));  //gives the character at index 0
console.log(b.indexOf("m")); //gives the index
console.log(b.startsWith("m"));  //if it starts with m we get true else we get false
console.log(b.endsWith('e'));