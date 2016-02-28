process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var     express = require('express')
    ,   app = express()
    ,   bodyParser = require('body-parser')
    ,   port = process.env.PORT || 8080
    ,   mongoose = require('mongoose')
    ,   cors = require('cors')
    ,   config = ()