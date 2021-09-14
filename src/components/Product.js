import { FaTimes } from 'react-icons/fa'

const Product = ({ product }) => {
    return (
        <div className='product'>
            <div className="mb-3">
                <h3>{product.text} <FaTimes style={{ color: 'red', cursor: 'pointer' }}/></h3>
            </div>
            <div className="mb-3">
                <p>{product.description}
                    <span>
                        <a href={product.source}>Source</a>
                    </span>
                </p>
            </div>
            <div className="mb-3">
                <span>Price ${product.price}</span>
            </div>
        </div>
    )
}

export default Product
