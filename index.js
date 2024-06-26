import express from "express"
import router from "./routes/web.js"
import { join } from 'path'

//================Initialize Express ==============

const app = express()
const port = process.env.PORT || '30002'

//================Tell what engine am using ==============

app.set('view engine', 'ejs')

//================Use Static File ==============

app.use(express.static(join(process.cwd(), 'public')))

//================Call Routes ==============

app.use('/', router)

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`)
})