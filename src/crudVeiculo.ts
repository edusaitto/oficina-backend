const connectionVeiculo = require("../infra/connection");

interface IVeiculo {
  veiculo_id?: number;
  cliente_id: number;
  modelo_id: number;
  placa: string;
  ano: string;
}

class crudVeiculo {
  async get(req, res) {
    const sql = "SELECT veiculo_id, nome, placa, marca, modelo, ano FROM veiculos_clientes_nomes";
    await connectionVeiculo.query(sql, (err, results) => {
      if (err) {
        return err;
      }
      setTimeout(() => {
        return res.json(results);
      });
    });
  }

  async getById(req, res) {
    const { veiculo_id } = req.params;
    const sql = "SELECT * FROM veiculos_clientes_nomes WHERE veiculo_id=?";
    await connectionVeiculo.query(sql, [veiculo_id], (err, results) => {
      if (err) {
        return err;
      }
      setTimeout(() => {
        return res.json(results);
      });
    });
  }

  async getByClienteId(req, res) {
    const { cliente_id } = req.params;
    const sql = "SELECT * FROM veiculo WHERE cliente_id=?";
    await connectionVeiculo.query(sql, [cliente_id], (err, results) => {
      if (err) {
        return err;
      }
      setTimeout(() => {
        return res.json(results);
      });
    });
  }

  async getModelos(req, res) {
    const sql = "SELECT * FROM modelo";
    await connectionVeiculo.query(sql, (err, results) => {
      if (err) {
        return err;
      }
      setTimeout(() => {
        return res.json(results);
      });
    });
  }

  async create(req, res) {
    const body: IVeiculo = req.body;
    const { cliente_id, modelo_id, placa, ano } = body;
    const sql =
      "INSERT INTO veiculo (cliente_id, modelo_id, placa, ano) VALUES (?,?,?,?)";
    await connectionVeiculo.query(
      sql,
      [cliente_id, modelo_id, placa, ano],
      (err, results) => {
        if (err) {
          return err;
        }
        setTimeout(() => {
          return res.json(`Linhas afetadas: ${results.affectedRows}`);
        });
      }
    );
  }

  async update(req, res) {
    const body: IVeiculo = req.body;
    const { veiculo_id, cliente_id, modelo_id, placa, ano } = body;
    const sql =
      "UPDATE veiculo SET cliente_id=?, modelo_id=?, placa=?, ano=? WHERE veiculo_id=?";
    await connectionVeiculo.query(
      sql,
      [cliente_id, modelo_id, placa, ano, veiculo_id],
      (err, results) => {
        if (err) {
          return err;
        }
        setTimeout(() => {
          return res.json(`Linhas afetadas: ${results.affectedRows}`);
        });
      }
    );
  }

  async delete(req, res) {
    const { veiculo_id } = req.params;
    const sql = "DELETE FROM veiculo WHERE veiculo_id=?";
    await connectionVeiculo.query(sql, [veiculo_id], (err, results) => {
      if (err) {
        return err;
      }
      setTimeout(() => {
        return res.json(`Linhas afetadas: ${results.affectedRows}`);
      });
    });
  }
}

module.exports = crudVeiculo;
