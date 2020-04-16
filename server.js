if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

// database
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
});
const db = mongoose.connection;
db.on('error', error => console.log(error));
db.once('open', () => console.log('Connected To Database'));

// routes

const routes = require('./routes/');

app.get('/', (req, res) => {
	res.redirect('/api');
});

app.use('/api', routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server running on ${PORT}`));
