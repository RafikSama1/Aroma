/* ----- Packages Imports ----- */
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

/* ----- Middlewares Imports ----- */
const notFoundMiddleware = require('./middlewares/notFound.middleware');
const errorMiddleware = require('./middlewares/error.middleware');

/* ----- App Initialization ----- */
const app = express();
dotenv.config();

/* ----- Global Middlewares ----- */
app.use(express.json()); // this is for when posting data the backend can read the body
app.use(cors()); // this is for enabling the connection between the front and the back
app.use('/public', express.static('./public'));

/* ----- Routes Imports ----- */
const recepesRoutes = require('./routes/recepes.routes');
const authRoutes = require('./routes/auth.routes');

/* ----- Routes User ----- */
app.use(recepesRoutes);
app.use(authRoutes);

/* ----- Error Middlewares ----- */
app.use(notFoundMiddleware);
app.use(errorMiddleware);

/* ----- Start Function ----- */
const bootstrap = async() =>{
    try{
        await mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`);
        app.listen(process.env.APP_PORT, ()=>{console.log(`app started at port: http://localhost:${process.env.APP_PORT}`)});
    } catch (err) {
        console.log('Failed to start the server!')
    }}

bootstrap();