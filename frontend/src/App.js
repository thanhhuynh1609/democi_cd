import React, { useEffect, useState } from "react";
import API from "./api";

function App() {
  const [products, setProducts] = useState([]);
  const [newName, setNewName] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await API.get("/products");
    setProducts(res.data);
  };

  const addProduct = async () => {
    if (!newName) return;
    await API.post("/products", { name: newName });
    setNewName("");
    fetchProducts();
  };

  const updateProduct = async (id, name) => {
    const updated = prompt("Enter new name:", name);
    if (updated) {
      await API.put(`/products/${id}`, { name: updated });
      fetchProducts();
    }
  };

  const deleteProduct = async (id) => {
    await API.delete(`/products/${id}`);
    fetchProducts();
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>CRUD Demo (React + Express)</h1>
      <input
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        placeholder="New product"
      />
      <button onClick={addProduct}>Add</button>

      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name}{" "}
            <button onClick={() => updateProduct(p.id, p.name)}>Edit</button>
            <button onClick={() => deleteProduct(p.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
