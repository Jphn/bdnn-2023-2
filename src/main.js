import express from 'express'
import { engine } from 'express-handlebars'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express()

app.use('/static', express.static(__dirname + '/public'))

app.engine('hbs', engine({ extname: '.hbs' }))
app.set('view engine', 'hbs')
app.set('views', __dirname + '/views')

app.get('/', (req, res) => res.render('home'))

async function main() {
	app.listen(8000, () => console.log('[main.ts] Server listening at http://localhost:8000'))
}

await main()