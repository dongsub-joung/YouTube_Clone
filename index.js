const express = require('express');
const app = express();

const PORT= 4000;

function handleListening()
{
  console.log(`Listeing on: http://localhost:${PORT}`);
}

function handleHome(req, res) //request obj, response obj
{
  res.send("Hi form Home!!");
} // 변수가 없으면 서버는 무한 Lording

function handleProfile(req, res)
{
  res.send("You are on my profile");
}

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT,handleListening);