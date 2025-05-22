import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

app.get("/usuario", async (req, res) => {
  const user = await prisma.user.findMany();
  res.status(200).json(user);
});

app.post("/usuario", async (req, res) => {
  const user = await prisma.user.create({
    data: {
      email: req.body.email,
      age: req.body.age,
      name: req.body.name,
    },
  });

  res.status(201).json(user);
});

app.put("/usuario/:id", async (req, res) => {
  const user = await prisma.user.update({
    where: {
      id: req.params.id,
    },
    data: {
      email: req.body.email,
      age: req.body.age,
      name: req.body.name,
    },
  });

  res.status(200).json(user);
});

app.delete("/usuario/:id", async (req, res) => {
  await prisma.user.delete({
    where: {
      id: req.params.id,
    },
  });

  res.status(409).json({ message: "Usuario deletado com sucesso" });
});

app.listen(3000);

/*
username mongoDb: philipcost
senha: H1bfP4Zk0jiQbB7R
*/

/*
username mongoDb: devsilasfrontback
senha: oPeUktAEe9AHK4ZT
*/
