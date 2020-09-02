//#region  Imports
const express = require('express');
const conectarDB = require('./src/config/db');
const bodyParser = require('body-parser'); 

const users = require('./src/routes/users');
const announcements = require('./src/routes/announcements');

//#endregion Imports

//#region  Connect to DB
conectarDB();
//#endregion Connect to DB

//#region Create server and config middleware 
const app = express()
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}))
//#endregion Create server and config middleware 

//#region Routes
app.use('/api/users', users);
app.use('/api/announcements', announcements);

//#endregion Routes
 
//#region Start Server
app.listen(4000,()=>{
    console.log('This server is running in port http://localhost:4000');
});
//#endregion Start Server

