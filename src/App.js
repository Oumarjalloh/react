import React from 'react'
import '../src/App.css'
import Sidebar from './pages/global/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard'
import Lorem1 from './pages/lorem1/Lorem1'
import Lorem2 from './pages/lorem2/Lorem2'
import Graph_One from './pages/dashboard/Graph_One'
import Graph_Two from './pages/dashboard/Graph_Two'
import Graph_Tree from './pages/dashboard/Graph_Tree'
import Graph_Four from './pages/dashboard/Graph_Four'

export default function App() {
  return (
    <div>
      <Sidebar>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/dashboard' element= {<Dashboard/>}/>
          <Route path='/lorem1' element={<Lorem1/>}/>
          <Route path='/lorem2' element={<Lorem2/>}/>
          <Route path='/graph_one' element={<Graph_One/>}/>
          <Route path='/graph_two' element={<Graph_Two/>} />
          <Route path='/graph_four' element={<Graph_Four/>}/>
          <Route path='/graph_tree' element={<Graph_Tree/>}/>
        </Routes>
      </Sidebar>
    </div>
  )
}
