import express from "express";
const app = express()

app.get('/usuario', (req, res) => {
    res.send("Meu back-end esta fincionando")
})

app.post('/usuario', (req, res) => {
    res.send("rota post ok")
})

app.listen(3000)