const { getTokens, getQuotes, getTransactionParams } = require('../services/xyFinanceService');

exports.fetchTokens = async (req, res, next) => {
  try {
    const tokens = await getTokens();
    res.json(tokens);
  } catch (error) {
    next(error);
  }
};

