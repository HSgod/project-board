const express = require('express');
const router = express.Router();
const ads = require('../controllers/ads.controller');

router.get('/ads', ads.getAll);
router.get('/ads/:id', ads.getById);
router.post('/ads', ads.postAll);
router.delete('/ads/:id', ads.deleteById);
router.put('/ads/:id', ads.putById);
router.get('/ads/search/:searchPhrase', ads.getSearch);

module.exports = router;