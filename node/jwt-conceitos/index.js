const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cors());
app.use(express.json());

const segredo = "segredo_super_secreto";

// Geração de token
app.post("/login", (req, res) => {
  const { nome } = req.body;

  if (!nome) {
    return res.status(400).json({ erro: "Nome é obrigatório" });
  }

  const token = jwt.sign({ nome }, segredo, { expiresIn: "2m" }); // 2 minutos
  res.json({ token });
});

// Rota protegida
app.get("/protegido", (req, res) => {
  const auth = req.headers.authorization;

  if (!auth) return res.status(401).json({ erro: "Token ausente" });

  const token = auth.split(" ")[1];

  try {
    const decoded = jwt.verify(token, segredo);
    res.json({ msg: "Acesso autorizado!", payload: decoded });
  } catch (err) {
    res.status(401).json({ erro: "Token inválido ou expirado" });
  }
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
