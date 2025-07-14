import express from "express";
import { PrismaClient } from "@prisma/client";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

// Configuração do Swagger
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Usuários",
      version: "1.0.0",
      description: "CRUD de usuários com Express e Prisma",
    },
  },
  apis: ["./server.js"], // ✅ coloque o caminho certo para seu arquivo com os comentários Swagger
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * /usuario:
 *   get:
 *     summary: Lista todos os usuários
 *     responses:
 *       200:
 *         description: Lista de usuários
 */
app.get("/usuario", async (req, res) => {
  const user = await prisma.user.findMany();
  res.status(200).json(user);
});

/**
 * @swagger
 * /usuario:
 *   post:
 *     summary: Cria um novo usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               age:
 *                 type: integer
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuário criado
 */
app.post("/usuario", async (req, res) => {
  try {
    const { age } = req.body;
    if (age < 18) throw new Error("Idade deve ser maior ou igual a 18 anos");

    const user = await prisma.user.create({
      data: {
        email: req.body.email,
        age: req.body.age,
        name: req.body.name,
      },
    });

    res.status(201).json(user);
  } catch (err) {
    return res.status(400).json(err.message);
  }
});

/**
 * @swagger
 * /usuario/{id}:
 *   put:
 *     summary: Atualiza um usuário
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               age:
 *                 type: integer
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuário atualizado
 */
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

/**
 * @swagger
 * /usuario/{id}:
 *   delete:
 *     summary: Deleta um usuário
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do usuário
 *     responses:
 *       200:
 *         description: Usuário deletado com sucesso
 */
app.delete("/usuario/:id", async (req, res) => {
  await prisma.user.delete({
    where: {
      id: req.params.id,
    },
  });

  res.status(200).json({ message: "Usuário deletado com sucesso" });
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
  console.log("Documentação Swagger em http://localhost:3000/api-docs");
});
