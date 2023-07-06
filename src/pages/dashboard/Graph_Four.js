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
    "name": "Reinger Inc",
    "sector": "Services",
    "siren": 135694027,
    "results": [
        1,
        2
    ]
}
  
]

export default function Graph_four() {
  
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
      <Bar dataKey="name" fill="#5DFDCB" />
      <Bar dataKey="sector" fill="#90D7FF" />
      <Bar dataKey="siren" fill="#C9F9FF" />
      <Bar dataKey="results" fill="#BFD0E0" />
    </BarChart>
    </div></>
  )
}