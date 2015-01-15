/* ---------------------  
--------maxOfTwoNumbers------*/

function maxOfTwoNumbers (a,b) {
    if (a > b){
        return true;
    } else {
        return false;
    }
}

maxOfTwoNumbers(5,3) 

/* ---------------------  
--------maxOfThree-------*/

function maxOfThree (a,b,c){
    if (a > b && a > c){
        return a;
    } else if (b > a && b > c){
        return b;
    } else {
        return c;
    }
}

maxOfThree (2,8,4)

/* ---------------------  
--------Vowels-------*/


function vowel (letter){
	var vowels = ["a","e","i","o","u"]

	for (x = 0; x < vowels.length; x++){

		if (vowels[x] === letter){
			return "String is a vowel";
		}
	}   
	return "String is not a vowel"
}

vowel ("a");



/* ----------------------------------
--------sumArray-&-multiplyArr------*/

function sumArray(arr){
	var result = 0;
	for(i=0; i < arr.length; i++) {
		result = result + arr[i]
	}
	return result;
}

function multiplyArray(arr){
	var result = 1;
	for(i=0; i < arr.length; i++) {
		result = result * arr[i]
	}
	return result;
}

sumArray([1,2,3,4,5,6]);
multiplyArray([1,2,3,5,3]);


/* ----------------------------------
-----------------Bonus-1-------------*/

function reverseString (string){
    var splitString = string.split("");
    return splitString.reverse().join("");
}

reverseString("jag testar")

/* ----------------------------------
-----------------Bonus-2-------------*/

function findLongestWord(arr) {
    var result = 0;
    var word = ""
    for(i=0;i < arr.length; i++){
        if (arr[i].length > result){
           result = arr[i].length
           word = arr[i];
        }
              
    } return word;  
}

findLongestWord(["This","is","a","test","music"])

/* ----------------------------------
-----------------Bonus-3-------------*/

function filterLongWords(arr,index){
    var result = [];
    for(i=0;i < arr.length; i++){
        if (arr[i].length > index){
           result.push(arr[i])
        }          
    }
    return result
}

filterLongWords(["one","three","four","computer"],4)


