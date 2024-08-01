const express = require('express');
const colors = require('colors')
const morgan = require('morgan');
const dotenv = require('dotenv');
const mySqlPool = require('./config/db');

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(morgan("dev"));

//routes
app.use('/api/v1/student', require('./routes/studentsRoutes'));

app.get('/', (req, res) => {
    res.status(200).send(`<h1>Hello World</h1>`);
});

//node js server connection code
mySqlPool.query('SELECT 1').then(() => {
    console.log(`Mysql DB Connected`.bgCyan.white);
    app.listen(port, () => {
        // console.log("Hello Server".bgMagenta.white)
        console.log(`Server is Running on Port http://localhost:${port}`.bgMagenta.white);
    })
}).catch((error) => {
    console.log(error);
})
