const path = require('path');
const express = require('express');
const ejs = require('ejs');
const expressLayouts = require('express-ejs-layouts');
const sass = require('node-sass-middleware');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('layout extractStyles', true);
console.log("");
app.use(sass({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public/css'),
    debug: true,
    //outputStyle: 'compressed',
    force: true
}));
app.use(expressLayouts);
app.get('/', function (req, res) {
    res.render('index');
});


app.listen(1234, function () {
    console.log('Listening on port 1234!')

});