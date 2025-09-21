let products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone" }
];

// Lấy danh sách sản phẩm
const getProducts = (req, res) => {
  res.json(products);
};

// Thêm sản phẩm mới
const addProduct = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }
  const newProduct = { id: products.length + 1, name };
  products.push(newProduct);
  res.status(201).json(newProduct);
};

module.exports = { getProducts, addProduct };
