const express = require('express');
const { fetchTokens, fetchQuotes, fetchTransactionParams } = require('../controllers/tokenController');

const router = express.Router();

router.get('/tokens', fetchTokens);


module.exports = router;
