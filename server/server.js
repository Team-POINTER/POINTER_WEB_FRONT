import express from "express";
import path from "path";

const app = express();
// 서버에서 배포시에 PORT를 80으로 한다.
const PORT = 80;
const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "../front/build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../front/build", "index.html"));
});

const server = app.listen(PORT, () => {
  console.log(`Start Server Port is : ${PORT}`);
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../front/build", "index.html"));
});