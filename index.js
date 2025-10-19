const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
require('dotenv').config()
const cors = require('cors')


//middleware
app.use(express.json());
app.use(cors())


const uri = process.env.DB_URL
//mongoose connect
async function main() {
  await mongoose.connect(uri);
}

main().then(() => console.log("Mongodb Connected Successfully")).catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
