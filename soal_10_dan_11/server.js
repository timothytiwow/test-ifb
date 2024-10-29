const express = require('express')
const app = express()
const port = 8080

app.use(express.json())

app.get('/', (req, res) => {
    res.send("Server's running!")
})

app.get('/api/v1/getData', (req, res) => {
    console.log(`Received GET request on /api/v1/getData`)

    res.json({
        status: "200",
        data: "Hallo!"
    })
})

app.post('/api/v1/postData', (req, res) => {
    console.log(`Received POST request on /api/v1/postData with payload: ${JSON.stringify(req.body)}`)

    res.json({
        status: "200",
        data: `Data received successfully! echo: ${JSON.stringify(req.body)}`
    })
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})