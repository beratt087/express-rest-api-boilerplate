# Express Rest Api Boilerplate

A simple boilerplate for build RESTful APIs with using Node.JS, Express and MongoDB

## Installation
You need to install the dependencies using npm, yarn or pnpm:

```bash
npm install
    # or
yarn install
    # or
pnpm install
```

Copy .env.example to .env and set your database configuration

Run the developement server:

```bash
npm run dev
   # or
yarn dev
   # or
pnpm dev
```

Open [http://localhost:9000](http://localhost:9000) with your browser to see the result.

Note: This project includes nodemon so you don't have to restart server after changes.

## Structure 

You can create the routes for an alias in

    src/routes/* 

Then import your route file in **app.js** following to the code example below.

```javascript
app.use('/account', AccountRouter)
```

You can create a Schema in 

    src/models/*

Then you can configure your schema params following to the code example below. 

```javascript 
import mongoose from "mongoose"

const accountSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const Account = mongoose.model('Account', accountSchema)

export default Account
```


You can create a controller file for an alias in 

    src/controllers/*

Then add your methods into your controller like:

```javascript
import Account from "../models/Account.js"

const AccountController = {
    createAccount: async (req, res) => {
        try {
            // db actions
            res.status(200).json({
                status: 'success',
                message: 'Account created successfully'
            })
        } catch (err) {
            res.status(500).json({
                status: 'error',
                error: err.message,
                message: 'An error occurred while creating the account.'
            })
        }
    },

    getAccountData: async (req, res) => {
        try {
            // db actions
            res.json({
                status: 'success',
                data: {/* data here */}
            })
        } catch (err) {
            res.status(500).json({
                status: 'error',
                error: err.message,
                message: 'An error occurred while retrieving account data.'
            })
        }
    },

    updateAccount: async (req, res) => {
        try {
            // db actions
            res.json({
                status: 'success',
                message: 'Account updated successfully'
            })
        } catch (err) {
            res.status(500).json({
                status: 'error',
                error: err.message,
                message: 'An error occurred while update the account.'
            })
        }
    },

    deleteAccount: async (req, res) => {
        try {
            // db actions
            res.json({
                status: 'success',
                message: 'Account deleted successfully'
            })
        } catch (err) {
            res.status(500).json({
                status: 'error',
                error: err.message,
                message: 'An error occurred while deleting the account.'
            })
        }
    }
}

export default AccountController
```