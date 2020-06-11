const express = require("express")
const server = express()

//pegar o banco de dados
const db = require("./database/db")

//configurar pasta public
server.use(express.static("public"))

//habilitar o uso do req.body na aplicação
server.use(express.urlencoded({ extended: true }))

//utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

//configurar caminhos da minha aplicação - página inicial
//rec = requisição = pedido/pergunta
//res = resposta = resposta
server.get("/", (rec, res) => {
    return res.render("index.html", {title: "Um título"})
})

server.get("/create-point", (req, res) => {
    console.log(req.query)
    return res.render("create-point.html")
})

server.post("/savepoint", (req, res) => {
    //console.log(req.body)

    //inserir dados no banco

    const query = `
    INSERT INTO PLACES (
        IMAGE,
        NAME,
        ADDRESS,
        NUMBER,
        STATE,
        CITY,
        ITEMS
    ) VALUES ( ?,?,?,?,?,?,?);
    `

    const values = [
        req.body.img,
        req.body.name,
        req.body.address,
        req.body.number,
        req.body.state,
        req.body.city,
        req.body.itens
    ]

    function afterInsertDate(err){
        if(err){
            console.log(err)
            return res.send("Erro no cadastro!")
        }

        return res.render("create-point.html", { saved: true })
    }
    db.run(
       query, values, afterInsertDate)

    
})

server.get("/search", (req, res) => {
    //pegar os dados do banco de dados
    db.all(`SELECT * FROM PLACES`, function(err, rows){
        if(err){
            return console.log(err)
        }
        const total = rows.length
        //mostrar a página html com osdadosdo banco de dados
        return res.render("search-results.html", {places: rows, total: total})
    })    
})

//Ligar o Servidor
server.listen(3000)