const { info, printMessage } = require('./printMessage');

describe('testa função printMessage', () => {
  it('garantir que o objeto passado como parâmetro possui a propriedade personagem', () => {
    expect(info).toHaveProperty('personagem');
  });
  it('Verifique se a resposta contém a informação Boas vindas, antes de chamar o nome da personagem', () => {
    expect(printMessage(info)).toMatch('Boas vindas,');
  });
  it('Verifique se a resposta contém o nome correto da personagem.', () => {
    expect(printMessage(info)).toMatch('Margarida');
  });
  it('validar se a mensagem de erro é lançada caso a função seja chamada com um objeto inválido.', () => {
    expect(() => {
      printMessage({
        nome: 'robivaldo',
        sobrenome: 'cleiton-rasta',
      });
    }).toThrow(new Error('objeto inválido'));
  });
});
