console.log("loops")

let a=1;

for(let i=0;i<100;i++)
{
    console.log(a+i);
}

let obj={
    name:"farhan",
    role:"coder",
    company:"Apple"

}

for (const key in obj) {  // its called for in loop as we use in 
    console.log(key); //to print only keys
    
}

for(const c of "Farhan")  // it's called for of loop as we use of
{
    console.log(c);  // it prints f a r h a n letter by letter
}

let i=0;
while(i<6)
{
    console.log(i);
    i++;
}

let j=0;
do{
    console.log(j);
    j++;

} while(j<6)