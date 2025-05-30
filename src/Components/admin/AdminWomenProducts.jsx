import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../styles/adminstyles/AdminWomenProducts.css';

const AdminWomenProducts = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    category: '',
    color: '',
    size: '',
    occasion: '',
    image: null
  });
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/api/womenproducts/women')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleEdit = (product) => {
    setEditingProduct(product);
    setNewProduct({
      name: product.name,
      price: product.price,
      category: product.category,
      color: product.color,
      size: product.size,
      occasion: product.occasion,
      image: null
    });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/api/womenproducts/women/${id}`)
      .then(() => {
        setProducts(products.filter(product => product.id !== id));
      })
      .catch(error => console.error('Error deleting product:', error));
  };

  const handleAddOrUpdateProduct = () => {
    const formData = new FormData();
    formData.append('name', newProduct.name);
    formData.append('price', newProduct.price);
    formData.append('category', newProduct.category);
    formData.append('color', newProduct.color);
    formData.append('size', newProduct.size);
    formData.append('occasion', newProduct.occasion);
    if (newProduct.image) {
      formData.append('image', newProduct.image);
    }

    const request = editingProduct
      ? axios.put(`http://localhost:8080/api/womenproducts/women/${editingProduct.id}`, formData)
      : axios.post('http://localhost:8080/api/womenproducts/women', formData);

    request
      .then(response => {
        if (editingProduct) {
          setProducts(products.map(product =>
            product.id === editingProduct.id ? response.data : product
          ));
          setEditingProduct(null);
        } else {
          setProducts([...products, response.data]);
        }
        setNewProduct({
          name: '',
          price: '',
          category: '',
          color: '',
          size: '',
          occasion: '',
          image: null
        });
      })
      .catch(error => console.error('Error saving product:', error));
  };

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: type === 'file' ? files[0] : value
    });
  };

  return (
    <div className="admin-women-products-container">
      <h1>Women's Products Management</h1>
      <div className="add-women-product-form">
        <h3>{editingProduct ? 'Edit Product' : 'Add New Product'}</h3>
        <input type="text" name="name" value={newProduct.name} onChange={handleInputChange} placeholder="Product Name" />
        <input type="number" name="price" value={newProduct.price} onChange={handleInputChange} placeholder="Price" />
        <input type="text" name="category" value={newProduct.category} onChange={handleInputChange} placeholder="Category" />
        <input type="text" name="color" value={newProduct.color} onChange={handleInputChange} placeholder="Color" />
        <input type="text" name="size" value={newProduct.size} onChange={handleInputChange} placeholder="Size" />
        <input type="text" name="occasion" value={newProduct.occasion} onChange={handleInputChange} placeholder="Occasion" />
        <input type="file" name="image" onChange={handleInputChange} />
        <button onClick={handleAddOrUpdateProduct}>{editingProduct ? 'Update Product' : 'Add Product'}</button>
      </div>
      <table className="admin-women-products-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td><img src={`data:image/jpeg;base64,${product.image}`} alt={product.name} /></td>
              <td>{product.name}</td>
              <td>{`₹${product.price} / day`}</td>
              <td>{product.category}</td>
              <td>
                <button onClick={() => handleEdit(product)}>Edit</button>
                <button onClick={() => handleDelete(product.id)}>Delete</button>
                <Link to={`/womenproduct/${product.id}`}>View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminWomenProducts;
