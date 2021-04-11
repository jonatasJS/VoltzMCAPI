const util = require('minecraft-server-util');
const app = require('express')();
const cors = require('cors');
const port = process.env.PORT || 3001;

app.use(cors());

async function go() {
	await app.get('/:server', async (req, res) => {
		const server = req.params.server;

		await util.status(server)
		.then(async resS => {
			res.json(resS)
		})
		.catch(err => console.log(err));
	});

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

app.listen(port, () => {
  console.clear();
  console.log('PORT: ' + port);
});
