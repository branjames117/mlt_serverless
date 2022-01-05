require('dotenv').config();
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(favicon(path.join(__dirname, '/public/img/favicon.ico')));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// set html routes
app.use('/', htmlRoutes);

// set api routes (form handling)
app.use('/api', apiRoutes);

/* 404 - page not found */
app.use((req, res) => {
  res.render('oops');
});

app.listen(PORT, () => {});

app.listen(443, () => {});
