const statement = 'I am a hard working person';

// Split the sentence into an array of words
const wordsArray = statement.split(' ');

// Reverse the array of words
const reversedArray = wordsArray.reverse();

// Join the reversed array back into a single string
const reversedStatement = reversedArray.join(" ");

// Output the reversed sentence
console.log(reversedStatement);
