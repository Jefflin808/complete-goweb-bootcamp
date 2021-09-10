get /api/v1/tours/:id
    req
        .params // {id: '5'}

get /api/v1/tours/:id/:x/:y
    req
        .params // {id: '5', x:'3', y:'4'}

get /api/v1/tours/:id/:x/:y?  <-- ? optional
    req
        .params // {id: '5', x:'3', y:undefined}

