import React from 'react'
import Image6 from '../../arrow-left.svg'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
const data = [

{
    "id": 1,
    "ca": 2077357,
    "margin": 497351,
    "ebitda": 65952,
    "loss": 858474,
    "year": 2017,
    "business": 1
}
  
]

export default function Graph_tree() {
  return (
    <><>
    <div className='container_arrow'>
      <div><button className='img-graph'><a href='/'><img src={Image6} /></a></button></div>
      <div className='Text6'>
        <p>Abbott and Sons</p>
        <p>n° Siren 113996185</p>
      </div>
    </div>
  </>
  <div className='BarChart'>
  <BarChart className='barchart'
    width={500}
    height={300}
    data={data}
    margin={{
      top: 5,
      right: 30,
      left: 35,
      bottom: 5
    }}
  >
    <h1>bonjour</h1>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="id" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="ca" fill="#1A5D1A" />
        <Bar dataKey="margin" fill="#FAE392" />
        <Bar dataKey="ebitda" fill="#78C1F3" />
        <Bar dataKey="loss" fill="#F8FDCF" />
        <Bar dataKey="year" fill="#4E4FEB" />
        <Bar dataKey="business" fill="#068FFF" />
    </BarChart>
    </div></>
  )
}