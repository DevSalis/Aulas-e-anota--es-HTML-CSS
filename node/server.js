import express from "express";
const app = express()
const user = []

app.use(express.json())

app.get('/usuario', (req, res) => {
    
    res.status(200).json(user)
})

app.post('/usuario', (req, res) => {
    user.push(req.body)
    res.status(201).json({message: "Usuário cadastrado com sucesso"})
})

app.listen(3000)