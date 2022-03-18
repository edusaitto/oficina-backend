const connectionCliente = require("../infra/connection");

interface ICliente {
  cliente_id?: number;
  nome: string;
  cpf: string;
  telefone: string;
  endereco: string;
}

class crudCliente {
  async get(req, res) {
    const sql = "SELECT * FROM cliente";
    await connectionCliente.query(sql, (err, results) => {
      if (err) {
        return err;
      }
      setTimeout(() => {
        return res.json(results);
      });
    });
  }

  async getById(req, res) {
    const { cliente_id } = req.params;
    const sql = "SELECT * FROM cliente WHERE cliente_id=?";
    await connectionCliente.query(sql, [cliente_id], (err, results) => {
      if (err) {
        return err;
      }
      setTimeout(() => {
        return res.json(results);
      });
    });
  }

  async create(req, res) {
    const body: ICliente = req.body;
    const { nome, cpf, telefone, endereco } = body;
    const sql =
      "INSERT INTO cliente (nome, cpf, telefone, endereco) VALUES (?,?,?,?)";
    await connectionCliente.query(
      sql,
      [nome, cpf, telefone, endereco],
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
    const body: ICliente = req.body;
    const { cliente_id, nome, cpf, telefone, endereco } = body;
    const sql =
      "UPDATE cliente SET nome=?, cpf=?, telefone=?, endereco=? WHERE cliente_id=?";
    await connectionCliente.query(
      sql,
      [nome, cpf, telefone, endereco, cliente_id],
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
    const { cliente_id } = req.params;
    const sql = "DELETE FROM cliente WHERE cliente_id=?";
    await connectionCliente.query(sql, [cliente_id], (err, results) => {
      if (err) {
        return err;
      }
      setTimeout(() => {
        return res.json(`Linhas afetadas: ${results.affectedRows}`);
      });
    });
  }
}

module.exports = crudCliente;
