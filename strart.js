const apples = 20;
const oranges = 30;

console.log('Q0: Apples - %s, Oranges: %s', apples, oranges);

console.log('Q1: are apples and oranges equal?', apples === oranges);

console.log('Q2: are apples and oranges different?', apples !== oranges);

console.log('Q3: are apples greater than oranges?', apples > oranges);

console.log('Q4: are apples less or equal to oranges?', apples <= oranges);

console.log('Q5: are oranges greater than apples?', oranges > apples);

const mangoes = 5;

console.log('Mangoes - %s\nQ6: are mangoes by apples greater than mangoes added to oranges?', mangoes, mangoes * apples > oranges + mangoes);

console.log('Q7: are mangoes subtracted from apples less than oranges divided by mangoes?', apples - mangoes > oranges / mangoes);

console.log('Q8: are mangoes, apples, and oranges equal?',mangoes === apples === oranges);

console.log('Q9: are the remainder of apples divided by mangoes and the remainder of oranges divided by mangoes equal?', apples % mangoes === oranges % mangoes);

console.log('Q10: are mangoes added to apples not greater than oranges minus mangoes?', apples <= (oranges - mangoes));