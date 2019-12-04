var express = require('express');
var app = express();
const port = process.env.PORT || 3001;

app.get('/', (req, resp) => {
	resp.send('App em Node - Deploy com Heroku');
});

app.listen(port, () => {
	console.log(`Servidor online na porta ${port}`);
});