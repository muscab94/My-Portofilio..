import {Route,  Routes} from "react-router-dom"
import Dashboard from "./components/Dashboard"
import Home from "./page/Home"
import About from "./page/About"
import Resume from "./page/Resume"
import Project from "./page/Project"
import Blog from "./page/Blog"
import Contact from "./page/Contact"
import ViewOne from "./page/ViewOneBlog"
import ViewOneProject from "./page/ViewOneProject"
import AddProject from "./page/AddProject"
import AddBlog from "./page/AddBlog"

function App(){
  return    <div className="flex ">
      <div>
      <Dashboard/>
      </div>
         <Routes>
          <Route path="/Home" element= {<Home/>} />
          <Route path="/About" element= {<About/>} />
          <Route path="/Resume" element= {<Resume/>} />
          <Route path="/Project" element= {<Project/>} />
          <Route path="/Blog" element= {<Blog/>} />
           <Route path="/Contact" element= {<Contact/>} />
           <Route path="/ViewOneblog/:id" element= {<ViewOne/>}  />
            <Route path="/ViewOneProject/:id" element= {<ViewOneProject/>}  />
             <Route path="/AddProject" element= {<AddProject/>}  />
             <Route path="/AddBlog" element= {<AddBlog/>}  />
         </Routes>
  </div>
}

export default App