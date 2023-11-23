// Question 1. All Anonymous function problrms:
//Print odd numbers in an arry

var odd = function (num){
    var arr=[];
    for (var i=0;i<num.length;i++){
        if(num[i]%2 !==0){
          arr.push(num[i]);

        }
    }
  console.log(arr);
}
var num = [1,2,3,4,5,6,7,8,9,10];
odd(num);    

//ouput [1,3,5,7,9]
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//Question 2. convert all string in the tittle caps in string array;

 var tittle_Caps = function(str){
    for(var i=0; i<str.length; i++){
        str[i] = str[i].toLowerCase();
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    console.log(str.join(" "));
 }
var str = ["I", "am", "Vasanth","-", "FSD","DEVELOPER"];
tittle_Caps(str);

//output I Am Vasanth -Fsd Developer

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//3.Sum of all numbers in an array
//using  anonymous function

var add = function (n){
    let sum = 0;
    for(let i = 0; i<n.length; i++){
        sum+=n[i];
    }
    console.log(sum);
};

var n= [1,2,3,4,5,6,7];
add(n);
//output :28

//--------------------------------------------------------------------------------------------------

//4.Return all the prime numbers in an array
// Anonymous fucntion

var prime=function(a){

    var  reslt=[];
    for(i=0;i<a.length;i++)
    {
        var count=0;
        for(j=1;j<=a[i];j++)
        {
            if(a[i]%j===0)
            {
                count++;
            }
        }
        if(count==2)
        {
            reslt.push(a[i]);
        }
    }
    console.log(reslt);
};
prime([1,2,3,4,5,6,7,8,9,11,12,13]);

//output [2, 3, 5, 7, 11,13]

//------------------------------------------------------------------------------------------------------------------------------

//5.Return all the palindromes in an array
//anonymous function

var palindrome = function(arr){
    
    var out =[];
    for(var i=0;i<arr.length;i++){
        var final = arr[i];
        var str = final.split('').reverse().join('');
        if(str==arr[i])
       out.push(arr[i]);
        }
     console.log(out);
   
};
var arr =["abc", "mom", "dad", "madam", "teacher","level","refer"];

palindrome(arr);
//output, ['mom', 'dad', 'madam','level','refer']


//------------------------------------------------------------------------------------------------------------------------------

//6.Return median of two sorted arrays of the same size. anonymous function

var median = function (arr1,arr2){
    var arr = [...arr1, ...arr2];
    
    arr.sort((a,b) => a-b);
    var len = arr.length;
  
    if(len%2!==0){

        var ans = arr[Math.round(len/2)-1];
        var final = ans;

 }else{

 ans = arr[Math.round(len/2)-1]+arr[Math.round(len/2)];
 final = ans;

}
console.log(final);
};
var arr1 = [3,2,1,4,5];
var arr2 = [8,6,7,9,10];
median(arr1,arr2);
//output: 11


//------------------------------------------------------------------------------------------------------------------------------
//7.Remove duplicates from an array

var removeDuplicates = function (array) {
    return array.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });
}

// Example 
var originalArray = [1, 2, 3, 4, 2, 3,3,4,5,5,10,11,10,12,11];
var newArrayWithoutDuplicates = removeDuplicates(originalArray);

console.log(newArrayWithoutDuplicates); // Output: [1, 2, 3, 4,5,10,11,12]

//------------------------------------------------------------------------------------------------------------------------------

//8.Rotate an array by k times
// anonymous function

var rotation = function (arr,n,k)
{
    var p = 1;
        while (p <= k) {
            var last = arr[0];
            for (var i = 0; i < n - 1; i++) {
                arr[i] = arr[i + 1];
            }
            arr[n - 1] = last;
            p++;
            
        }
         var out = [];
        for (var i = 0; i < n; i++) {
           out.push(arr[i]);
            
        }
        console.log(out);
};
var arr =[4,5,6,1,2,3];
var n = arr.length;
var k = 3;

rotation(arr, n,k);

//output
//[ 1, 2, 3, 4, 5, 6 ]
