const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const nightTurn = (object, key, value) => {
  console.log(object[key] = value)
}

nightTurn(lesson2, 'turno', 'noite')
console.log(lesson2)

const keyList = (object) => {
  const keys = Object.keys(object)
  return keys
}
console.log(keyList(lesson3))

const objectLength = (object) => {
  const length = Object.keys(object)
  return length.length
}
console.log(objectLength(lesson1))

const objectValues = (object) => {
  const values = Object.values(object)
  return values
}

console.log(objectValues(lesson2))

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 })

console.log(allLessons)

const studentNumber = (param) => {
  let values = 0;
  for (let index = 0; index < Object.keys(param).length; index += 1) {
    values += Object.values(allLessons)[index].numeroEstudantes
  }
  return values
}

console.log(studentNumber(allLessons))

const getObjectValueByNumber = (obj, value) => {
  return Object.values(obj)[value]
}
console.log(getObjectValueByNumber(lesson1, 2))


const verifyTrueFalse = (object, key, value) => {
  return (object[key] === value)

}

console.log(verifyTrueFalse(lesson3, 'turno', 'noite'));

console.log(verifyTrueFalse(lesson3, 'materia', 'Maria Clara'));