import express, { Application, Request, Response, NextFunction } from "express";

const app: Application = express();
const port: Number = 5000;

app.get("/health", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ status: 200 });
});

app.listen(port, () => console.log(`Server is listening on port ${port}`));
