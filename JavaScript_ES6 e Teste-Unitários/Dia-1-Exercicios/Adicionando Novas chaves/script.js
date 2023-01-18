const pessoaEstudante = {};

const newObjects = (object, newkey, newvalor) => { object[newkey] = newvalor; }
newObjects(pessoaEstudante, 'nome', 'Leandro');
newObjects(pessoaEstudante, 'telefone', '021- 984627354');
newObjects(pessoaEstudante, 'email', 'leandromotta02@Hotmail.com');
newObjects(pessoaEstudante, 'github', 'https://github.com/Leandro-HMotta');
newObjects(pessoaEstudante, 'linkedin', 'https://www.linkedin.com/in/leandro-henrique-817084258/');

console.log(pessoaEstudante)