import React from 'react';
import { toast } from 'react-hot-toast';

const EditDataModal = ({ modalData, setModalData, selectors }) => {

    const handleFrom = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value;
        const select = form.select.value; 

        const userData = {
            name,
            select
        }
        fetch(`https://linkdin-task-server.vercel.app/userData/${modalData._id}`, {
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged === true) {
                    toast.success('Edited')
                    setModalData(null)
                }
        })



      
    }
    return (
        <div>

            <input type="checkbox" id="editData" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="editData" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleFrom} className='flex flex-col py-5 gap-y-5' action="">
                        <h1>Edit Your Information</h1>
                        <input required type="text" defaultValue={modalData.name} name='name' className="input input-bordered w-full " />
                        <select name='select' required className="select select-bordered w-full ">
                            <option defaultValue={modalData.select} >{ modalData.select}</option>
                            {
                                selectors[0]?.selectors?.map((selector, i) => <option key={i}>{selector}</option>)
                            }
                        </select>
                      
                        <button type='submit' className='btn  bg-blue-600 hover:bg-blue-700  w-full'>Save</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditDataModal;