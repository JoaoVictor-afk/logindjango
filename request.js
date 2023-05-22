var unirest = require('unirest');
var req = unirest('GET', 'http://127.0.0.1:8000/users/account/user/')
  .headers({
    'Authorization': 'token e9de11dcc7223db83c2542b50ffa7b1836884f0c9666b3dd9fb33472d5cb7dd8',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Cookie': 'csrftoken=UwfYrGGz0IYIcREXN4peqi9QuQhHfIBs; sessionid=9p63gx10icux4zoxyzk3aq2w8mq7wqzl'
  })
  .send('email=joao.souza@ufn.edu.br')
  .send('password=26102002')
  .send('username=joao')
  .end(function (res) { 
    if (res.error) throw new Error(res.error); 
    console.log(res.raw_body);
  });
