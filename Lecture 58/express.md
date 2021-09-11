Everything is middleware (even routers)

REQUEST Middleware -> Middleware ->.... -> Middleware -> RESPONSE
        Next()        Next()               res.send() 

        e.g.parsing   e.g. logging         e.g. router    
        body

The order of the code matters a lot in express

