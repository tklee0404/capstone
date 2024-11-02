const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.get('/',(req,res) => {
    res.send(`OWN SERVER START`);
})

app.listen(PORT,()=> {
    console.log(`SERVER ON : http://localhost:${PORT}`);
})