const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json())


app.get('/', (req, res) => {
  res.json({ message: "Welcome to my API!", status: "healthy" });
});


app.get("/calculate", (req, res) => {
  return res.send("Hello World");

})

app.post("/create", (req, res) => {
  const { name, age } = req.body;
  return res.send(`Name: ${name}, Age: ${age}`);

})

app.listen(PORT, ()=>{
  console.log(`Server is run at https://localhost:${PORT}`);
})