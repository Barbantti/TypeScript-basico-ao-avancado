//console.log("Express + TS");
import express, { Request, Response } from "express";
import { NextFunction } from "express-serve-static-core";

const app = express();

app.use(express.json());

// Check is allowed to access restrict area
const showPath = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.path);
  next();
};

app.get("/", (req, res) => {
  return res.send("Its on!");
});

app.post("/api/product", (req, res) => {
  console.log(req.body);

  return res.send("Produto adicionado!");
});

app.all("/api/product/check", (req, res) => {
  if (req.method === "POST") {
    return res.send("Inseriu algum registro!");
  } else if (req.method === "GET") {
    return res.send("Leu algum registro");
  } else {
    return res.send("Nao podemos realizar esta operação!");
  }
});

app.get("/api/interfaces", (req: Request, res: Response) => {
  return res.send("Utilizando as interfaces!");
});

app.get("/api/json", (req: Request, res: Response) => {
  return res.json({
    name: "Shirt",
    price: 30.0,
    color: "Blue",
    sizes: ["P", "M", "G"],
  });
});

app.get("/api/product/:id", (req: Request, res: Response) => {
  console.log(req.params);

  const id = req.params.id;

  if (id === "1") {
    const product = {
      id: 1,
      name: "Bone",
      price: 10,
    };

    return res.json(product);
  } else {
    return res.send("Produto nao encontrado!");
  }
});

app.get("/api/product/:id/review/:reviewId", (req: Request, res: Response) => {
  console.log(req.params);

  const productId = req.params.id;
  const reviewId = req.params.reviewId;

  return res.send(`Acessando a review ${reviewId} do produto ${productId}`);
});

const getUser = (req: Request, res: Response) => {
  console.log(`Resgatando o usuário com id: ${req.params.id}`);

  return res.send("O usuário foi encontrado!");
};

app.get("/api/user/:id", getUser);

// Middleware
const checkUser = (req: Request, res: Response, next: NextFunction) => {
  if (req.params.id === "1") {
    console.log("Pode seguir!");
    next();
  } else {
    return console.log("Acesso restrito!");
  }
};

app.get("/api/user/:id/access", checkUser, (req: Request, res: Response) => {
  return res.send("Bem vindo a area administrativa!");
});

app.get(
  "/api/user/:id/details/:name",
  (
    req: Request<{ id: string; name: string }>,
    res: Response<{ status: boolean }>
  ) => {
    console.log(`ID: ${req.params.id}`);
    console.log(`Name: ${req.params.name}`);

    return res.json({ status: true });
  }
);

app.get("/api/error", (req: Request, res: Response) => {
    try {
        
        throw new Error("Algo de errado nao esta certo!")
    } catch (error: any) {
        console.log("Deu M!");
        res.json({msg: error.message})
    }
})

app.listen(3000, () => {
  console.log("Aplicação de TS + Express on!");
});
