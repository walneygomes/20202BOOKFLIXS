const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const expressJwt = require('express-jwt');
const cors = require('cors');

mongoose.connect('mongodb://localhost:27017/bookflix',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(bodyParser.json());
app.use(cors());

//resolver todos os caminhos de diretorios
app.use(express.static(__dirname +'./bookflikx/frontendd'));



const authRouter = require('./src/routes/auth-route');
app.use('/auth', authRouter);

const userRouter = require('./src/routes/user-route');
app.use('/usuarios', userRouter);

const productRouter = require('./src/routes/livro-route');
app.use('/livro', productRouter);

app.listen(3001, function(){
    console.log(' Port 3001 esta ligada.');
});