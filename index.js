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

let titleCased = () => {
  const newArray = [];
  for(const title of tutorials){
    const titleArray = title.split(" ")
    let finalWord = ""
    const myArray = []
    for(const word of titleArray){
       let first = word.charAt(0)
       let upper = first.toUpperCase()
       finalWord = upper + word.slice(1)
       myArray.push(finalWord)
    }
    let joinedString = myArray.join(" ")
    newArray.push(joinedString)
    
  }
  return newArray
}


