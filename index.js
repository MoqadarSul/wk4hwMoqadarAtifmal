let express = require("express")
let app = express();

app.use(express.json())
app.use(express.static("public"))

app.get("/hello", (req, res)=>{
    res.send("<h1>Hello Express JS</h1>")
})

app.get("/user", (req,res)=>{
    let firstName = req.query.fnm;
    let lastName = req.query.lnm;

    let response = {
        firstName,
        lastName
    }
    res.send(response)
})

app.post("/user/:fnm/:lnm", (req,res)=>{
    firstName = req.params.fnm;
    lastName = req.params.lnm;

    let response = {
        firstName,
        lastName
    }
    res.send(response)
})

let server = app.listen(8089, ()=>{
    let host = server.address().address 
    let port = server.address().port
    console.log("Server running at http://%s:%s", host, port)
})