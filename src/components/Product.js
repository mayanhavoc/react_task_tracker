import { FaTimes } from 'react-icons/fa'

const Product = ({ product, onDelete, onToggle }) => {
    return (
        <div className={`product ${product.selected ? 'selected' : '' }`} onDoubleClick={() => onToggle(product.id)}>
            <div className="mb-3">
                <h3>{product.text} <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick = {() => onDelete(product.id)}/></h3>
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
