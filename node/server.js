import express from "express";
const app = express()

app.get('/usuario', (req, res) => {
    res.send("Meu back-end esta fincionando")
})

app.listen(3000)