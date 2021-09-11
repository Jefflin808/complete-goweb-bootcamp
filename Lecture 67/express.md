# environment variables

express set 'env' environment variable default value 'development'

```js
console.log(app.get('env'));
```
    $: development

node.js sets lot environment variables too

```js
console.log(process.env);
```
    $: npm_xxx_xxx: ''
    $: .
    $: .
    $: .

# npm package dotenv

```js
const dotenv = require('dotenv');
dotenv.config({path: './config.env'}); //read all the configured variables
console.log(process.env);
```

