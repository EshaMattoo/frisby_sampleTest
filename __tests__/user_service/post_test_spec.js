const frisby   = require('frisby');
const payloads = require('../../models/payloads');
const config   = require('../../resources/config')
var fs = require('C:/Users/EshaVeenish/Desktop/Veenish/nodejs/nodeproject/frisby-test-framework-master/frisby-test-framework-master/node_modules/fs.realpath')
var jsonSchemaFile = jsonSchema;
let authToken;
frisby
.setup({
  request: {
    headers:{'Accept': 'application/json'}
  }
});

//post request > parse the response 
it('should create session', function() {
    return frisby
        .post('https://stackoverflow.com/', '10000')
        .expect('status', 200)
        .then(function (res) {
            var data        = fs.readFileSync(jsonSchemaFile, 'utf-8');
           // var data = JSON.parse(res['body']);
            authToken = Buffer.from(data.token);
    });
});