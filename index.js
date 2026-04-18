const express = require('express')
const { connectToMongoDb } = require('./connect')
const URL = require('./models/url')
const urlRoute = require('./routes/url')
const app = express();
const PORT = 8001;

connectToMongoDb('mongodb://127.0.0.1:27017/short-url').then(() => console.log("MongoDb Connected"))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/url', urlRoute)
app.get('/:shortID', async (req, res) => {
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

