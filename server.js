const express = require("express");
const app = express();
const PORT= process.env.PORT || 5001;


app.use(express.urlencoded({extended:true}));

app.use(express.json());


app.use(express.static("public"));

app.listen(PORT,()=>console.log(`Listening to PORT ${PORT}`));
