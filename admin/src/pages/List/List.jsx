import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const List = ({ url }) => {
  const [list, setList] = useState([]);
  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`)
    // console.log(response.data);
    if (response.data.success) {
      setList(response.data.data)
    } else {
      toast.error('Error')
    }
  }
  const removeFood = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove`, { id: foodId })
    await fetchList()
    if (response.data.success) {
      toast.success(response.data.message)
    } else {
      toast.error("Error")
    }
  }
  useEffect(() => {
    fetchList();
  }, [])
  return (
    <div className=' text-secondary mt-4  m-auto w-75'>
      <p className=' fw-bold fs-4'>All Foods List</p>
      <div className="list-table">
        <div className=" row align-items-center py-2 fs-6 d-none d-md-flex" style={{ border: "1px solid #cacaca", background: "#f9f9f9" }}>
          <b className='col-1'>Image</b>
          <b className='col-4 text-start'>Name</b>
          <b className='col-3 text-start'>Category</b>
          <b className='col-3 text-start'>Price</b>
          <b className='col-1 text-start'>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div ey={index} className="row align-items-center py-2 fs-6" style={{ border: "1px solid #cacaca" }}>
              <div className="col-4 col-md-1 ">
                <img className='w-75' src={`${url}/images/` + item.image} />
              </div>
              <p className="col-6 col-md-4 text-start">{item.name}</p>
              <p className="col-4 col-md-3 text-start">{item.category}</p>
              <p className="col-4 col-md-2 text-start">${item.price}</p>
              <div className="col-4 col-md-2 text-center">
                <button className="btn bg-danger text-white  py-1 px-3" onClick={() => removeFood(item._id)}>Delete</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default List