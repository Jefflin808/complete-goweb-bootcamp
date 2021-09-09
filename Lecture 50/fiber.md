app := fiber.New()

c *fiber.Ctx
    get
        .Status()
        .JSON()
    post
        .SendString()