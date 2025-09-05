import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Project() {


    const [project, setproject] = useState([])

    const handleReadBlog = () => {
        axios.get("http://localhost:9000/read/Project").then((res) => {
            setproject(res.data)
        })
    }



    useEffect(() => {
        handleReadBlog()
    },[])



    return <div className="grid grid-cols-2 space-x-32" >

        {
            project.map((item, index) => {
                return (
                    <div key={index} className="ml-28 mt-20 w-80 mb-20 ">
                        <img className="w-60 " src={`http://localhost:9000/allimages/${item.image}`} alt="" />
                        <p className="text-2xl">{item.title}</p>
                        <p>{item.description}</p>
                        <Link to= {`/ViewOneProject/${item._id}`} ><button  className="px-2 bg-gray-600 text-red-500 mt-2">View more</button></Link>
                    </div>
                )
            })
        }



    </div>
}
export default Project