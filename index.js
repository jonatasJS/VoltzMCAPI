const util = require('minecraft-server-util');
const express = require('express');
const app = require('express')();
const cors = require('cors');
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.static('public'));

async function go() {
	await app.get('/:server', async (req, res) => {
		const server = req.params.server;

		await util.status(server)
			.then(async resS => res.json(resS))
			.catch(err => console.log(err));
	});

  await app.get('/', async (req, res) => {
    await util.status('voltzmc.com.br')
    	.then(async (resS) => res.json(resS))
    	.catch((err) => {
      	console.error({
					msg: 'Error',
        	err
      	});
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
