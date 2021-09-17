//npm i axios --save
const axios = require('axios');
const url = 'https://api.github.com/users';

axios.get(url).then(res => {
    // do something with the response
}).catch(err => {
    // do something with the error
})