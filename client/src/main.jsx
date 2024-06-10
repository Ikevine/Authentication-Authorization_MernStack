import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout.jsx'

//imported  pages]
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home.jsx';
import Postdetails from './pages/Postdetail.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import UserProfile from './pages/UserPofile.jsx';
import CreatePost from './pages/CreatePost.jsx'
import CategoryPosts from './pages/CategoryPosts.jsx'
import Authors from './pages/Authors.jsx';
import Dashboard from './pages/Dashboard.jsx';
import AuthorPost from './pages/AuthorPost.jsx'
import EditProfile from './pages/EditProfile.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children:[
      {index:true, element: <Home/>},
      {path:"posts/:id", element: <Postdetails/>},
      {path:"login", element: <Login/>},
      {path:"register", element: <Register/>},
      {path:"profile/:id", element: <UserProfile/>},
      {path:"authors", element: <Authors/>},
      {path:"create", element: <CreatePost/>},
      {path:"posts/categories/:category", element: <CategoryPosts/>},
      {path:"posts/users/:id", element: <AuthorPost/>},
      {path:"myposts/:id'", element: <Dashboard/>},
      {path:"posts/:id/edit'", element: <EditProfile/>},
      {path:"*", element: <ErrorPage/>}
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
