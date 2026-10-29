import express from "express";
import UserController from "../controllers/userController.js";
import VeiculosController from "../controllers/veiculoController.js";
import MovimentacaoController from "../controllers/movimentacaoController.js";
import admMiddleware from "../middlewares/admMiddleware.js";
import authMiddleware from "../middlewares/authMiddleware.js";
const router = express.Router();

//rotas de autenticação para login

//rotas de usuario
router.get("/usuario", authMiddleware, admMiddleware, UserController.findUsers); //lista todos os usuarios
router.post(
  "/usuario/register",
  authMiddleware,
  admMiddleware,
  UserController.userRegister,
);
//cadastrando usuario passando o tipo
router.post("/usuario/login", UserController.userLogin); //login do usuario

//rotas de veiculos
router.post(
  "/veiculos/placa/register",
  authMiddleware,
  VeiculosController.registerVeiculo,
);

// lista todos os veiculos
router.get("/veiculos", authMiddleware, VeiculosController.listVeiculos);

//busca pela placa
router.get(
  "/veiculos/placa/:placa",
  authMiddleware,
  VeiculosController.findPlacaVeiculo,
);


//rota de movimentacao
router.get(
  "/movimentacao",
  authMiddleware,
  MovimentacaoController.findMovimentacao,
);

router.post(
  "/movimentacao/register/entrada",
  authMiddleware,
  MovimentacaoController.registerEntrada,
);

router.post(
  "/movimentacao/register/saida",
  authMiddleware,
  MovimentacaoController.registerSaida,
);

router.post(
  "/movimentacao/edit/:id",
  authMiddleware,
  MovimentacaoController.editMovimentacao,
);

router.delete(
  "/movimentacao/:id",
  authMiddleware,
  admMiddleware,
  MovimentacaoController.deleteMovimentacao,
);
export default router;
