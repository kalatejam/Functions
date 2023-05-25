function f1(x){
    var r = x*x+x+1;
    return r;
}
var op=f1(2);
console.log(op);
var op1=f1(3);
console.log(op1);

function isEven(x){
    if(x%2==0){
    return true;
    }
    return false;
}
var op2=isEven(11);
console.log(op2);
function arrmul(arr){
    for(i=0; i<arr.length; i++){
        arr[i]=arr[i]*2;
    }
    return arr;
    }
    var inparr=[2,7,9];
    var oparr=arrmul(inparr);
    console.log(oparr);
function countEven(arr){
    var count=0;
    for(index=0; index<arr.length; index++){
        if(arr[index]%2==0){
            count++;
        }
    }
    return count;
}
var inputarr=[2,7,9,10];
var countn = countEven(inputarr);
console.log(countn);
    