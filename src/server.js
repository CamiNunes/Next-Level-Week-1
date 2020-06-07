const express = require("express")
const server = express()

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
    return res.render("search-results.html")
})


//Ligar o Servidor
server.listen(3000)