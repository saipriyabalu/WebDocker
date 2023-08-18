const express = require('express')
const app = express()
port = 3000

app.get('/', function (req, res) {
    res.send('<h1>Hello World from Node.js!</h1> <br> <p>Solartis</p>')
})

app.listen(port, function() {
    console.log('Hello World app listening on port ' + port);
})
                    