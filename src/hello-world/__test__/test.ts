import HelloWorld from '../index';

describe('HelloWorld', () => {
  it('Test HelloWorld', () => {
    expect(HelloWorld()).toBe('Hello World !!!');
  });
});
