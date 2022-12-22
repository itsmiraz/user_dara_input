import React from 'react';
import { toast } from 'react-hot-toast';

const Inputs = ({selectors}) => {

    const handleFrom = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value;
        const select = form.select.value; 

        const userData = {
            name,
            select
        }
        console.log(userData);
        fetch('https://linkdin-task-server.vercel.app/userData', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged === true) {
                    toast.success('Saved')
                    form.reset()
                }
        })

    }

 

    return (
        <div>
            <form  onSubmit={handleFrom} className='flex shadow-2xl py-10 flex-col px-1 md:px-10 gap-y-5' action="">
                <input required type="text" name='name' placeholder="Your Name" className="input input-bordered w-full " />
                <select name='select' required className="select select-bordered w-full ">
                    <option  defaultValue={'Select Sector'} disabled>Select Sector</option>
                    {
                        selectors[0]?.selectors?.map((selector, i) => <option key={i}>{selector}</option>)
                    }
                </select>
                <div className='flex items-center gap-2'>

                    <input  required type="checkbox" className="checkbox checkbox-primary" />
                    <span className="label-text">Agree the Terms</span>

                </div>
                <button type='submit' className='btn bg-blue-600 hover:bg-blue-700 w-full'>Save</button>
            </form>
        </div>
    );
};

export default Inputs;