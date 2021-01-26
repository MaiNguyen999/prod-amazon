var express = require('express');
var {data} = require('./data');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'build')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get("/api/products", (req, res)=>{
    res.send(data.products);
})

app.get("/api/products/:id", (req, res)=>{
    const productId = req.params.id;
    if(productId)
        res.send(data.products.find(x=>x.id===productId));
    else
        res.status(404).send({msg: "Product not found"});
})

app.listen(process.env.PORT || 5000, () => {console.log("Server started at http://localhost:5000")})