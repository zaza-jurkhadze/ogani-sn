const express = require('express');

const morgan = require('morgan');
const chocolateRouter = require('./routes/chocolateRoures')

const app = express(); 

app.use(express.json());
app.use((req,res,next) => {
    req.requestTime = new Date().toISOString();
    next();
});
app.use(morgan('dev'));

app.use('/api/v1/chocolates',chocolateRouter);

module.exports = app;