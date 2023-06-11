import React, { useContext, useEffect } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Providers/AuthProviders';


const AddClass = () => {
  
  const {user} = useContext(AuthContext)

  useEffect(() => {
    // Fetch instructor's information from the server
    // Set the instructor name and email using the response
  }, []);

  const handleAddClass = event =>{
    event.preventDefault()
     const form = event.target
     const className = form.className.value
     const classImage = form.classImage.value
     const name = form.name.value
     const email = form.email.value
     const seats = form.seats.value
     const price = form.price.value

     const newAddClass = {
      className,classImage,name,email,seats:parseFloat(seats),price: parseFloat(price)
     }
     
      fetch('http://localhost:5000/addclass',{
        method:'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(newAddClass)
      })
      .then(res => res.json())
      .then(data =>{
        console.log(data)
        if (data.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'classes Added Successfully',
            icon: 'success',
            confirmButtonText: 'Ok'
          })
        }
      })
     






  }

  return (
    <div className='w-full'>
      <h2 className='text-center my-5'>Add a Class</h2>

      <form onSubmit={handleAddClass} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Class Name</span>
          </label>
          <input type="text" name='className' placeholder="classname" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text"> Class image</span>
          </label>
          <input type="url" name='classImage' placeholder="photo url" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text"> Name</span>
          </label>
          <input type="text" name='name' defaultValue={user?.displayName} placeholder="classname" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text"> email</span>
          </label>
          <input type="email" name='email' defaultValue={user?.email} placeholder="instructor Email " className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Seats</span>
          </label>
          <input type="text" name='seats' placeholder="seats avaialabl" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="text" name='price' placeholder="price " className="input input-bordered" />
        </div>
        <div className="form-control mt-6">
         <input type="submit" value='add class' className='btn btn-primary' />
        </div>
      </form>
   
    </div>
  );
};

export default AddClass;
