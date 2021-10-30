const express = require('express');
const app = express();
const session = require('express-session');

app.use(session({
    secret: 'secret code',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: true,
        maxAge: 1000 * 60 * 60 //cookie有効期限
    }
}));

const server = app.listen(3000, () => {
    console.log('Server started. port 3000.');
});

const db = {
    database: "dev_class"
    connectionLimit: 10,
    host: "192.168.219.100",
    user: "root",
    password: "mariadb"
};

app.post('/api/login', async(request, res) => {


});
app.post('/api/logout', async(request, res) => {


});