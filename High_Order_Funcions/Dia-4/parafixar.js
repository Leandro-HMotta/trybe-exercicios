// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Manga', 'Banana', 'Uva'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Mamão', 'Pera', 'Lichia'];

const fruitSalad = (fruit, additional) => [...fruit, ...additional];

console.log(fruitSalad(specialFruit, additionalItens));

// -----------------------------------------------------------------------------------------------------------------------------

const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const newobj = { ...user, ...jobInfos };

const { name, age, nationality, profession, squad, squadInitials } = newobj;

// const { name, age, nationality } = user;

// const { profession, squad, squadInitials } = jobInfos;

const text = `Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`;


console.log(text)