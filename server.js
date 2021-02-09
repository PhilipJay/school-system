const express = require('express')
const mongoose = require('mongoose')

const users = require('./routes/api/Users');
const attendances = require('./routes/api/Attendances');

const app = express();

// Middleware
app.use(express.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to mongo
mongoose
	.connect(db, {
		useNewUrlParser: true, 
		useCreateIndex: true,
  		useUnifiedTopology: true 
	})
	.then(() => console.log('MongoDB Connected...'))
	.catch(err => console.log(err));

// Use Routes


app.use('/api/users', users)
app.use('/api/attendances', attendances)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));