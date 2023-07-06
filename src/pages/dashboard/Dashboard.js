import React from 'react'
import '../dashboard/Dashboard.css'
import Image from '../../Logo.png'
import { NavLink } from 'react-router-dom'

function dashboard() {
  const menuItem3=[
    {
       title:"luxury",
       path:"/graph_one"
   },
]
const menuItem4=[
  {
     title:"luxury",
     path:"/graph_two"
 },
]
const menuItem5=[
  {
     title:"luxury",
     path:"/graph_tree"
 },
]
const menuItem6=[
  {
     title:"luxury",
     path:"/graph_four"
 },
]
  return (
    <> <div className='header'>
      <h1 className='head'>Welcome on TKT dashboard!</h1>
      </div>
      <div class="container_pet-select">
        <select class="pet-select">
            <option class="none" value="">Sector</option>
            <option value="Label1">Label1</option>
            <option value="Label2">Label2</option>
            <option value="Label3">Label3</option>
        </select>
        <select class="pet-select1">
            <option value="">Company</option>
            <option value="Label1">Label1</option>
            <option value="Label2">Label2</option>
            <option value="Label3">Label3</option>
        </select>
    </div>
    <div className='container-one'>
      <p>company</p>
      <p>n° Siren</p>
      <p>category</p>
    </div><section className='section-one'>
        <div className='Text1'><p>Abbott and sons</p></div>
        <div className='number'><p>113996185</p></div>
       <div className='container-link'>
       {
        menuItem3.map((item3, index)=>(
            <NavLink to={item3.path} key={index}
            className="btn-one">
                <div className='btn-one'><button className='btn-one'>listes</button></div>
            </NavLink>
        ))
        }
       </div>
      </section><section className='section-two'>
      <div className='Text2'><p>Abbott, jacobson and kessler</p></div>
        <div className='number1'><p>190068556</p></div>
       <div className='container-link1'>
        {
        menuItem4.map((item4, index)=>(
            <NavLink to={item4.path} key={index}
            className="btn-two">
                <div className='btn-two'><button className='btn-two'>Listes</button></div>
            </NavLink>
        ))
        }
        </div>
      </section><section className='section-three'>
        <p>Abbott - orn</p>
        <p className='number_two'>175574586</p>
        {
        menuItem5.map((item5, index)=>(
            <NavLink to={item5.path} key={index}
            className="btn-three">
                <div className='btn-three'><button className='btn-three'>Details</button></div>
            </NavLink>
        ))
        }
      </section><section className='section-four'>
        <p>abernathy and sons</p>
        <p>144183923</p>
        {
        menuItem6.map((item6, index)=>(
            <NavLink to={item6.path} key={index}
            className="btn-four">
                <div className='btn-four'><button className='btn-four'>Details</button></div>
            </NavLink>
        ))
        }
      </section> </> 
  )
}

export default dashboard