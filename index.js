const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const { connectToMongoDb } = require('./connect')

const URL = require('./models/url')
const urlRoute = require('./routes/url')
const staticRoute = require('./routes/staticRouter')
const userRoute = require('./routes/user')
const { restrictToLoggedInUserOnly, checkAuth } = require('./middleware/auth')
const app = express();
const PORT = 8001;


connectToMongoDb('mongodb://127.0.0.1:27017/short-url').then(() => console.log("MongoDb Connected"))
app.set("view engine", "ejs")
app.set('views', path.resolve("./views"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.get('/test', async (req, res) => {
    const allURLs = await URL.find({})
    return res.render('home', {
        urls: allURLs
    })
})
app.use(express.urlencoded({ extended: false }))
app.use('/url', restrictToLoggedInUserOnly, urlRoute)
app.use('/user', userRoute)
app.use('/', checkAuth, staticRoute)
app.get('/url/:shortID', async (req, res) => {
    const shortId = req.params.shortID;
    const entry = await URL.findOneAndUpdate({
        shortId
    }, {
        $push: {
            visitHistory: {
                timestamp: Date.now()
            }
        }
    })
    res.redirect(entry.redirectURL)
})
app.listen(PORT, () => console.log(`server started at port:${PORT}`))

