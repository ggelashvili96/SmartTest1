//1. დაბეჭდეთ რიცხვები 2 დან 8 მდე
for(let i=2; i<8; i++){
    console.log(i)
}

//2. 5 დან 35 ის ჩათვლით დაბედეთ ყოველი მეოთხე რიცხვი. 

for (let i =5; i< 35; i=i+4){
    console.log(i)
}

//3. დაბეჭდეთ 3 დან 8მდე რიცხვების ნამრავლი
let a=1;
for (let i=3; i < 8; i++){
    a= a*i
    console.log(a)
}

//4. გამოაცხადეთ ობიექთი ფერსონ რომელსაც აქვს სახელი გვარი ასაკი და 
// დაბეჭდეთ სახელი და გვარი. 
let person={
    firstName:"giorgi",
    lastName:`gelashvili`,
    age:28,
}
console.log(person.firstName,person.lastName)

for (const key in person) {
    console.log(person[key])
}

//6. დაწერეთ მასივი და დაბეჭდეთ ელემენტები
let fruits=[`apple`,`banana`,`orange`]
for (let i =0; i<fruits.length; i++){
    console.log(fruits[i])
}
fruits.unshift(`vashli`);
fruits.push(`msxali`)
console.log(fruits)

let q=0;
for(i=1;i<34;i++ ){
    q=q+i
}
console.log(q)


// 5იდან 50 მდე ყველა მეოთხე რიცხვის ჯამი. 


let W=0
for(let i = 0; i<=50; i+=4)
{
    W=W+i
}
console.log(W)



let numbers=[5,7,12,15,56,156]

for(let i=0; i<numbers.length; i++){
    const elementi = numbers[i]
    if(elementi%2===1){
        console.log(elementi+` elementi kentia` +` namravli iqneba `+ elementi* elementi)
    
    }else{console.log(`luwia`+elementi/2)}
}