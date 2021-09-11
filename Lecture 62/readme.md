# use sub router

```js
app.use('/api/v1/tour', tourRouter);
const tourRouter = express.Router();
tourRouter
    .route('/)
    .get(getAllTours)
    .post(createTour)
```