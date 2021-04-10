const util = require('minecraft-server-util');
const app = require('express')();
const cors = require('cors');

app.use(cors());

async function go() {
  await app.get('/', async (req, res) => {
    await util.status('jogar.voltzmc.com.br')
    .then(async (resS) => {
      res.json(resS);
    })
    .catch((err) => {
      console.error(err);
      res.json({
          msg: 'Error',
          err
      });
    });
  });
}

go();

setInterval(go, 10000);

app.listen(process.env.PORT || 3001, () => {
  console.clear();
  console.log('PORT: ' + process.env.PORT || 3001);
});
