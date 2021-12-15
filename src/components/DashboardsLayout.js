import React from 'react'
import { Layout } from 'antd'
import LayoutHeader from './LayoutHeader'
import LeftNavbar from './LeftNavbar'
import { Content } from 'antd/lib/layout/layout'

import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({

})

export default function DashboardsLayout(props) {

   const styles = useStyles()

   return (
      <Layout>
         <LeftNavbar />
         <Layout style={{ background: '#242E42' }}>
            <LayoutHeader className="site-layout-background" style={{ padding: 0 }} />
            <Content style={{ margin: '25px 25px' }}>
               {props.children}
            </Content>
         </Layout>
      </Layout>
   )
}
