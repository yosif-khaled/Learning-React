const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/UserModel')
const jwt = require('jsonwebtoken')

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:3040/auth-user')

app.post('/api/register', async (req, res) => {
    console.log(req.body)
    try {
        const user = await User.create(
            {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            }
        )
        const token = jwt.sign({
            name: user.name,
            email: user.email,
        }, 'secret')
        res.json({ status: 'ok', user: token })
        console.log(user)
    } catch (error) {
        console.log(error)
        res.json({ status: 'error' })
    }
})

app.post('/api/login', async (req, res) => {
    console.log(req.body)
    const user = await User.findOne(
        {
            email: req.body.email,
            password: req.body.password,
        }
    )

    if(user){
        const token = jwt.sign({
            name: user.name,
            email: user.email,
        }, 'secret')
        console.log(`Login Response: ${user}`)
        return res.json({status: 'ok', token: token})
    } else {
        return res.json({ status: 'error', token: false })
    }
})


app.listen(3030, () => {
    console.log('Server at port 3030')
})