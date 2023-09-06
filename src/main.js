const express = require('express')
const hbs = require('express-handlebars')

const app = express()

app.use('/static', express.static(__dirname + '/public'));

app.engine('handlebars', hbs.engine())
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
	res.render('home')
})

app.listen(8000, () => {
	console.log('[main.ts] Server listening at http://localhost:8000')
})