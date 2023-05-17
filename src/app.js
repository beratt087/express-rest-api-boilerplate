import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import AccountRouter from "./routes/Account.js";
import connectDb from "./models/db.js";

dotenv.config()
const app = express()
const db = connectDb();
app.use(cors())
app.use('/account', AccountRouter)

const port = process.env.PORT || 9000


app.get('/', (req, res) => {

})

app.listen(port, () => {
    console.log(`App started! Listening on ${port}`)
})