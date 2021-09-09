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