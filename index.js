const express = require('express')
const app = express()
const port = 3001


app.get('/', (req, res) => {
  res.send(`
   <div style="text-align:center; padding-top:40px;">
   
   <h1>Welcome to My Website</h1>
   <p>This is a Hello World app</p>
   
   </div>
  `);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})