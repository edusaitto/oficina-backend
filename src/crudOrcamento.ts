const connectionOrcamento = require("../infra/connection");

interface IOrcamento {
  orcamento_id?: number;
  cliente_id?: number;
  veiculo_id?: number;
  mecanico_id?: number;
  valor_total?: string;
  aprovado?: boolean;
}

class crudOrcamento {
  async get(req, res) {
    const sql = "SELECT * FROM orcamentos_completos";
    await connectionOrcamento.query(sql, (err, results) => {
      if (err) {
        return err;
      }
      setTimeout(() => {
        return res.json(results);
      });
    });
  }

  async getIncompletos(req, res) {
    const sql = "SELECT * FROM orcamentos_incompletos";
    await connectionOrcamento.query(sql, (err, results) => {
      if (err) {
        return err;
      }
      setTimeout(() => {
        return res.json(results);
      });
    });
  }

  async getById(req, res) {
    const { orcamento_id } = req.params;
    const sql = "SELECT * FROM orcamentos WHERE orcamento_id=?";
    await connectionOrcamento.query(sql, [orcamento_id], (err, results) => {
      if (err) {
        return err;
      }
      setTimeout(() => {
        return res.json(results);
      });
    });
  }

  async create(req, res) {
    const body: IOrcamento = req.body;
    const { cliente_id, veiculo_id } = body;
    const sql =
      "INSERT INTO orcamentos (cliente_id, veiculo_id) VALUES (?,?)";
    await connectionOrcamento.query(
      sql,
      [cliente_id, veiculo_id],
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

  async calculaOrcamento(req, res) {
    const body: IOrcamento = req.body;
    const { orcamento_id } = body;
    const sql = "CALL prc_valor_total(?)";
    await connectionOrcamento.query(sql, [orcamento_id], (err, results) => {
      if (err) {
        return err;
      }
      setTimeout(() => {
        return res.json(results);
      });
    });
  }

  async updateMecanico(req, res) {
    const body: IOrcamento = req.body;
    const { orcamento_id, mecanico_id } = body;
    const sql =
      "UPDATE orcamentos SET mecanico_id=? WHERE orcamento_id=?";
    await connectionOrcamento.query(
      sql,
      [mecanico_id, orcamento_id],
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

  async updateValorOrcamento(req, res) {
    const body: IOrcamento = req.body;
    const { orcamento_id } = body;
    const sql =
      "CALL prc_valor_total (?)";
    await connectionOrcamento.query(
      sql,
      [orcamento_id],
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

  async updateAprovacao(req, res) {
    const body: IOrcamento = req.body;
    const { orcamento_id, aprovado } = body;
    const sql =
      "UPDATE orcamentos SET aprovado=? WHERE orcamento_id=?";
    await connectionOrcamento.query(
      sql,
      [aprovado, orcamento_id],
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
    const body: IOrcamento = req.body;
    const { orcamento_id, cliente_id, veiculo_id, mecanico_id, valor_total, aprovado } = body;
    const sql =
      "UPDATE orcamentos SET cliente_id=?, veiculo_id=?, mecanico_id=?, valor_total=?, aprovado=? WHERE orcamento_id=?";
    await connectionOrcamento.query(
      sql,
      [cliente_id, veiculo_id, mecanico_id, valor_total, aprovado, orcamento_id],
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
    const { orcamento_id } = req.params;
    const sql = "DELETE FROM orcamentos WHERE orcamento_id=?";
    await connectionOrcamento.query(sql, [orcamento_id], (err, results) => {
      if (err) {
        return err;
      }
      setTimeout(() => {
        return res.json(`Linhas afetadas: ${results.affectedRows}`);
      });
    });
  }
}

module.exports = crudOrcamento;
