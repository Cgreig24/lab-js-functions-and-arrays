// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1,num2) {
    if(num1 > num2) {return num1}
    else if(num1 < num2) {return num2}
   else if(num1 = num2) {return num1 || num2}
   else return "Error in input"
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    if(words.length===0) return null
  else {
  let wordlength = [];
  let max = [0];
  for(i=0;i<words.length;i++)
    {wordlength.push(words[i].length)
   }
  for(j=0;j<wordlength.length;j++)
    {if(wordlength[j] > max)
     max = wordlength[j];
    }
return words[wordlength.indexOf(max)]
    }
}


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let sum=0
  for(i=0;i<numbers.length;i++)
    {sum+=numbers[i]}
    return sum
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];


    function averageNumbers(numbers2) {
        if(numbers2.length==0) {return 0}
  else {
 let countOfNumbers=numbers2.length;
  let sum=0;
  for(i=0;i<numbers2.length;i++)
    {sum+=numbers2[i]}
    return sum/countOfNumbers
}
  
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words2,wordToFind) {
    let checkWord = []
  if(words2.length==0){return null}
  else {
  for(i=0;i<words2.length;i++)
   
    {if
      (words2[i]==wordToFind)
    {checkWord.push(words2[i])}
}
 if(checkWord.length===0) {return false}
  else {return true}
}
}
