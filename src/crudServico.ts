const connectionServico = require("../infra/connection");

interface IServico {
  servico_id?: number;
  tipo_servico: string;
  descricao: string;
  valor: string;
}

interface IServicoOrcado {
  orcamento_id: number,
  servico_id: number
}

class crudServico {
  async get(req, res) {
    const sql = "SELECT * FROM servicos";
    await connectionServico.query(sql, (err, results) => {
      if (err) {
        return err;
      }
      setTimeout(() => {
        return res.json(results);
      });
    });
  }

  async getById(req, res) {
    const { servico_id } = req.params;
    const sql = "SELECT * FROM servicos WHERE servico_id=?";
    await connectionServico.query(sql, [servico_id], (err, results) => {
      if (err) {
        return err;
      }
      setTimeout(() => {
        return res.json(results);
      });
    });
  }

  async create(req, res) {
    const body: IServico = req.body;
    const { tipo_servico, descricao, valor } = body;
    const sql =
      "INSERT INTO servicos (tipo_servico, descricao, valor) VALUES (?,?,?)";
    await connectionServico.query(
      sql,
      [tipo_servico, descricao, valor],
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

  async createServicoOrcado(req, res) {
    const body: IServicoOrcado = req.body;
    const { orcamento_id, servico_id } = body;
    const sql =
      "INSERT INTO servicos_orcados (orcamento_id, servico_id) VALUES (?,?)";
    await connectionServico.query(
      sql,
      [orcamento_id, servico_id],
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
    const body: IServico = req.body;
    const { servico_id, tipo_servico, descricao, valor } = body;
    const sql =
      "UPDATE servicos SET tipo_servico=?, descricao=?, valor=? WHERE servico_id=?";
    await connectionServico.query(
      sql,
      [tipo_servico, descricao, valor, servico_id],
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
    const { servico_id } = req.params;
    const sql = "DELETE FROM servicos WHERE servico_id=?";
    await connectionServico.query(sql, [servico_id], (err, results) => {
      if (err) {
        return err;
      }
      setTimeout(() => {
        return res.json(`Linhas afetadas: ${results.affectedRows}`);
      });
    });
  }
}

module.exports = crudServico;
