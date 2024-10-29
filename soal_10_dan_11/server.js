const express = require('express')
const app = express()
const port = 8080

app.use(express.json())

const checkHeaderMiddleware = (req, res, next) => {
    const userId = req.headers['user-id']
    const scope = req.headers['scope']

    if(userId !== 'ifabula' && scope !== 'user')
    {
        console.log(`Blocked request due to invalid headers`)
        res.status(401).json({
            responseCode: 401,
            responseMessage: "UNAUTHORIZED"
        })
        return;
    }

    next();
}

app.get('/', (req, res) => {
    res.send("Server's running!")
})

app.get('/api/v1/getData', checkHeaderMiddleware, (req, res) => {
    console.log(`Received GET request on /api/v1/getData`)

    res.json({
        responseCode: "200",
        responseMessage: "SUCCESS",
        data: "Hallo!"
    })
})

app.post('/api/v1/postData', checkHeaderMiddleware, (req, res) => {
    console.log(`Received POST request on /api/v1/postData with payload: ${JSON.stringify(req.body)}`)

    res.json({
        responseCode: "200",
        responseMessage: "SUCCESS",
        data: `Data received successfully! echo: ${JSON.stringify(req.body)}`
    })
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})