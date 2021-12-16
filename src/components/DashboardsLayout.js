import React from 'react'
import { Layout } from 'antd'
import LayoutHeader from './LayoutHeader'
import LeftNavbar from './LeftNavbar'
import { Content } from 'antd/lib/layout/layout'

import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
   layout: {
      background: '#242E42'
   },
   content: {
      margin: '25px 25px'
   }
})

export default function DashboardsLayout(props) {

   const classes = useStyles()

   return (
      <Layout>
         <LeftNavbar />
         <Layout className={classes.layout}>
            <LayoutHeader className="site-layout-background" />
            <Content className={classes.content}>
               {props.children}
            </Content>
         </Layout>
      </Layout>
   )
}
