const { log } = require('console');
const express = require('express');
const app = express();
const user = require('./router/userRouter');

app.use('/',user);

let PORT = 3000;
app.listen(PORT , ()=>{
    log(`http://localhost:3000`)
})