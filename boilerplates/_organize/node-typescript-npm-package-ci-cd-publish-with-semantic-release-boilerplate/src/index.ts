'use strict';

export { sayHello, sumNumbers };

function sayHello(name: string): string {
  return `Hello ${name}`;
}

function sumNumbers(a: number, b: number): number {
  return a + b;
}
