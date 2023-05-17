import mongoose from "mongoose"
import dotenv from "dotenv"
import dotenvExpand from "dotenv-expand"

const env = dotenv.config()
dotenvExpand.expand(env)

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Database connection is successful.')
    } catch (err) {
        console.log('Database connection error: ', err)
    }
}

export default connectDb