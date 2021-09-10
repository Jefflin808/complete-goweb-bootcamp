read file: ./starter/dev-data/data/tours-simple.json

get
    .status()
    .json():
        status: 'success'
        results: tours.length
        data: {
            "tours": [{
                xxx
            }, {
                xxx
            }]
        }