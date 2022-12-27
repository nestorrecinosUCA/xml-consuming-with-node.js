# XML Consuming With Node.js Example

First of all, this example is based in the following question and answer made in StackOverflow: https://stackoverflow.com/questions/74890978/how-to-consume-soap-web-services-using-node-js

For this example the tools and versions are the following:
- Node.js v16.14.2
- axios 1.2.1
- jsdom: 20.0.3

The SOAP web service for this example is: http://www.dneonline.com/calculator.asmx
This is a calculator that is able to sum, subtract, multiply and divide integer numbers, for this example two integers are allowed only.

For you to use this example package install the dependencies running the command:

```
npm install
```

After installing the dependencies, you will just need to run one of the following commands to make the desired procedure:

Sum: 
```
npm run sum 3 4
```

Subtract:
```
npm run subtract 4 5
```
Multiply:
```
npm run multiply 7 2
```
Divide:
```
npm run divide 14 2
```

The answer will be the value, and the SOAP response:
```
Result from 14 / 2 = 7
---------------------------
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
        <soap:Body>
                <DivideResponse xmlns="http://tempuri.org/">
                        <DivideResult>7</DivideResult>
                </DivideResponse>
        </soap:Body>
</soap:Envelope>
```
