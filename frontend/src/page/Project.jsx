
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
  }, [])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-10 bg-gray-50 min-h-screen">
      {project.map((item, index) => {
        return (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300"
          >
            {/* Image */}
            <img
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
              src={`http://localhost:9000/allimages/${item.image}`}
              alt={item.title}
            />

            {/* Content */}
            <div className="p-5">
              <p className="text-xl font-bold text-gray-800 mb-2">
                {item.title}
              </p>
              <p className="text-gray-600 text-sm line-clamp-3">
                {item.description}
              </p>

              <Link to={`/ViewOneProject/${item._id}`}>
                <button className="mt-4 w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-2 rounded-lg hover:opacity-90 transition">
                  View More
                </button>
              </Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default Project
