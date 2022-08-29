import { Layout } from 'antd'
import React from 'react'
import SideMenu from './SideMenu'

function Dashboard() {
  return (
    
    <Layout>
    <SideMenu />
    <div>
    <h2 style={{"text-align" : "center"}}>Dashboard</h2>
    </div>
    </Layout>
  )
}

export default Dashboard
