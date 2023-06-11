import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTrashAlt, FaUserAltSlash, FaUserCheck, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const ManageUser = () => {

    // const {data: users=[],refetch} = useQuery(['users'],async() =>{
    //     const res = await fetch('http://localhost:5000/users')
    //     return res.json()
    // })

    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })


    const handleMakeAdmin = user =>{
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `WOW is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }





// :TODO delete  and Instrucstor korbo

const handleMakeInstructor = (user) =>{
 console.log(user)
 fetch(`http://localhost:5000/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `WOW is an Instructor Now!`,
                    showConfirmButton: false,
                    timer: 1000
                  })
            }
        })

}

const handleDelete = user => {
   
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            fetch(`http://localhost:5000/user/${user._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                       refetch();
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    }
                })
        }
    })
}


    return (
        <div className="w-full">
       
        <h3 className="text-3xl font-semibold my-4">Total Users: {users.length}</h3>
        <div className="overflow-x-auto">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Make Admin</th>
                        <th>Make Instructor</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => <tr key={user._id}>
                            <th>{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{ user.role === 'admin' ? 'admin' :
                                    <button onClick={() => handleMakeAdmin(user)} disabled={user.role === 'instructor'} className="btn btn-ghost bg-orange-600  text-white"><FaUserShield></FaUserShield></button> 
                                    }</td>
                            <td>{ user.role === 'instructor' ? 'instructor' :
                                    <button onClick={() => handleMakeInstructor(user)}  disabled={user.role === 'admin'} className="btn btn-ghost bg-teal-800  text-white"><FaUserCheck></FaUserCheck></button> 
                                    }</td>
                            
                            <td><button onClick={() => handleDelete(user)} className="btn btn-outline bg-pink-700  text-white"><FaTrashAlt></FaTrashAlt></button></td>
                        </tr>)
                    }
                    
                    
                </tbody>
            </table>
        </div>
    </div>
);
};

export default ManageUser;