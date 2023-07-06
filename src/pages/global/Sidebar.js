import React from 'react'
import  { useState } from 'react';
import Image from '../../Logo.png'
import Image1 from '../../Avatar.png'
import Image2 from '../../dashboard.svg'
import Image3 from '../../bell.svg'
import Image4 from '../../chat-bubble-question.svg'
import Image5 from '../../menu-scale.svg'
import { NavLink } from 'react-router-dom'


export default function Sidebar ({children}) {
    const menuItem =[
        {
            title:"DASHBOARD",
            path:"/"
        },
    ]
    const menuItem1=[
        {
            title:"LOREM IPSUM",
            path:"/lorem1"
        },
    ]
    const menuItem2=[
         {
            title:"LOREM IPSUM",
            path:"/lorem2"
        },
    ]
   
    const[isOpen,setIsOpen] = useState(false);
    const toggle =()=>{setIsOpen(!isOpen)}
    return (
        <div className='container'>
            <div className='bars'onClick={toggle}><img src={Image5} />{isOpen} </div>
            <div className='sidebar' style={{display: isOpen ? "block":""}}>
                <img className='logo' src={Image}/>
                <div className='menu'>
                    <div>
                        {
                            menuItem.map((item, index)=>(
                                <NavLink to={item.path} key={index}
                                className="link">
                                    <div className='link_title'><img className='img' src={Image2} />{item.title}</div>
                                </NavLink>
                            ))
                            }
                            {
                            menuItem1.map((item1, index)=>(
                                <NavLink to={item1.path} key={index}
                                className="link">
                                    <div className='link_title'><img className='img' src={Image3} /> {item1.title}</div>
                                </NavLink>
                            ))
                        }
                        {
                            menuItem2.map((item2, index)=>(
                                <NavLink to={item2.path} key={index}
                                className="link">
                                    <div className='link_title'><img className='img' src={Image4} /> {item2.title}</div>
                                </NavLink>
                            ))
                        }
                    </div>
                </div>
                <div className='footer'>
                            <div><img src= {Image1}/></div>
                            <div className='text'>
                            <p>Sophie L.</p>
                            <p>sophie.l@gmail.com</p>
                            </div>
                        </div>
            </div>
            <main>{ children }</main>
        </div>
      )
}