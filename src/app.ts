import { loginAuth, getUser } from './services/index';

const express = require('express');
const app = express();
const router = express.Router();

// for parsing application/json
app.use(express.json());
// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// catch error
router.get('/error', function (req, res, next) {
    return next(new Error('This is an error and it should be logged to the console'));
});

// Now we can tell the app to use our routing code:
app.use(router);

// Add headers for proxy
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.post('/service/login', loginAuth);

app.get('/getalluser', getUser);

// Binding express app to port 3000
app.listen(3000,function(){
    console.log('Node server running @ http://localhost:3000')
});

app.get('/',function(req,res){
    res.send('Unauthorized access!');
});
