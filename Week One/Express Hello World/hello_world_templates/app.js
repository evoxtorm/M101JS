const express = require('express'),
    app = express(),
    engines = require('consolidate');

app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/', (req, res) =>  {
    res.render('hello', { name : 'Templates' });
});

app.use((req, res) => {
    res.sendStatus(404); 
});

var server = app.listen(3000, () => {
    var port = server.address().port;
    console.log('Express server listening on port %s', port);
});
