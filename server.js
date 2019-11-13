const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) =>{
    res.send([{
        'id':1,
        'image':'https://placeimg.com/64/64/1',//이미지를 랜덤으로 보여주는 웹사이트(이미지 사이즈:64*64)
        'name':'홍길동',
        'birthday':'950826',
        'gender':'남자',
        'job':'대학생'
      },
      {
        'id':2,
        'image':'https://placeimg.com/64/64/2',//이미지를 랜덤으로 보여주는 웹사이트(이미지 사이즈:64*64)
        'name':'김효선',
        'birthday':'950825',
        'gender':'여자',
        'job':'대학생'
      },
      {
        'id':3,
        'image':'https://placeimg.com/64/64/3',//이미지를 랜덤으로 보여주는 웹사이트(이미지 사이즈:64*64)
        'name':'이순신',
        'birthday':'950808',
        'gender':'여자',
        'job':'회사원'
      }]);
 });

app.listen(port, () => console.log(`Listening on port ${port}`));