const connectionOficina = require("../infra/connection");

interface IOficina {
  oficina_id?: number;
  nome: string;
  endereco: string;
}

class crudOficina {
  async get(req, res) {
    const sql = "SELECT * FROM oficina";
    await connectionOficina.query(sql, (err, results) => {
      if (err) {
        return err;
      }
      setTimeout(() => {
        return res.json(results);
      });
    });
  }

  async getById(req, res) {
    const { oficina_id } = req.params;
    const sql = "SELECT * FROM oficina WHERE oficina_id=?";
    await connectionOficina.query(sql, [oficina_id], (err, results) => {
      if (err) {
        return err;
      }
      setTimeout(() => {
        return res.json(results);
      });
    });
  }

  async getMecanico(req, res) {
    const sql = "SELECT * FROM mecanico";
    await connectionOficina.query(sql, (err, results) => {
      if (err) {
        return err;
      }
      setTimeout(() => {
        return res.json(results);
      });
    });
  }

  async getMecanicoById(req, res) {
    const { mecanico_id } = req.params;
    const sql = "SELECT * FROM mecanico WHERE mecanico_id=?";
    await connectionOficina.query(sql, [mecanico_id], (err, results) => {
      if (err) {
        return err;
      }
      setTimeout(() => {
        return res.json(results);
      });
    });
  }

  async create(req, res) {
    const body: IOficina = req.body;
    const { nome, endereco } = body;
    const sql = "INSERT INTO oficina (nome, endereco) VALUES (?,?)";
    await connectionOficina.query(sql, [nome, endereco], (err, results) => {
      if (err) {
        return err;
      }
      setTimeout(() => {
        return res.json(`Linhas afetadas: ${results.affectedRows}`);
      });
    });
  }

  async update(req, res) {
    const body: IOficina = req.body;
    const { oficina_id, nome, endereco } = body;
    const sql = "UPDATE oficina SET nome=?, endereco=? WHERE oficina_id=?";
    await connectionOficina.query(
      sql,
      [nome, endereco, oficina_id],
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
    const { oficina_id } = req.params;
    const sql = "DELETE FROM oficina WHERE oficina_id=?";
    await connectionOficina.query(sql, [oficina_id], (err, results) => {
      if (err) {
        return err;
      }
      setTimeout(() => {
        return res.json(`Linhas afetadas: ${results.affectedRows}`);
      });
    });
  }
}

module.exports = crudOficina;
