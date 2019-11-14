const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');
const connection = mysql.createConnection({
  host:conf.host, //db에 명시된 호스트를 그대로 가져옴
  user:conf.user,
  password:conf.password,
  port:conf.port,
  database:conf.database
});
connection.connect();
app.get('/api/customers', (req, res) =>{
    connection.query(
      "SELECT * FROM CUSTOMER",
      (err, rows, feilds) => {
        res.send(rows);
      }
    );
 });

app.listen(port, () => console.log(`Listening on port ${port}`));