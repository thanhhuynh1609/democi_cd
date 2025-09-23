const express = require("express");
const path = require("path");
const cors = require("cors");



const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const productRoutes = require("./routes/products");
app.use("/products", productRoutes);

app.listen(port, "0.0.0.0", () => {
  console.log(`🚀 Backend running at http://0.0.0.0:${port}/`);
});
