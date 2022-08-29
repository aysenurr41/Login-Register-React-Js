import { Layout } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import React from 'react'
import SideMenu from './SideMenu'

function Profile() {
  return (
    <div>
      <Layout>
        <SideMenu />

        <div>
          <h2 >Profile Page</h2>
        </div>

      </Layout>
    </div>
  )
}

export default Profile
