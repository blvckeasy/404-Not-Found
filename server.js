'use strict';
const PORT = process.env.PORT || 3000;
var app = require('express')();

app.get('/', function (req,res) {
  res.send('HelloWorld!')
});

app.get('/wiki',function (req,res) {
  res.send('This is wiki page.')
});

app.get('/error',function (req, res, next) {
  next("This is error")
});

app.use((req,res) => res.send('404-PageNotFound'));
app.use((err, req, res) => {
  console.log(err);
})

app.listen(PORT, () => console.log(`server is listening on *${PORT}`));