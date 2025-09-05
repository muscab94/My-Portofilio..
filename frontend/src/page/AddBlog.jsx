import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddBlog = () => {
    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [minidescription, setmaindescription] = useState("");


    const navigate = useNavigate()


    const handleCreateData = () => {
        const formData = new FormData();

        formData.append("img", image)
        formData.append("title", title)
        formData.append("description", description)
        formData.append("minidescription", minidescription)


        axios.post("http://localhost:9000/create/Blog", formData).then(() => {
            alert("You Added new Blog ");
            navigate("/Blog")
        })
    }



    return (
        <div className='flex justify-center items-center h-screen'>
            <form onSubmit={(e) => e.preventDefault()} className='bg-cyan-900 w-[75%] h-96 rounded-2xl p-10 pl-20'>
                <input
                    onChange={(e) => setImage(e.target.files[0])}
                    className='outline-none text-3xl text-white' type="file" required /> <br /> <br />
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className='outline-none w-80 h-10 rounded-lg pl-3 text-2xl' type="text" placeholder='Enter Your Title' required /> <br /> <br />

                <input
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className='outline-none w-80 h-10 rounded-lg pl-3 text-2xl' type="text" placeholder='Enter Your description' required /> <br /> <br />
                <input
                    value={minidescription}
                    onChange={(e) => setmaindescription(e.target.value)}
                    className='outline-none w-80 h-10 rounded-lg pl-3 text-2xl' type="text" placeholder='Enter Your maindescription' required /> <br /> <br />
                <button
                    onClick={handleCreateData}
                    type='submit' className='bg-white w-80 py-2 rounded-lg text-gray-900  text-3xl'>Add Project</button>
            </form>
        </div>
    )
}

export default AddBlog