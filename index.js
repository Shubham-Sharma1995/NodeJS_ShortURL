const express = require('express')
const path = require('path')
const { connectToMongoDb } = require('./connect')
const URL = require('./models/url')
const urlRoute = require('./routes/url')
const staticRoute = require('./routes/staticRouter')
const userRoute = require('./routes/user')
const app = express();
const PORT = 8001;

connectToMongoDb('mongodb://127.0.0.1:27017/short-url').then(() => console.log("MongoDb Connected"))
app.set("view engine", "ejs")
app.set('views', path.resolve("./views"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.get('/test', async (req, res) => {
    const allURLs = await URL.find({})
    return res.render('home', {
        urls: allURLs
    })
})
app.use(express.urlencoded({ extended: false }))
app.use('/url', urlRoute)
app.use('/user', userRoute)
app.use('/', staticRoute)
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

