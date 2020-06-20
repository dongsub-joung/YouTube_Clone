const express = require('express');
const app = express();

const PORT= 4000;

function handleListening()
{
  console.log(`Listeing on: http://localhost:${PORT}`);
}

app.listen(PORT,handleListening);