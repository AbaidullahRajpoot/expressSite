import express from "express"
import router from "./routes/web.js"
import { join,dirname  } from 'path'
import { fileURLToPath } from 'url';

//================Initialize Express ==============

const app = express()
const port = process.env.PORT || '30002'

//================Tell what engine am using ==============

// Set views directory
const __dirname = dirname(fileURLToPath(import.meta.url));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//================Use Static File ==============

app.use(express.static(join(process.cwd(), 'public')))

//================Call Routes ==============

app.use('/', router)

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`)
})