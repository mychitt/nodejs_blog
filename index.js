// import express
const express = require('express')
const app = express()
const port = 3000

//route
app.get('/', (req, res) => {
    var a = 1;
    var b = 2;

    var sum = a + b;
  res.send('sửa đường dẫn rồi nè')
})

// 127.0.0.1

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})