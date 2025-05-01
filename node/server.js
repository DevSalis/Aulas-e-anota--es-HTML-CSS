import express from "express";
const app = express();

app.use(express.json());
const user = [];

app.get("/usuario", (req, res) => {
  res.status(200).json(user);
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
