//palindrome 
// function palindrome(string){
//     let st=string.split(' ').join('').toLowerCase()
//     for(let i=0 ; i<st.length/2; i++){
//      if(st[i]!=st[st.length-1-i]){
//           return false
//       }
//     }
//     return true
// }
// console.log(palindrome('hello'))


var checkPalindrome = function(word){
var inputWord = word;
var checkString = inputWord.split(" ").join("").toLowerCase();
for(var i = 0; i < checkString.length/2; i++){
    if(checkString[i] != checkString[checkString.length-i-1]){
      return false; 
    }
}
return true;
}
var output = checkPalindrome("rase esar");
console.log(output);