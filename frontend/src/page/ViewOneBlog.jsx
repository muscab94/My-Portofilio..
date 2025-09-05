

import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Blog from './Blog';

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
    }, []);

    return (
        <>
        <div className=''>
            <div className="max-w-5xl mx-auto mt-16 mb-24 px-6">
                {singleData.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className="bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition duration-500"
                        >
                            {/* Sawirka */}
                            <img
                                className="w-full h-80 object-cover"
                                src={`http://localhost:9000/allimages/${item.Image}`}
                                alt={item.title}
                            />

                            {/* Qoraalka */}
                            <div className="p-8">
                                <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
                                    {item.title}
                                </h1>
                                <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                                    {item.minidescription}
                                </p>

                                <p className="text-gray-700 leading-relaxed text-base mb-6">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Expedita beatae, deleniti perspiciatis unde quaerat, saepe 
                                    aliquid sit repellat vitae blanditiis consequatur inventore 
                                    molestiae fuga rerum non harum obcaecati mollitia doloribus.
                                </p>

                                <p className="text-gray-700 leading-relaxed text-base">
                                    Dolore alias suscipit quis deleniti voluptatum autem, fuga 
                                    repellat quos labore totam ab praesentium, doloremque 
                                    laudantium facilis voluptas. Illum, aspernatur aliquid.
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Section dheeraad ah */}
            <div className="bg-gradient-to-r from-blue-600 mb-20 to-purple-700 py-16 mt-20">
                <div className="max-w-6xl mx-auto text-center px-6">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        More Inspiration Awaits ✨
                    </h2>
                    <p className="text-gray-200 max-w-2xl mx-auto mb-6">
                        Waxaad halkan ka heli doontaa qoraallo xiiso leh oo kugu dhiirrigelinaya 
                        inaad barato, aad barato iyo inaad ku raaxaysato safarkaaga aqooneed. 
                        Bal eeg qeybta hoose oo ku soo biir sheekooyinka kale.
                    </p>
                    <Link to="/Blog">
                        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl shadow-lg hover:opacity-90 transition">
                            Explore More Blogs
                        </button>
                    </Link>
                </div>
            </div>
            </div>
        </>
    )
}

export default ViewOneBlog
