//IIFE Function:
//1.print odd num using IIFE

var num1 = [1,2,3,4,5,6,7];
var final = [];
(function (){
 
  for(var i = 0; i<num1.length; i++){
   if(num1[i]%2==1){
       final.push(num1[i])
     
   }
} 
 console.log(final);
})(num1);

//output : [1, 3, 5,7]

//---------------------------------------------------------------------------------------------------------------------------------

//2.to title case 

var str = ['today','FSD','class','tOo','GOod'];

(function (){
	for (var i = 0; i < str.length; i++) {
	     str[i] = str[i].toLowerCase();
		str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
	}
	console.log(str.join(' '));
})(str);

//output : Today Fsd Class Too Good

//---------------------------------------------------------------------------------------------------------------------------------

//3.sum of numbers using IIFE
var n= [6,2,1,2,3,4,5];
(function (){
    let sum = 0;
    for(let i = 0; i<n.length; i++){
        sum+=n[i];
    } 
    console.log(sum);
})(n);
//output : 23

//---------------------------------------------------------------------------------------------------------------------------------

// 4.find prime numbers

(function(a1){
    var  res1=[];
    for(i=0;i<a1.length;i++){
        count1=0;
        for(j=1;j<=a1[i];j++){
            
            if(a1[i]%j===0){
                count1++;
            } 
        }
            
        if(count1==2){
                res1.push(a1[i]);  
        }
    }
    console.log(res1);
 
})([1,2,3,4,5,6,7,8,9,11,12,13,17]);

//output: [2, 3, 5, 7, 11,13,17]

//---------------------------------------------------------------------------------------------------------------------------------
//5.IIFE Function

(function(){
    var arr1 =["abc", "mom", "dad", "madam", "teacher","sir","car","level","refer"];
    var N1=arr1.length;
    var out =[];
    for(let i=0;i<arr1.length;i++){
        let final = arr1[i];
        let str = final.split('').reverse().join('');
        if(str==arr1[i])
       out.push(arr1[i]);
        }
     console.log(out);
   
})(); 
//output
//['mom', 'dad', 'madam','level','refer']

//---------------------------------------------------------------------------------------------------------------------------------

//6.return median 
var arr1 = [3,2,1,4,5];
var arr2 = [8,6,7,9,10];
(function (){
   
let arr = [...arr1, ...arr2];
    
    arr.sort((a,b) => a-b);
    let len = arr.length;
  
    if(len%2!==0){

 let ans = arr[Math.round(len/2)-1];
 let final = ans;

 }else{

 ans = arr[Math.round(len/2)-1]+arr[Math.round(len/2)];
 final = ans;
 }
 console.log(final);
})(arr1,arr2);
//output: 11
//---------------------------------------------------------------------------------------------------------------------------------
//7.Remove duplicates from an array by using IIFE

var uniqueArray = (function(arr) {
    return Array.from(new Set(arr));
  })([1, 2, 2, 3, 4, 4, 5]);
  
  console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]

  //---------------------------------------------------------------------------------------------------------------------------------

  //8. Rotate an array by k times Using IIFE:

var arr =[4,5,6,1,2,3];
var n = arr.length;
var k = 3;

(function(arr,n,k){
   let p = 1;
        while (p <= k) {
            let last = arr[0];
            for (let i = 0; i < n - 1; i++) {
                arr[i] = arr[i + 1];
            }
            arr[n - 1] = last;
            p++;
            
        }
         let out = [];
        for (let i = 0; i < n; i++) {
            out.push(arr[i]);
            
        }
        console.log(out);  
})(arr,n,k);

//output :[ 1, 2, 3, 4, 5, 6 ]
