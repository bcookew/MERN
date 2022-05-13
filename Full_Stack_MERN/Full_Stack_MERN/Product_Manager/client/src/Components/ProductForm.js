import React, {useState} from 'react';
import axios from 'axios';

const ProductForm = props => {
    const [formData, setFormData] = useState({});

    const onChangeHandler = e => {
        setFormData({...formData, [e.target.name]:e.target.value })
    }
    const onSubmitHandler = e => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/product/new', {
            ...formData
        })
        .then(res => console.log(`
        ----------------------        
        Request Succeeded!
        ----------------------
        `, res))
        .catch(err => console.log(`
        \/\/\/\/\/\/\/\/\/\/\/
        An error occurred!
        /\/\/\/\/\/\/\/\/\/\/\\`
        , err))
    }
    return (
        <div className="col-6">
            <h1 className="display-3">Add New Product</h1>
            <form onSubmit={onSubmitHandler}>
                <div className="form-floating mb-3">
                    <input placeholder='text' className='form-control' type="text" name="name" onChange={(e) => onChangeHandler(e)} />
                    <label>Product Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input placeholder='text' className='form-control' type="number" min="0.01" step="0.01"  name="price" onChange={(e) => onChangeHandler(e)} />
                    <label>Price</label>
                </div>
                <div className="form-floating mb-3">
                    <input placeholder='text' className='form-control' type="text" name="description" onChange={(e) => onChangeHandler(e)} />
                    <label>Description</label>
                </div>
                <input type="submit" className='btn btn-info btn-lg' value="Add" />
            </form>
        </div>
    )
}

export default ProductForm;