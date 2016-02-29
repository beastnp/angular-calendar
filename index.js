process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var     express = require('express')
    ,   app = express()
    ,   bodyParser = require('body-parser')
    ,   port = process.env.PORT || 8080
    ,   mongoose = require('mongoose')
    ,   cors = require('cors')
    ,   config = ('./core/server/config/config')
    ,   mongoUri = 'mongodb://localhost:27017/calendar-practice';

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/core/public'));
console.log(__dirname);




app.listen(port, function () {
    console.log('Listening on port ' + port);
});

mongoose.connect(mongoUri);
mongoose.connection.once('open', function () {
    console.log('Connected to MongoDB at ' + mongoUri);
});