const express = require('express');
const axios = require('axios');
const { numberRouter } = require('./routes/numberRouter');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/numbers',numberRouter)

app.listen(PORT,function(){
    console.log(`running on port ${PORT}`);
})