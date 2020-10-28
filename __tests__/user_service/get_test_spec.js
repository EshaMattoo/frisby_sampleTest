const frisby = require("C:/Users/EshaVeenish/Desktop/Veenish/nodejs/nodeproject/node-testrunold/frisby-master/lib/frisby");
const config = require('../../resources/config');

    frisby.create('GET data requiring login status authentication')
      .get('https://stackoverflow.com/')
      .expectStatus(200)
      .expectHeader('Content-Type', 'text/html; charset=utf-8')
      .expectJSON({ /* whatever data you expect */ })
    .toss();

    
frisby.create('GET data requiring login status authentication')
      .get('https://stackoverflow.com/')
      .expectStatus(200)
      .expectHeader('Content-Type', 'text/html; charset=utf-8')
      .expectJSON({ /* whatever data you expect */ })
    .toss();


frisby.create('GET data requiring login status authentication')
      .get('https://stackoverflow.com/')
      .expectStatus(200)
      .expectHeader('Content-Type', 'json')
      .expectJSON({ /* whatever data you expect */ })
    .toss();


frisby.create('POST login details')
  .post('https://stackoverflow.com/',
    { username: 'eshaaparna@gmail.com', password: '******' },
    { json: true },
    { headers: { 'Content-Type': 'text/html; charset=utf-8' }})
  .expectJSONTypes({
    token: String
  })

   frisby.create('validate post link')
      .get('https://stackoverflow.com/tags')
      .expectStatus(200)
      .expectHeader('Content-Type', 'text/html; charset=utf-8')
      .expectJSON({ /* whatever data you expect */ })
    .toss();

frisby.create('validate questions link')
      .get('https://stackoverflow.com/questions')
      .expectStatus(200)
      .expectHeader('Content-Type', 'text/html; charset=utf-8')
      .expectJSON({ /* whatever data you expect */ })
    .toss();

