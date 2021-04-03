const util = require('minecraft-server-util');
const app = require('express')();
const cors = require('cors');

app.use(cors());

function go() {
  app.get('/', async (req, res) => {
    await util.status('jogar.voltzmc.com.br')
    .then(async (resS) => {
      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json')
      res.json(resS);
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
});
