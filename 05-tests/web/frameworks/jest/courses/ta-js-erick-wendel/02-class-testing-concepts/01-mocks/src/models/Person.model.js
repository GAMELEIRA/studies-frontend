export default class Person {
  name;
  age;
  cpf;

  constructor(name = '', age = '', cpf = '') {
    this.name = name;
    this.age = age;
    this.cpf = cpf;
  }

  static speakName = (name) => {
    return `Oi meu nome é ${name}`;
  };
  static validateName = (name) => {
    if (name.length === 0) {
      throw new Error('Nome vazio');
    }
  };

  static validateCpf = (cpf) => {
    if (cpf.length === 0) {
      throw new Error('CPF vazio');
    }
  };

  static formatPerson = (person) => { 
    const [name, ...lastName] = person.name.split(' ');
    return {
      name,
      lastName: lastName.join(' '),
      age: person.age,
      cpf: person.cpf.replace(/\D/g, ''),
    };
  }

  static save = (person) => {
    if(!['cpf', 'name', 'age', 'lastName'].every((prop) => person[prop])) {
      throw new Error('Os dados do objeto são inválidos');
    }
    console.log('Objeto Salvo', person);
  }

  static validatePerson = (person) => {
    this.validateName(person.name);
    this.validateCpf(person.cpf);
  };
}
