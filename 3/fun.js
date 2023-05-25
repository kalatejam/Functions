// Addition
function add(x,y,z){
    var a=x+y+z;
    return a;
}
var output=add(10,15,20)
console.log(output);
// Squaring the numbers
function arrsqr(arr){
    for(i=0; i<arr.length; i++){
        arr[i]=arr[i]*arr[i];
    }
    return arr;
    } 
var inparr=[12,17,19]
var oparr=arrsqr(inparr);
console.log(oparr);
// count Even 
function countEven(arr){
    var count=0;
    for(index=0; index<arr.length; index++){
        if(arr[index]%2==0){
            count++;
        }
    }
    return count;
}
var inputarr=[2,4,9,10];
var countn = countEven(inputarr);
console.log(countn);
// count Odd
function countOdd(arr){
    var count=0;
    for(index=0; index<arr.length; index++){
        if(arr[index]%2==1){
            count++;
        }
    }
    return count;
}
var inputarr=[22,17,19,10,15,13];
var countn = countOdd(inputarr);
console.log(countn);
