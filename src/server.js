const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");

const app = express();
const port = 3000

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.get("/", (req, res) => {
  res.send("Hello World");
})
.post('/', (req, res) => {
  
})
.get("/:id", (req, res) => {
  
})
.delete("/:id", (req, res) =>{
})



app.listen(port, () => {
  console.log(`Server open on port ${port}`);
});
 