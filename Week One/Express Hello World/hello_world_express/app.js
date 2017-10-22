const express = require('express'),
    app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use((req, res) => {
    res.sendStatus(404); 
});

let server = app.listen(3000, () => {
    let port = server.address().port;
    console.log('Express server listening on port %s', port);
});
