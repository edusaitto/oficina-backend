const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const crudCliente = require("./src/crudCliente.js");
const crudOficina = require("./src/crudOficina.js");
const crudVeiculo = require("./src/crudVeiculo.js");
const crudServico = require("./src/crudServico.js");
const crudOrcamento = require("./src/crudOrcamento.js");

const router = express.Router();
const jsonParser = bodyParser.json();
router.use(cors());

router.get(
  "/cliente",
  cors({ origin: "http://localhost:3000" }),
  jsonParser,
  new crudCliente().get
);
router.get(
  "/cliente/:cliente_id",
  cors({ origin: "http://localhost:3000" }),
  jsonParser,
  new crudCliente().getById
);
router.post(
  "/cliente",
  cors({ origin: "http://localhost:3000" }),
  jsonParser,
  new crudCliente().create
);
router.put(
  "/cliente",
  cors({ origin: "http://localhost:3000" }),
  jsonParser,
  new crudCliente().update
);
router.delete(
  "/cliente/:cliente_id",
  cors({ origin: "http://localhost:3000" }),
  jsonParser,
  new crudCliente().delete
);

router.get(
  "/oficina",
  cors({ origin: "http://localhost:3000" }),
  jsonParser,
  new crudOficina().get
);
router.get(
  "/oficina/:oficina_id",
  cors({ origin: "http://localhost:3000" }),
  jsonParser,
  new crudOficina().getById
);
router.get(
  "/mecanico",
  cors({ origin: "http://localhost:3000" }),
  jsonParser,
  new crudOficina().getMecanico
);
router.get(
  "/mecanico/:mecanico_id",
  cors({ origin: "http://localhost:3000" }),
  jsonParser,
  new crudOficina().getMecanicoById
);
router.post(
  "/oficina",
  cors({ origin: "http://localhost:3000" }),
  jsonParser,
  new crudOficina().create
);
router.put(
  "/oficina",
  cors({ origin: "http://localhost:3000" }),
  jsonParser,
  new crudOficina().update
);
router.delete(
  "/oficina/:oficina_id",
  cors({ origin: "http://localhost:3000" }),
  jsonParser,
  new crudOficina().delete
);

router.get(
  "/veiculo",
  cors({ origin: "http://localhost:3000" }),
  jsonParser,
  new crudVeiculo().get
);
router.get(
  "/veiculo/:veiculo_id",
  cors({ origin: "http://localhost:3000" }),
  jsonParser,
  new crudVeiculo().getById
);
router.get(
  "/veiculo/cliente/:cliente_id",
  cors({ origin: "http://localhost:3000" }),
  jsonParser,
  new crudVeiculo().getByClienteId
);
router.post(
  "/veiculo",
  cors({ origin: "http://localhost:3000" }),
  jsonParser,
  new crudVeiculo().create
);
router.put(
  "/veiculo",
  cors({ origin: "http://localhost:3000" }),
  jsonParser,
  new crudVeiculo().update
);
router.delete(
  "/veiculo/:veiculo_id",
  cors({ origin: "http://localhost:3000" }),
  jsonParser,
  new crudVeiculo().delete
);

router.get(
  "/servico",
  cors({ origin: "http://localhost:3000" }),
  jsonParser,
  new crudServico().get
);
router.get(
  "/servico/:servico_id",
  cors({ origin: "http://localhost:3000" }),
  jsonParser,
  new crudServico().getById
);
router.post(
  "/servico",
  cors({ origin: "http://localhost:3000" }),
  jsonParser,
  new crudServico().create
);
router.post(
  "/servico/orcamento",
  cors({ origin: "http://localhost:3000" }),
  jsonParser,
  new crudServico().createServicoOrcado
);
router.put(
  "/servico",
  cors({ origin: "http://localhost:3000" }),
  jsonParser,
  new crudServico().update
);
router.delete(
  "/servico/:servico_id",
  cors({ origin: "http://localhost:3000" }),
  jsonParser,
  new crudServico().delete
);

router.get(
  "/orcamento",
  cors({ origin: "http://localhost:3000" }),
  jsonParser,
  new crudOrcamento().get
);
router.get(
  "/orcamento/incompleto",
  cors({ origin: "http://localhost:3000" }),
  jsonParser,
  new crudOrcamento().getIncompletos
);
router.get(
  "/orcamento/:orcamento_id",
  cors({ origin: "http://localhost:3000" }),
  jsonParser,
  new crudOrcamento().getById
);
router.post(
  "/orcamento",
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    optionsSuccessStatus: 204,
  }),
  jsonParser,
  new crudOrcamento().create
);
router.post(
  "/orcamento/calcula",
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    optionsSuccessStatus: 204,
  }),
  jsonParser,
  new crudOrcamento().calculaOrcamento
);
router.put(
  "/orcamento/mecanico",
  cors({ origin: "http://localhost:3000" }),
  jsonParser,
  new crudOrcamento().updateMecanico
);
router.put(
  "/orcamento/valor",
  cors({ origin: "http://localhost:3000" }),
  jsonParser,
  new crudOrcamento().updateValorOrcamento
);
router.put(
  "/orcamento/aprovacao",
  cors({ origin: "http://localhost:3000" }),
  jsonParser,
  new crudOrcamento().updateAprovacao
);
router.put(
  "/orcamento",
  cors({ origin: "http://localhost:3000" }),
  jsonParser,
  new crudOrcamento().update
);
router.delete(
  "/orcamento/:orcamento_id",
  cors({ origin: "http://localhost:3000" }),
  jsonParser,
  new crudOrcamento().delete
);

module.exports = router;
