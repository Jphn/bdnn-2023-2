const express = require('express')

const app = express()
app.get('/', (req, res) => {
	res.render('home')
})

app.listen(8000, () => {
	console.log('[main.ts] Server listening at http://localhost:8000')
})