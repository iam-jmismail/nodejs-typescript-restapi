import { Request, Response } from "express";
import axios from "axios";

const getTodos = (req: Request, res: Response) => {
  axios
    .get("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

export { getTodos };
