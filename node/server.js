import express from "express";
const app = express();
const user = [];

app.use(express.json());

app.get("/usuario/:abacate", (req, res) => {
  console.log(req);
  res.status(200).json({ mensagem: "teste get" });
});

app.post("/usuario", (req, res) => {
  user.push(req.body);
  res.status(201).json({ message: "Usuário cadastrado com sucesso" });
});

app.listen(3000);

/*
username mongoDb: philipcost
senha: H1bfP4Zk0jiQbB7R
*/
