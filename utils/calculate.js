import axios from 'axios';

import { getPayload } from './get-payload.js';

async function calculate(operation, numberA, numberB) {
  const url = 'http://www.dneonline.com/calculator.asmx';
  const payload = getPayload(operation, numberA, numberB);
  try {
    const response = await axios.post(
      url,
      payload,
      {
        headers: {
          'Content-Type': 'text/xml; charset=utf-8'
        }
      }
    );
    return await response.data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

export { calculate };