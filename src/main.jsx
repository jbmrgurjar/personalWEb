import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Root from './Root.jsx'
// import { Routes,Route} from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Router, RouterProvider, Routes,BrowserRouter } from 'react-router-dom'

// const router=createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/'element={<Root/>} >
//     <Route path='' element={<Home/>}/>
//     <Route path='about' element={<About/>}/>
//     <Route path='contact' element={<Contact/>}/>
//     {/* <Routes path='' element={<Home/>}/> */}
//     </Route>
//   )
// )
 
const router=createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    children:[
      {
        path:"",
        element:<Home />
        
      },
      {
        path:"about",
        element:<About />

      },
      {
        path:"Contact",
        element:<Contact />

      },
      {
        path:"user/id",
        element:<User />

      },
      {
        path:"github",
        element:<Github />

      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router}/>
  </StrictMode>,
)
