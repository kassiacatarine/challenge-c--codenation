const axios = require('axios');
const fs = require('fs');
const cesarCipher = require('../utils/cesar-cipher');
const sha1 = require('js-sha1');

function saveAnswerToJson(answer) {
  fs.writeFile('results/answer.json', JSON.stringify(answer), function(err) {
    if(err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });
}

function createResume(text) {
  sha1(text);
  return sha1.create().hex();
}

module.exports = {
  async answer(req, res) {
    const id = process.env.ID;
    const responseGet = await axios.get(`https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=${id}`);
    const answer = responseGet.data;
    answer.decifrado = cesarCipher.decrypt(answer.cifrado, answer.numero_casas);
    answer.resumo_criptografico = createResume(answer.decifrado);
    saveAnswerToJson(answer);
    res.render('cesar-cipher/answer', { title: 'Criptografia de Júlio César', answer });
  },
}