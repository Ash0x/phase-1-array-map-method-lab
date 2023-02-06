const tutorials = [
	'what does the this keyword mean?',
	'What is the Constructor OO pattern?',
	'implementing Blockchain Web API',
	'The Test Driven Development Workflow',
	'What is NaN and how Can we Check for it',
	'What is the difference between stopPropagation and preventDefault?',
	'Immutable State and Pure Functions',
	'what is the difference between == and ===?',
	'what is the difference between event capturing and bubbling?',
	'what is JSONP?'
]

const titleCased = () => {
	return tutorials.map((element) => {
    const arrayOfWords = element.split(' ')
    // console.log(arrayOfWords)
    for (let i = 0; i < arrayOfWords.length; i++) {
      arrayOfWords[i] = arrayOfWords[i].charAt(0).toUpperCase() + arrayOfWords[i].slice(1)
      // console.log(arrayOfWords)
		}
    
     return arrayOfWords.join(' ')
	})
}