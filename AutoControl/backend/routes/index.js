import express from "express";
import router from "./autoControlRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    let message = "Servidor rodando!";
    res.status(200).send(message);
  });
  app.use(express.json(), router);
};

export default routes;
