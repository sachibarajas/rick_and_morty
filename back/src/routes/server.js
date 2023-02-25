const http = require('http')
const PORT = 3001
const data = require('../utils/data')
http.createServer((req,res)=>{
    console.log(`server up in port: ${PORT}`);
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.url.includes('rickandmorty/character')) {
        let id = req.url.split('/')
        id = id[id.length-1]
        let user = data.find(char=>char.id===id)
        res.writeHead(200,{'Content-Type': 'application/json'})
        res.end(user)
    }
}).listen(PORT,'localhost')