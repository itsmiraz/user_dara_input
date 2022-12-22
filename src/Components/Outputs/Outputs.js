import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
const Outputs = ({ setModalData }) => {

    const [userDatas, setUserData] = useState([])
    useEffect(() => {
        fetch('https://linkdin-task-server.vercel.app/userdata')
            .then(res => res.json())
            .then(data => setUserData(data))

    }, [userDatas])



    

    const handleDelete = (id) => {
        console.log('delete', id);
        fetch(`https://linkdin-task-server.vercel.app/userdata/${id}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.error('Deleted')
                }
            })



    }
   

    return (
        <div className='px-1 py-5 md:px-10'>
            <div className="table shadow-2xl" >
                <table className="p-2 w-full md:w-[500px]">

                    <thead className='p-6'>
                        <tr className='bg-slate-900 py-8 text-white'>

                            <th className='py-2'>Name</th>
                            <th>Sectors</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody >

                        {
                            userDatas?.map((userData, i) => <tr key={i}>

                                <td>{userData.name}</td>
                                <td><p>{userData.select.slice(0, 16)}{userData.select.length > 16 ? '...':'' }</p></td>
                                    
                                <td className='md:flex hidden'>
                                    <button onClick={() => handleDelete(userData._id)} className='mr-4'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                    </svg>
                                    </button>
                                    <button>
                                        <label onClick={() => setModalData(userData)} htmlFor="editData">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                            </svg>

                                        </label>
                                    </button>
                                </td>
                                <td className='md:hidden flex justify-end items-center'>
                                    <div className="dropdown items-center dropdown-end">
                                        <label tabIndex={0} className=" ml-1 "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                        </svg>
                                        </label>
                                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                            <li>

                                                <button onClick={() => handleDelete(userData._id)} className='mr-4'>    
                                                    Delete
                                                </button>
                                            </li>
                                            <li>
                                                <button>


                                                    <label onClick={() => setModalData(userData)} htmlFor="editData">

                                                      Edit

                                                    </label>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>)

                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Outputs;