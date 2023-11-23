//Arrow function problems

//1. Print odd numbers in an array

let numberArray = [1, 2, 3, 4, 5, 6,7,8,9,10,11,12,13,14,15];

let odd1=numberArray.filter((x) => {

return x % 2 !== 0;
});
console.log(odd1);

//output
//[1, 3, 5, 7, 9,11,13,15]


//-----------------------------------------------------------------------------------------------
//2. Convert all the strings to title caps in a string array = arrow funtion
 

 let str1 = ['today','FSD','class','tOo','GOod']

 let strCaps = str1.map((item) => {

    return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();

});
console.log( strCaps.join(' '));
//output : Today Fsd Class Too Good.


//------------------------------------------------------------------------------------------
//3. sum of numbers in array using arrow function

var arr=[10,12,1,2,3,4,5,6];
const add1=arr.reduce((a,b)=>a+b);
console.log([add1]);
//output: 43


//--------------------------------------------------------------------------------------------------
//4. find prime numbers using arrow function

let prime1 = (arr) => {
    return arr.filter((n) => {
      for (let i = 2; i < n; i++) {
        if (n % i === 0) {
          return false;
        }
      }
      return n > 1;
    });
  };
  console.log(prime1([1,2,3,4,5,6,7,8,9,10]));
  //output
  //[ 2, 3, 5, 7 ]

//------------------------------------------------------------------------------------------

//using arrow function
var arr =["abc", "mom", "dad", "madam", "teacher","sir","car","level","refer"];
arr = arr.filter((s) =>{
let len = s.length;
for (var i = 0; i<len / 2; i++) {
if (s[i] == s[len - i - 1]){
return true;
}
else{
return false;
}
}
});
console.log(arr);
//output : ['mom', 'dad', 'madam', 'level', 'refer']

