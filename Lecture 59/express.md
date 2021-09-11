# creating our own middleware

```js
app.use((req, res, next)=>{
    console.log('hello from the middleware');
    next();
})
```
If this middleware comes after router "getAllTours", then it is not going to be  called. Because the router call ends the request cycle
