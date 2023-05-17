import express from "express"
import AccountController from "../controllers/AccountController.js";

const AccountRouter = express.Router()

AccountRouter.get('/', (req, res) => {
    res.send('here is /account page')
})

AccountRouter.get('/changepw', (req, res) => {
    res.send('here is /account/changepw page')
})

AccountRouter.get('/create-account', AccountController.createAccount)

export default AccountRouter
