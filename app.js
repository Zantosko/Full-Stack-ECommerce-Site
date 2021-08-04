require('dotenv').config();
const express = require('express');
const http = require('http');
const app = express();
const cors = require('cors');
const path = require('path');

const port = process.env.PORT || 4001;

//* Middleware
app.use(express.json());
app.use(cors());

//* Checks if server is in production mode
// if (process.env.NODE_ENV === 'production') {
// 	//points to index.js in client
// 	app.use(
// 		express.static(path.join(__dirname, 'client/build'))
// 	);
// }

//* Routes

//? Index Routes
app.use('/ind', require('./routes/index'));

//? Authorization Routes
app.use('/auth', require('./routes/jwtAuth'));

//? User Routes
app.use('/user', require('./routes/user'));

//* Combines client and build directories
// app.get('*', (req, res) => {
// 	res.sendFile(
// 		path.join(__dirname + '/client/build/index.html')
// 	);
// });

//* Indicates server is running
app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
