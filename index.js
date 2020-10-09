const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = (title) => {
  return tutorials.map (tutorial => {
    //split all the works in the string
    let splitEachWordIntoSeperateString = tutorial.split(' ')
    //capitalize each word
    let capitalizeEachWord = 
      splitEachWordIntoSeperateString.map (word => word.charAt(0).toUpperCase() + word.slice(1))
    //join all the words in teh string
    let joinEachWordBackIntoOneString = capitalizeEachWord.join(' ')
    //return the new tutorial
    return joinEachWordBackIntoOneString
  })
}

//stackoverflow
//function capitalizeFirstLetter(string) {
  //return string.charAt(0).toUpperCase() + string.slice(1);
//}