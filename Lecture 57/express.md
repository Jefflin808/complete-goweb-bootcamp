Refactoring

app
    .route('/api/v1/tours')
    .get(getAllTours)
    .post(createTour)

app
    .route('/api/v1/tours/:id)
    .get(getTour)
    .patch(updateTour)
    .delete(deleteTour)

