const express = require('express');
const app = express();

const PORT= 4000;

function handleListening()
{
  console.log(`Listeing on: http://localhost:${PORT}`);
}

function handleHome(req, res) //request obj, response obj
{
  //console.log(res);
  res.send("Hi form Home!!");
} // 변수가 없으면 서버는 무한 Lording

app.get("/", handleHome);

app.listen(PORT,handleListening);