/*
for(i=1 ;i<=5 ;i++){
    console.log(i);
}
*/

/*
output = "ouput ";

for(i=1 ;i<=5 ;i++){
    output += output  + " ";

}
    
 console.log(output);
*/

/*
for(i=5 ;i>=1 ;i--){
    output += i + " ";
}

console.log(output);
*/

/*
reverse = "";
str = "Chan";

for(i=str.length-1 ; i>=0; i++ ){
    reverse += str[i];
}

console.log(reverse);
*/

/*
output = "";
arr = [4,2,3];

for(i=0; i<arr.length; i++){
    output += arr[i] + " ";
}

console.log(output);
*/

arr1 = [4,2,3];
arr2 = [6,7,4,2,0];
arr3 = [8,6,2,3];

function arrayTraverse(array){

    output = "";
        for(i=0 ; i<arr.length; i++){
            output += arr[i] + " ";
        }
        console.log(output);
}

arrayTraverse(arr1);
arrayTraverse(arr2);
arrayTraverse(arr3);