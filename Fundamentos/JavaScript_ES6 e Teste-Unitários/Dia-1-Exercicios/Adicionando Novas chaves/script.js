const pessoaEstudante = {};

const newObjects = (object, newkey, newvalor) => { object[newkey] = newvalor; }
newObjects(pessoaEstudante, 'nome', 'Leandro');
newObjects(pessoaEstudante, 'telefone', '021- 984627354');
newObjects(pessoaEstudante, 'email', 'leandromotta02@Hotmail.com');
newObjects(pessoaEstudante, 'github', 'https://github.com/Leandro-HMotta');
newObjects(pessoaEstudante, 'linkedin', 'https://www.linkedin.com/in/leandro-henrique-817084258/');

// console.log(pessoaEstudante)

// ----------------------------------------------------------------------------------------

const student1 = {
  html: 'Muito Bom',
  css: 'Bom',
  javascript: 'Ótimo',
  softskills: 'Ótimo',
};

const student2 = {
  html: 'Bom',
  css: 'Ótimo',
  javascript: 'Ruim',
  softskills: 'Ótimo',
  git: 'Bom', // chave adicionada
};


const listSkills = (student) => {
  const arrayOfSkills = Object.keys(student);
  for (let index = 0; index < arrayOfSkills.length; index += 1) {
    console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
  }
};

// console.log('Estudante 1');
// listSkills(student1);

// console.log('Estudante 2');
// listSkills(student2);

const person = {
  name: 'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const newPerson = Object.assign({}, person, lastName);
newPerson.name = 'Gilberto';
console.log(person);
console.log(newPerson);
