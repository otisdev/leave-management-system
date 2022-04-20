import React from 'react'
import "./chart.scss"
import { AreaChart, linearGradient, XAxis, YAxis, CartesianGrid, Tooltip, Area, ResponsiveContainer } from 'recharts';
import moment from 'moment'


const Chart = ({leave}) => {
  let date = new Date();
  let datas =  leave.map((item)=>(
     {
      date: `${moment(item.leave_start).format('MMMM')}`,
      status : `${item.Status}`

      }  
     )
    )
  
  const result = [...datas.reduce( (mp, o) => {
      if (!mp.has(o.date)) mp.set(o.date, { ...o, Requests: 1 });
      mp.get(o.date).Requests++;
      return mp;
  }, new Map).values()];




  const data = [
    {
      name: 'JAN',
      Requests: 4000,
      Approved: 2000,
      Denied: 2000,
    },
    {
      name: 'FEB',
      Requests: 3000,
      Approved: 1000,
      Denied: 2000,
    },
    {
      name: 'MARCH',
      Requests: 2000,
      Approved: 1000,
      Denied: 1000,
    },
    {
      name: 'APRIL',
      Requests: 2780,
      Approved: 780,
      Denied: 2000,
    },
    {
      name: 'MAY',
      Requests: 1890,
      Approved: 890,
      Denied: 1000,
    },
    {
      name: 'JUNE',
      Requests: 2390,
      Approved: 390,
      Denied: 2000,
    },
    {
      name: 'JULY',
      Requests: 3490,
      Approved: 490,
      Denied: 3000,
    },
  ];

  return (
<div className="chart">
    <ResponsiveContainer>
     {/*<div className="Title">Weekly insight</div> */}
    <AreaChart width={730} aspect={2/1} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorRequests" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorApproved" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.9}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorDenied" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#c66464" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#c66464" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  
  <CartesianGrid strokeDasharray="3 3" className='chartGrid' />
  <Tooltip />
  <Area type="monotone" dataKey="Requests" stroke="#8884d8" fillOpacity={1} fill="url(#colorRequests)" />
  <Area type="monotone" dataKey="Approved" stroke="#82ca9d" fillOpacity={1} fill="url(#colorApproved)" />
  <Area type="monotone" dataKey="Denied" stroke="#c66464" fillOpacity={1} fill="url(#colorDenied)" />
</AreaChart>
    </ResponsiveContainer>
</div>
  )
}

export default Chart