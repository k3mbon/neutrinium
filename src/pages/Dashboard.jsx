import React, { useEffect } from 'react'

const Dashboard = () => {
  useEffect(()=>{
    document.title='Dashboard | Neutrinium'
  })

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard