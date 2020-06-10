const express = require("express")
const server = express()

//pegar o banco de dados
const db = require("./database/db")

//configurar pasta public
server.use(express.static("public"))

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

server.get("/create-point", (rec, res) => {
    return res.render("create-point.html")
})

server.get("/search", (rec, res) => {
    //pegar os dados do banco de dados

    db.all(`SELECT * FROM PLACES`, function(err, rows){
        if(err){
            return console.log(err)
        }
        //mostrar a página html com osdadosdo banco de dados
        return res.render("search-results.html", {places: rows})
    })

    
})


//Ligar o Servidor
server.listen(3000)