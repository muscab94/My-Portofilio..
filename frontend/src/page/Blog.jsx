

import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Blog() {
  const [Blog, setBlog] = useState([])

  const handleReadBlog = () => {
    axios.get("http://localhost:9000/read/Blog").then((res) => {
      setBlog(res.data)
    })
  }

  useEffect(() => {
    handleReadBlog()
  }, [])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-10 bg-gray-50 min-h-screen">
      {Blog.map((item, index) => {
        return (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
          >
            <img
              className="w-full h-48 object-cover"
              src={`http://localhost:9000/allimages/${item.Image}`}
              alt={item.title}
            />
            <div className="p-5">
              <p className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </p>
              <p className="text-gray-600 text-sm line-clamp-3">
                {item.description}
              </p>
              <Link to={`/ViewOneblog/${item._id}`}>
                <button className="mt-4 w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-lg hover:opacity-90 transition">
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
export default Blog
