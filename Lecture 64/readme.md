# use param middleware

```
router.use('id', (req, res, next, val)=> {
    console.log('Tour id is ${val}');
    next();
})
```
It runs of before route with id , e.g. '/:id'