import React from 'react'
import { createUseStyles } from 'react-jss'
import { Row, Col } from 'antd'

const useStyles = createUseStyles({
   stats_wrapper: {
      fontFamily: 'Roboto',
      color: '#FFFFFF'
   },
   stats_title: {
      color: '#FFFFFF',
      fontSize: '18px'
   }
})

export default function StatsInfo(props) {

   const classes = useStyles()

   return (
      <div className={classes.stats_wrapper}>
         <h3 className={classes.stats_title}>{props.stats.title}</h3>
         {
            props.stats.data.map((item, key) => {
               return (
                  <Row key={key}>
                     <Col span={10}>{item.title}</Col>
                     <Col span={10}>{item.value}</Col>
                  </Row>
               )
            })
         }
      </div>
   )
}
