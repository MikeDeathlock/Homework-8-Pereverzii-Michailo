const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const shopRouters = require("./routes/shoprouts")
const PORT = 7000;
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, "static")));

app.use(shopRouters);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));