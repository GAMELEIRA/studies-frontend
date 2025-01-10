import { describe, expect, it, jest } from '@jest/globals';
import Person from '../src/models/Person.model';

//DEFINE UMA SUITE DE TESTE. UMA SUITE EH UMA COLECAO DE TESTES PARA TESTAR UMA FUNCIONALIDADE EM ESPECIFICO
describe('Bateria de Testes para Person', () => {
  //CADA DESCRIBE AGRUPA UM CONJUNTO DE TESTES COM O MESMO CONTEXTO
  //EXEMPLO PODEMOS TER N CASOS DE TESTES PARA UMA MESMA FUNCAO
  describe('Valida caracteristicas de uma pessoa', () => {
    it('Deve validar se o nome está preenchido', () => {
      //UM MOCK DEFINE UMA SIMULACAO DE ALGO MAIS COMPLEXO
      //UM MOCK ABSTRAI UM OBJETO MAIS COMPLETO E COMPLEXO PARA ALGO MAIS ESPECIFICO
      //UM MOCK IRA TER COMO UNICO OBJETIVO SERVIR PARA O TESTE EM QUESTAO
      //O MOCK IRA SE CONCENTRAR NA LOGICA APLICADA NO TESTE
      const mockPerson = {
        name: 'Gabriel',
        age: 25,
        cpf: '12345678900',
      };
      expect(() => Person.validatePerson(mockPerson)).not.toThrow();
    });

    it('Deve validar se o nome não está preenchido', () => {
      const mockPerson = {
        name: '',
        age: 25,
        cpf: '12345678900',
      };
      expect(() => Person.validatePerson(mockPerson)).toThrow(
        new Error('Nome vazio')
      );
    });

    it('Deve validar se o cpf não está preenchido', () => {
      const mockPerson = {
        name: 'Gabriel',
        age: 25,
        cpf: '',
      };
      expect(() => Person.validatePerson(mockPerson)).toThrow(
        new Error('CPF vazio')
      );
    });

    it('Deve validar se o cpf está preenchido', () => {
      const mockPerson = {
        name: 'Gabriel',
        age: 25,
        cpf: '12345678900',
      };
      expect(() => Person.validatePerson(mockPerson)).not.toThrow();
    });
  });

  describe('Valida o comportamento da funcionalidade speak()', () => {
    it('Deve validar se o retorno da funcao speak está retornando a frase correta ', () => {
      const name = 'Gabriel';
      const mockPhrase = `Oi meu nome é ${name}`;
      expect(Person.speakName(name)).toBe(mockPhrase);
    });
  });

  describe('Valida o comportamento da funcionalidade format()', () => {
    it('Deve formatar o nome da pessoa e o CPF', () => {
      // AAA 
      // ARRANGE = PREPARA
      const mockPerson = {
        name: 'Gabriel Gameleira',
        age: 25,
        cpf: '123.456.789-00',
      }
      // ACT = EXECUTAR
      const formattedPerson = Person.formatPerson(mockPerson);
      // ASSERT = VALIDAR
      expect(formattedPerson).toStrictEqual({
        name: 'Gabriel',
        age: 25,
        cpf: '12345678900',
        lastName: 'Gameleira'
      });
    });

    it('Deve validar se a funcao validar pessoa esta executando as funcoes', () => {
      // Espiona os métodos validateName e validateCpf
      jest.spyOn(Person, 'validateName').mockReturnValue();
      jest.spyOn(Person, 'validateCpf').mockReturnValue();
    
      const mockPerson = {
        name: 'Gabriel Gameleira',
        age: 25, 
        cpf: '123.456.789-00',
      };
    
      Person.validatePerson(mockPerson);
    
      expect(Person.validateName).toHaveBeenCalledWith(mockPerson.name);
      expect(Person.validateCpf).toHaveBeenCalledWith(mockPerson.cpf);
    });
    
  });
});
