// https://stackoverflow.com/questions/376373/pretty-printing-xml-with-javascript
function formatXml(xml, tab = '\t') { // tab = optional indent value, default is tab (\t)
  let formatted = '';
  let indent = '';
  xml.split(/>\s*</).forEach((node) => {
    if (node.match(/^\/\w/)) {
      indent = indent.substring(tab.length); // Decrease indent by one 'tab'
    }

    formatted += `${indent}<${node}>\r\n`;

    if (node.match(/^<?\w[^>]*[^\/]$/)) {
      indent += tab;  // Increase indent
    }
  });

  return formatted.substring(1, formatted.length - 3);
}
