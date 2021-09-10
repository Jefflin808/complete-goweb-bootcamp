write file: ./starter/dev-data/data/tours-simple.json

app.use(express.json()) //json middleware

Post
    req
        .body 
    res
        .status(201)
        .json(
            status: 'success'
            data: {
                tour: newTour
            }
        )
    res
        .send()