import jsdom from 'jsdom';

import { calculate } from './utils/calculate.js';
import { formatXml } from './utils/formatter.js';

const operation = (process.argv[2] === null) ? 'add' : process.argv[2];
const numberA = (process.argv[3] === null) ? 1 : process.argv[3];
const numberB = (process.argv[4] === null) ? 1 : process.argv[4];

calculate(operation, numberA, numberB)
  .then(result => {
    const dom = new jsdom.JSDOM(result);

    // Print just the answer
    switch (operation) {
      case 'sum':
        console.log(`Result from ${numberA} + ${numberB} = ${dom.window.document.querySelector('AddResult').textContent}`);
        break;
      case 'subtract':
        console.log(`Result from ${numberA} - ${numberB} = ${dom.window.document.querySelector('SubtractResult').textContent}`);
        break;
      case 'multiply':
        console.log(`Result from ${numberA} * ${numberB} = ${dom.window.document.querySelector('MultiplyResult').textContent}`);
        break;
      case 'divide':
        console.log(`Result from ${numberA} / ${numberB} = ${dom.window.document.querySelector('DivideResult').textContent}`);
        break;
    }
    console.log('---------------------------')
    console.log(`\x1b[35m${formatXml(result)}`); // print the XML result with color magenta
  })
  .catch(error => {
    console.log(error);
  });
