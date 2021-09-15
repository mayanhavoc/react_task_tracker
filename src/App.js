import { useState, useEffect } from 'react'
import Header from './components/Header';
import Products from './components/Products';
import AddProduct from './components/AddProduct';
import Footer from './components/Footer';


function App() {
  const [showAddProduct, setShowAddProduct] = useState(false)
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      const productsFromServer = await fetchProducts()
      setProducts(productsFromServer)
    }
    getProducts()
  }, [])

  // Fetch products
  const fetchProducts = async () => {
    const res = await fetch('http://localhost:5000/products')
    const data = await res.json()

    return data
  }
  
  // Fetch product
  const fetchProduct = async (id) => {
    const res = await fetch(`http://localhost:5000/products/${id}`)
    const data = await res.json()

    return data
  }

  // Delete product
  const deleteProduct = async (id) => {
    await fetch(`http://localhost:5000/products/${id}`, {
      method: 'DELETE'
    })
    setProducts(products.filter((product) => product.id !== id))
  }

  // Toggle product selection
  const toggleSelected = async (id) => {
    const productToggle = await fetchProduct(id)
    const updateProduct = {...productToggle, selected: !productToggle.selected}

    const res = await fetch(`http://localhost:5000/products/${id}`,{
      method: 'PUT', 
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updateProduct)
    })

    const data = await res.json()

    setProducts(
      products.map((product) => 
        product.id === id ? 
        { ...product, 
          selected: data.selected } : product))
        }

  // Add Product
  const addProduct = async (product) => {
    const res = await fetch('http://localhost:5000/products', {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(product)
    })

    const data = await res.json()

    setProducts([...products, data])


    // const id = Math.floor(Math.random() * 1000) + 1
    // const newProduct = { id, ...product }
    // setProducts([...products, newProduct])
  } 

  return (
    <div className="container">
      <Header 
        title={'Quotation builder'} 
        onAdd={() => setShowAddProduct(!showAddProduct)} showAdd={showAddProduct}/>
      {showAddProduct && <AddProduct onAdd={addProduct}/>}
      {products.length > 0 ? <Products products={products} onDelete={deleteProduct} onToggle={toggleSelected}/> : 'No products to show'}
      <Footer/>
    </div>
  );
}

export default App;
