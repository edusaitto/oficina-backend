var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var connectionVeiculo = require("../infra/connection");
var crudVeiculo = /** @class */ (function () {
    function crudVeiculo() {
    }
    crudVeiculo.prototype.get = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var sql;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sql = "SELECT veiculo_id, nome, placa, marca, modelo, ano FROM veiculos_clientes_nomes";
                        return [4 /*yield*/, connectionVeiculo.query(sql, function (err, results) {
                                if (err) {
                                    return err;
                                }
                                setTimeout(function () {
                                    return res.json(results);
                                });
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    crudVeiculo.prototype.getById = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var veiculo_id, sql;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        veiculo_id = req.params.veiculo_id;
                        sql = "SELECT * FROM veiculos_clientes_nomes WHERE veiculo_id=?";
                        return [4 /*yield*/, connectionVeiculo.query(sql, [veiculo_id], function (err, results) {
                                if (err) {
                                    return err;
                                }
                                setTimeout(function () {
                                    return res.json(results);
                                });
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    crudVeiculo.prototype.getByClienteId = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var cliente_id, sql;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cliente_id = req.params.cliente_id;
                        sql = "SELECT * FROM veiculo WHERE cliente_id=?";
                        return [4 /*yield*/, connectionVeiculo.query(sql, [cliente_id], function (err, results) {
                                if (err) {
                                    return err;
                                }
                                setTimeout(function () {
                                    return res.json(results);
                                });
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    crudVeiculo.prototype.create = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var body, cliente_id, placa, marca, modelo, ano, sql;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        body = req.body;
                        cliente_id = body.cliente_id, placa = body.placa, marca = body.marca, modelo = body.modelo, ano = body.ano;
                        sql = "INSERT INTO veiculo (cliente_id, placa, marca, modelo, ano) VALUES (?,?,?,?,?)";
                        return [4 /*yield*/, connectionVeiculo.query(sql, [cliente_id, placa, marca, modelo, ano], function (err, results) {
                                if (err) {
                                    return err;
                                }
                                setTimeout(function () {
                                    return res.json("Linhas afetadas: ".concat(results.affectedRows));
                                });
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    crudVeiculo.prototype.update = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var body, veiculo_id, cliente_id, placa, marca, modelo, ano, sql;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        body = req.body;
                        veiculo_id = body.veiculo_id, cliente_id = body.cliente_id, placa = body.placa, marca = body.marca, modelo = body.modelo, ano = body.ano;
                        sql = "UPDATE veiculo SET cliente_id=?, placa=?, marca=?, modelo=?, ano=? WHERE veiculo_id=?";
                        return [4 /*yield*/, connectionVeiculo.query(sql, [cliente_id, placa, marca, modelo, ano, veiculo_id], function (err, results) {
                                if (err) {
                                    return err;
                                }
                                setTimeout(function () {
                                    return res.json("Linhas afetadas: ".concat(results.affectedRows));
                                });
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    crudVeiculo.prototype["delete"] = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var veiculo_id, sql;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        veiculo_id = req.params.veiculo_id;
                        sql = "DELETE FROM veiculo WHERE veiculo_id=?";
                        return [4 /*yield*/, connectionVeiculo.query(sql, [veiculo_id], function (err, results) {
                                if (err) {
                                    return err;
                                }
                                setTimeout(function () {
                                    return res.json("Linhas afetadas: ".concat(results.affectedRows));
                                });
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return crudVeiculo;
}());
module.exports = crudVeiculo;
