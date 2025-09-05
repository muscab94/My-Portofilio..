

import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const ViewOneBlog = () => {
    const [singleData, setSingleData] = useState([]);
    const params = useParams();

    const HandleReadSingleData = () => {
        axios.get(`http://localhost:9000/ReadSingle/Blog/${params.id}`).then((res) => {
            setSingleData(res.data);
        })

    }

    useEffect(() => {
        HandleReadSingleData();
    },);



    return (
        <div className='flex justify-center mt-10 mb-52'>
            {
                singleData.map((item, index) => {
                    return (
                        <div key={index} className='px-40  '>

                            <img className='rounded-t-lg w-full h-[200px] object-cover' src={`http://localhost:9000/allimages/${item.Image}`} alt={item.title} />
                            <div className='px-4 py-2'>
                                <h1 className='text-2xl font-bold '>{item.title}</h1>
                                <p className='mt-2'>{item.minidescription}</p>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default ViewOneBlog