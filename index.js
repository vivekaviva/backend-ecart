const express = require("express");
const app = express();
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");

dotenv.config({ path: path.join(__dirname, "config", "config.env") });

const productRouter = require("./routes/product");

app.use(express.json());
app.use(cors());

dotenv.config();

connectDB();

app.get("/", (req, res) => {
  res.send("Products page");
});

app.use(productRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server listening to the port ${process.env.PORT}`);
});
