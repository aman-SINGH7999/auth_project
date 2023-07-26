const express = require('express');
const connectDB = require('./db/connectdb');
const web = require('./roots/web');

const app = express();
// database connection
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://0.0.0.0:27017";
const PORT = process.env.PORT || 3000
connectDB(DATABASE_URL);

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));
app.use('/',web);

app.listen(PORT, ()=>{
    console.log(`server is listining at https://localhost:${PORT}`)
})