
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const ViewOneProject = () => {
    const [singleData, setSingleData] = useState([]);
    const params = useParams();

    const HandleReadSingleData = () => {
        axios.get(`http://localhost:9000/readOne/Project/${params.id}`).then((res) => {
            setSingleData(res.data);
        })
    }

    useEffect(() => {
        HandleReadSingleData();
    }, []);

    return (
        <>
        <div>
            <div className="flex justify-center mt-16 mb-24 px-6">
                {
                    singleData.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-500"
                            >
                                <img
                                    className="w-full h-80 object-cover"
                                    src={`http://localhost:9000/allimages/${item.image}`}
                                    alt={item.title}
                                />
                                <div className="p-8">
                                    <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
                                        {item.title}
                                    </h1>
                                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                        {item.minidescription}
                                    </p>

                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Quas repellendus voluptate accusamus ullam similique autem 
                                        suscipit, fugiat doloremque deserunt, repellat velit expedita 
                                        temporibus, inventore beatae! Rerum sunt vitae dolorem nobis?
                                    </p>

                                    <p className="text-gray-700 leading-relaxed">
                                        Cupiditate neque, expedita dolores illum corrupti cum 
                                        laudantium ipsam soluta repellat distinctio aspernatur. 
                                        Tempora omnis officia incidunt accusantium similique 
                                        libero fugit.
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            {/* Section dheeraad ah */}
            <div className="bg-gradient-to-r mb-1 from-indigo-600 to-purple-700 py-20">
                <div className="max-w-6xl mx-auto text-center px-6">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Related Projects 🚀
                    </h2>
                    <p className="text-gray-200 max-w-2xl mx-auto mb-8">
                        Halkan ka hel mashaariic kale oo la mid ah kuwa aad hadda daawanayso. 
                        Waxaa laga yaabaa inaad hesho fikrado cusub ama dhiirrigelin ku caawin doonta 
                        safarkaaga horumarineed.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
                        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Project Idea 1</h3>
                            <p className="text-gray-600 text-sm">
                                Mashruuc yar oo ku saabsan React Components iyo design system.
                            </p>
                        </div>
                        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Project Idea 2</h3>
                            <p className="text-gray-600 text-sm">
                                Mashruuc lagu dhisayo API iyo frontend isku xiraya React iyo Node.js.
                            </p>
                        </div>
                        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Project Idea 3</h3>
                            <p className="text-gray-600 text-sm">
                                Mashruuc design UI/UX ah oo lagu baranayo Tailwind CSS iyo animations.
                            </p>
                        </div>
                    </div>

                    <Link to="/Project">
                        <button className="mt-10 bg-white text-indigo-600 font-semibold px-6 py-3 rounded-xl shadow-lg hover:opacity-90 transition">
                            Explore More Projects
                        </button>
                    </Link>
                </div>
            </div>

            </div>
        </>
    )
}

export default ViewOneProject
