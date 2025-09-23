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
  <div style={styles.container}>
    <h1 style={styles.header}>CRUD Demo (React + Express)</h1>
    <div style={styles.inputContainer}>
      <input
        style={styles.input}
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        placeholder="Enter new product"
      />
      <button style={styles.addButton} onClick={addProduct}>
        Add
      </button>
    </div>

    <ul style={styles.list}>
      {products.map((p) => (
        <li key={p.id} style={styles.listItem}>
          <span style={styles.productName}>{p.name}</span>
          <div style={styles.buttonGroup}>
            <button
              style={styles.editButton}
              onClick={() => updateProduct(p.id, p.name)}
            >
              Edit
            </button>
            <button
              style={styles.deleteButton}
              onClick={() => deleteProduct(p.id)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

// Styles object
const styles = {
  container: {
    padding: 20,
    maxWidth: 600,
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  header: {
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    display: 'flex',
    gap: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    padding: 8,
    fontSize: 16,
    border: '1px solid #ddd',
    borderRadius: 4,
    outline: 'none',
    transition: 'border-color 0.3s',
  },
  addButton: {
    padding: '8px 16px',
    fontSize: 16,
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: 4,
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 15px',
    backgroundColor: 'white',
    marginBottom: 10,
    borderRadius: 4,
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  },
  productName: {
    fontSize: 16,
    color: '#333',
  },
  buttonGroup: {
    display: 'flex',
    gap: 10,
  },
  editButton: {
    padding: '6px 12px',
    fontSize: 14,
    backgroundColor: '#2196F3',
    color: 'white',
    border: 'none',
    borderRadius: 4,
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  deleteButton: {
    padding: '6px 12px',
    fontSize: 14,
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
    borderRadius: 4,
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};
}

export default App;
