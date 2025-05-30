import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../styles/adminstyles/AdminMenProducts.css';

const AdminMenProducts = () => {
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
    axios.get('http://localhost:8080/api/products/men')
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
    axios.delete(`http://localhost:8080/api/products/men/${id}`)
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
      ? axios.put(`http://localhost:8080/api/products/men/${editingProduct.id}`, formData)
      : axios.post('http://localhost:8080/api/products/men', formData);

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
    <div className="admin-men-products-container">
      <h1>Men's Products Management</h1>
      <div className="add-product-form">
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
      <table className="admin-men-products-table">
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
                <Link to={`/menproduct/${product.id}`}>View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminMenProducts;





// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../../styles/adminstyles/AdminMenProducts.css';
// import men1 from '../../Assets/menimg/men1-sher-wb.png';
// import men2 from '../../Assets/menimg/men2-suit-wb.png';
// import men3 from '../../Assets/menimg/men3-blazer-wb.png';
// import men4 from '../../Assets/menimg/men4-shirt-wb.png';
// import men5 from '../../Assets/menimg/men5-kurta-wb.png';
// import men6 from '../../Assets/menimg/men6-indo-wb.png'
// import men7 from '../../Assets/menimg/men7-suit-wb.png';
// import men8 from '../../Assets/menimg/men8-jack-wb.png'


// // Sample product data (same as in MenProductsList.jsx)
// const products = [
//   { id: 1, name: 'Pink Sherwani', image: men1, price: 1500, category: 'Sherwani', color: 'pink', size: '40', occasion: 'Wedding' },
//   { id: 2, name: 'Blue Suit', image: men2, price: 2000, category: 'Suit', color: 'blue', size: '42', occasion: 'Formal' },
//   { id: 3, name: 'Velvet Blazer', image: men3, price: 1000, category: 'Blazer', color: 'black', size: '44', occasion: 'Casual' },
//   { id: 4, name: 'Wine Party Wear Shirt', image: men4, price: 600, category: 'Shirt', color: 'wine', size: '38', occasion: 'Party' },
//   { id: 5, name: 'Floral Printed Kurta', image: men5, price: 1000, category: 'Kurta', color: 'white', size: '40', occasion: 'Festive' },
//   { id: 6, name: 'Lilac Indo Western', image: men6, price: 1800, category: 'Indo Western', color: 'lilac', size: '40', occasion: 'Wedding' },
//   { id: 7, name: 'Deep Grey Suit', image: men7, price: 1500, category: 'Suit', color: 'grey', size: '42', occasion: 'Formal' },
//   { id: 8, name: 'Shadow Green Jacket', image: men8, price: 900, category: 'Jacket', color: 'green', size: '38', occasion: 'Festive' },
// ];

// const AdminMenProducts = () => {

//   const handleEdit = (id) => {
//     console.log(`Editing product with ID: ${id}`);
//     // Implement edit functionality here
//   };

//   const handleDelete = (id) => {
//     console.log(`Deleting product with ID: ${id}`);
//     // Implement delete functionality here
//   };

//   return (
//     <div className="admin-men-products-container">
//       <h1>Men's Products Management</h1>
//       <table className="admin-men-products-table">
//         <thead>
//           <tr>
//             <th>Image</th>
//             <th>Name</th>
//             <th>Price</th>
//             <th>Category</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map(product => (
//             <tr key={product.id}>
//               <td><img src={product.image} alt={product.name} /></td>
//               <td>{product.name}</td>
//               <td>{`₹${product.price} / day`}</td>
//               <td>{product.category}</td>
//               <td>
//                 <button onClick={() => handleEdit(product.id)}>Edit</button>
//                 <button onClick={() => handleDelete(product.id)}>Delete</button>
//                 <Link to={`/menproduct/${product.id}`}>View</Link>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AdminMenProducts;
