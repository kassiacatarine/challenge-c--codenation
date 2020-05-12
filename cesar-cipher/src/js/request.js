let http = new XMLHttpRequest();
const url = 'https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=299dc1b29955faad117f633f7f9f3dd609ecadfb';

http.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    saveAnswer(this.responseText);
    let answer = JSON.parse(this.responseText);
    setValuesInHtml(answer);
  }
};
http.open("GET", url, true);
http.send();

function saveAnswer(answer) {
  var fileName = 'answer.json';
  var fileToSave = new Blob([answer], {
      type: 'application/json',
      name: fileName
  });
  saveAs(fileToSave, fileName);
}

function setValuesInHtml(answer) {
  let html = `<p>${answer.cifrado}</p>
              <p>${answer.numero_casas}</p>`;
  document.getElementById('answer').innerHTML = html;
}