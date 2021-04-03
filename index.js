const util = require('minecraft-server-util');
const app = require('express')();
const cors = require('cors');

app.use(cors());

function go() {
  console.log('Go');
  app.get('/', async (req, res) => {
    console.log('Foi!2');
    await util.status('jogar.voltzmc.com.br')
    .then(async (resS) => {
      console.log(resS.onlinePlayers);
      res.json(resS);
      console.log('Foi!3');
    })
    .catch((err) => {
      console.error(err);
    });
  });
}

go();

setInterval(go, 10000);

app.listen(8080, () => {
  console.clear();
  console.log('Foi!1');
});