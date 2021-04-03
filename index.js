const util = require('minecraft-server-util');
const app = require('express')();
const cors = require('cors');

app.use(cors());

function go() {
  app.get('/', async (req, res) => {
    await util.status('jogar.voltzmc.com.br')
    .then(async (resS) => {
      res.json(resS);
    })
    .catch((err) => {
      console.error(err);
    });
  });
}

go();

setInterval(go, 10000);

app.listen(process.env.PORT, () => {
  console.clear();
  console.log('PORT: ' + process.env.PORT);
});
