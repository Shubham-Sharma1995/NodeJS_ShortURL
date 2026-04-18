const express = require('express')
const { handleGenerateNewShortUrl, handleGetAnlaytics } = require('../controllers/url')
const router = express.Router()

router.post('/', handleGenerateNewShortUrl)
router.get('/analytics/:shortId', handleGetAnlaytics)
module.exports = router