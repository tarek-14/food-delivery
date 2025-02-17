import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { assets } from '../../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'

const Add = ({ url }) => {

    const [image, setImage] = useState(false)
    const [data, setData] = useState({
        name: '',
        description: '',
        price: '',
        category: 'Salad'
    })
    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }))
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('name', data.name)
        formData.append('description', data.description)
        formData.append('price', Number(data.price))
        formData.append('category', data.category)
        formData.append('image', image)
        const response = await axios.post(`${url}/api/food/add`, formData)
        if (response.data.success) {
            setData({
                name: '',
                description: '',
                price: '',
                category: 'Salad'
            })
            setImage(false)
            toast.success(response.data.message)
        } else {
            toast.error(response.data.message)

        }

    }
    // useEffect(()=>{
    //     console.log(data);
    // },[data])

    return (
        <div className='text-secondary mt-4  m-auto w-75'>
            <form className='flex-col gap-3' onSubmit={onSubmitHandler}>
                <div className='row'>
                    <div className="add-img-upload col-12 col-md-2">
                        <p>Uplode Image</p>
                        <label htmlFor="image">
                            <img style={{ width: "120px" }} src={image ? URL.createObjectURL(image) : assets.upload_area} alt='image uploade' />
                        </label>
                        <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' hidden required />
                    </div>
                    <div className="add-product-name col-12 col-md-10">
                        <p>Product name</p>
                        <input className='w-100 p-2 ' onChange={onChangeHandler} value={data.name} type="text" name="name" placeholder='Type here' style={{outlineColor:"tomato"}} />
                    </div>
                </div>
                <div className='row '>
                    <div className='add-product-description col-12 col-md-8'>
                        <p className='mb-2'>Product description</p>
                        <textarea className='w-100 p-2' onChange={onChangeHandler} value={data.description} name="description" rows='7' placeholder='Write content here' required style={{outlineColor:"tomato"}}></textarea>
                    </div>
                    <div className='col-12 col-md-4'>
                        <div className="add-category-price">
                            <div className="add-category ">
                                <p className='mb-2'>Product category</p>
                                <select className='w-100 p-2 mb-2' onChange={onChangeHandler} name="category" style={{outlineColor:"tomato"}}>
                                    <option hidden>Category</option>
                                    <option value="Salad">Salad</option>
                                    <option value="Rolls">Rolls</option>
                                    <option value="Deserts">Deserts</option>
                                    <option value="Sandwich">Sandwich</option>
                                    <option value="Cake">Cake</option>
                                    <option value="Pure Veg">Pure Veg</option>
                                    <option value="Pasta">Pasta</option>
                                    <option value="Noodles">Noodles</option>
                                </select>
                            </div>
                            <div className="add-price ">
                                <p className='mb-2'>Product price</p>
                                <input className='w-100 p-2' onChange={onChangeHandler} value={data.price} type="Number" name="price" placeholder='$Price' style={{outlineColor:"tomato"}}/>
                            </div>
                        </div>
                        <button type='submit' className='btn bg-black text-white w-100 rounded-0 mt-3 p-2'>Add</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Add