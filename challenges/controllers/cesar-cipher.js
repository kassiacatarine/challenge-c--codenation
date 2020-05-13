const axios = require('axios');
const fs = require('fs');

function saveAnswerToJson(answer) {
  fs.writeFile('results/answer.json', JSON.stringify(answer), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
  });
}

module.exports = {
  async answer(req, res) {
    const id = process.env.ID;
    const response = await axios.get(`https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=${id}`);
    const answer = response.data;
    saveAnswerToJson(answer);
    res.render('cesar-cipher/answer', { title: 'Criptografia de Júlio César', answer });
  }
}