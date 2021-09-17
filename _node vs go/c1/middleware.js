const express = require('express');
const app = express();

// add server_name middleware
function authenticate((req, res, next) => {
    const secret = process.ENV.SECRET;
    if (secret == "") {
        return res.send("secret not found");
    }

    if (!isAuthenticated(req, secret)) {
        return res.send("invalid authentication");
    }

    return next();
})

// use middleware
app.get('/', authenticate, (req, res) => {
  res.send('Hello from Express!');
})

app.listen(3000, err => {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log('`server is listening on 3000'`);
})