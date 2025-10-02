// importación con import (ECMAS6)

// importación de módulo (CommonJS)
const express = require("express");
const router = require('../routes/routes') 
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"))

app.use('/', router)

module.exports = app
