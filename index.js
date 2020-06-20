import express from "express";
const app = express();

const PORT= 4000;

const handleListening = () =>
console.log(`Listeing on: http://localhost:${PORT}`);


const handleHome = (req, res) => //request obj, response obj
res.send("Hi form Home!!"); // 변수가 없으면 서버는 무한 Lording

const handleProfile = (req, res) => 
res.send("You are on my profile");

const betweenHome = (req, res, next) =>{
console.log("Between");
next();
}

app.use(betweenHome);

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT,handleListening);