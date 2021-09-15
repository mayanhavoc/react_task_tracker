import Product from './Product'

const Products = ({ products, onDelete, onToggle }) => {
    return (
        <>
         {products.map((product) => (
             <Product key={product.id} product={product} onDelete={onDelete} onToggle={onToggle}/>
         )
         )}   
        </>
    )
}

export default Products
