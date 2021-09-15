import { useState } from 'react'


const AddProduct = ({ onAdd }) => {
    const [text, setText ] = useState('')
    const [price, setPrice ] = useState('')
    const [description, setDescription ] = useState('')
    const [selected, setSelected ] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text){
            alert ('Please add a product')
            return
        }

        onAdd({ text, price, description, selected })

        setText('')
        setPrice('')
        setDescription('')
        setSelected(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label htmlFor="">Product</label>
                <input 
                    type="text" 
                    placeholder="Add product" 
                    value={text} 
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label htmlFor="">Price</label>
                <input 
                    type="number" 
                    placeholder="Add price" 
                    value={price} 
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label htmlFor="">Description</label>
                <textarea 
                    type="text" 
                    placeholder="Add description" 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)}>
                </textarea>
            </div>
            <div className="form-control-check">
                <label htmlFor="">Selected</label>
                <input 
                    type="checkbox" 
                    checked={selected} 
                    value={selected} 
                    onChange={(e) => setSelected(e.currentTarget.checked)}/>
            </div>
            <input className="btn btn-block" type="submit" value="Save Product" />
        </form>
    )
}

export default AddProduct
