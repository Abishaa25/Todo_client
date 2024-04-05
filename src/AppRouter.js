import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import CreateEmploye from './componets/CreateEmploy'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import UpdateEmploye from './componets/UpdateEmploye'

function AppRouter() {
  return (
    <BrowserRouter>
    
    <Routes>
    <Route path='/' element={<App/>}/>
    <Route path='create' element={<CreateEmploye/>}/>
    <Route path='update/:id' element={<UpdateEmploye/>}/>
    </Routes>
    
    </BrowserRouter>
  )
}

export default AppRouter