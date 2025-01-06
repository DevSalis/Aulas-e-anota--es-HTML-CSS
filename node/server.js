import express from "express";
const app = express()

app.use(express.json())

app.get('/usuario/:abacate2', (req, res) => {
    console.log(req)
    res.send("Meu back-end esta fincionando")
})

app.post('/usuario', (req, res) => {
    console.log(req)
    res.send("rota post ok")
})

app.listen(3000)