let products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone" }
];

const getProducts = (req, res) => res.json(products);

const addProduct = (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: "Name required" });
  const newProduct = { id: products.length + 1, name };
  products.push(newProduct);
  res.status(201).json(newProduct);
};

const updateProduct = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const product = products.find((p) => p.id == id);
  if (!product) return res.status(404).json({ message: "Not found" });
  product.name = name || product.name;
  res.json(product);
};

const deleteProduct = (req, res) => {
  const { id } = req.params;
  products = products.filter((p) => p.id != id);
  res.json({ message: "Deleted" });
};

module.exports = { getProducts, addProduct, updateProduct, deleteProduct };
