
import { useState } from "react";
import { FaTwitter, FaFacebook, FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Dashboard({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-[294px] h-screen bg-gray-200 shadow-lg flex flex-col items-center py-10 
        transform ${open ? "translate-x-0" : "-translate-x-full"} 
        transition-transform duration-300 md:translate-x-0`}
      >
        {/* Profile Image */}
        <img
          src="https://lmpixels.com/demo/sunshine-demo/sunshine-version-2/sunshine-html-template-red/images/my_photo.png"
          alt="profile"
          className="w-28 h-24 rounded-full mb-4"
        />

        {/* Name & Job */}
        <h2 className="text-xl font-semibold">Muscab Hassan</h2>
        <p className="text-gray-500 mb-8">Web Developer</p>

        {/* Navigation */}
        <nav className="flex flex-col gap-4 text-gray-700">
          <Link to="/Home" className="hover:text-blue-500">Home</Link>
          <Link to="/About" className="hover:text-blue-500">About me</Link>
          <Link to="/Resume" className="hover:text-blue-500">Resume</Link>
          <Link to="/Project" className="hover:text-blue-500">Project</Link>
          <Link to="/Blog" className="hover:text-blue-500">Blog</Link>
          <Link to="/Contact" className="hover:text-blue-500">Contact</Link>
        </nav>

        {/* Social Media */}
        <div className="flex gap-6 mt-auto mb-6 text-gray-600">
          <a href="#"><FaTwitter size={20} /></a>
          <a href="#"><FaFacebook size={20} /></a>
          <a href="#"><FaGithub size={20} /></a>
        </div>
      </div>

      {/* Main Content */}
      {/* <div className="ml-[250px] flex-1 min-h-screen overflow-y-auto p-6">
        {children}
      </div> */}
      <div className="flex-1 min-h-screen overflow-y-auto p-6 md:ml-[250px]">
  {children}
</div>

      {/* Mobile Navbar Button */}
      <div className="md:hidden fixed top-0 right-0 p-4 bg-gray-100 shadow">
        <button onClick={() => setOpen(!open)}>
          {open ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
