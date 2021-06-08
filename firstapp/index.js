const express = require('express');
const app = express();
const axios = require('axios');
app.get('/greeting',async (req,res)=>{
    const name = req.query['name'];
    const response = await axios.post(`http://localhost:3001?name=${name}`);
    console.log(response);
    res.status(200).send(response.data);
})
app.listen(3000,() => {
console.log("your server is running in port number 3000");
})


