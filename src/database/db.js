//importar dependencia do sqlite3
const sqlite = require("sqlite3").verbose()
//criar o obj q irá fazer operações no  banco de dados
const db = new sqlite.Database("./src/database/database.db")

module.exports = db

//utilizar o obj de banco de dados para as operações
// db.serialize(() => {

//     Criar tabela
//     db.run(
//         `CREATE TABLE IF NOT EXISTS PLACES (
//             ID INTERGER PRIMARY KEY AUTOINCREMENT,
//             IMAGE TEXT,
//             NAME TEXT,
//             ADDRESS TEXT,
//             NUMBER TEXT,
//             STATE TEXT,
//             CITY TEXT,
//             ITEMS TEXT
//         );`
//     )
//     Inserir dados na tabela
//     const query = `
//     INSERT INTO PLACES (
//         IMAGE,
//         NAME,
//         ADDRESS,
//         NUMBER,
//         STATE,
//         CITY,
//         ITEMS
//     ) VALUES (
//         ?,
//         ?,
//         ?,
//         ?,
//         ?,
//         ?,
//         ?
//     );`

//     const values = ``

//     function afterInsertDate(err){
//         if(err){
//             return console.log(err)
//         }
//         console.log("Cadastrado com sucesso")
//         console.log(this)
//     }
//     db.run(
//        query, values, afterInsertDate)

//     Consultar os dados na tabela
//     db.all(`SELECT * FROM PLACES`, function(err, rows){
//         if(err){
//             return console.log(err)
//         }
//         console.log("Seus registros")
//         console.log(rows)
//     })
//     Deletar um dado da tabela
//     db.run(`DELETE FROM PLACES WHERE ID = ?`, [1], function(err){
//         if(err){
//             return console.log(err)
//         }
//     })
//     console.log("Registro deletado com sucesso.")

// })