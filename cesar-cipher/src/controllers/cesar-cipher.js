const api = require('../middleware/api');

exports.generateAnswer = (req, res, next) => {
  debugger
  // const { token } = req.body;
  // const answer = api.get(`dev-ps/generate-data?token=${token}`);
  // console.log(answer);
  // res.render('cesar-cipher/answer', { Answer: token });
  res.redirect('/answer');
};