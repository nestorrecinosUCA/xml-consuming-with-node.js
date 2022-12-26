function getPayload(operation, numberA, numberB) {
  let operationToExecute = '';
  switch (operation) {
    case 'sum': operationToExecute = 'Add';
      break;
    case 'subtract': operationToExecute = 'Subtract';
      break;
    case 'multiply': operationToExecute = 'Multiply';
      break;
    case 'divide':
      if (numberB === 0) {
        throw new Error('Cannot divide by 0');
      }
      operationToExecute = 'Divide';
      break;
    default: throw new Error('The operation could not be found');
  }
  const payload = `<?xml version="1.0" encoding="utf-8"?>
  <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
    <soap:Body>
      <${operationToExecute} xmlns="http://tempuri.org/">
        <intA>${numberA}</intA>
        <intB>${numberB}</intB>
      </${operationToExecute}>
    </soap:Body>
  </soap:Envelope>`

  return payload;
}

export { getPayload };