const a = Symbol('a');
const getA = Symbol('getA');

export default class Test {
  constructor() {
    this[a] = 'a';
    this[getA] = () => {
      console.log('private method');
    }
  }

  getA = () => {
    console.log('public log');
    this[getA]();
  }
}