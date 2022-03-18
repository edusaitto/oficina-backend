class Database {
    init(connection){
        this.connection = connection;
        this.createDatabase();
    }

    createDatabase(){
        const sql = `CREATE DATABASE IF NOT EXISTS oficina`;
        this.connection.query(sql, (err) => {
            if(err) {
                console.log('Erro ao tentar criar BD');
            } else {
                console.log('BD CONECTADO')
            }
        });
    }
}

module.exports = Database;