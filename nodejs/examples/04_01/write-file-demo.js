var fs = require('fs');
somethingStr = '{"name":"karthick"}';
fs.writeFile('some.json', somthingStr);
var someFormat = {
    name: "test"
}
fs.writeFile('someformat', JSON.stringify(someFormat));