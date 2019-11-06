const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

/* configure mongodb database */

mongoose.connect('mongodb://127.0.0.1:27017/node_project',{ useUnifiedTopology: true,useNewUrlParser: true })
	.then(response => {
		console.log('mongodb connected successfully');
	}).catch(err => {
		console.log(err);
	});

// configure express

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__filename,'public')));

/* Routes of the application */

app.use('/', (req,res) => {
	res.send('welcome to the future');
});

app.listen(8080);