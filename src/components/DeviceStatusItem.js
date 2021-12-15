import React, { useEffect } from 'react'
import { Row, Col } from 'antd'
import { TinyLine } from '@antv/g2plot'

import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
   status_wrapper: {
      flex: '1 1 25% ',
      margin: '25px',

      fontFamily: 'Roboto',
      fontStyle: 'normal',

   },
   status_title: {
      fontSize: '24px',
      lineHeight: '28px',

      color: '#FFFFFF'
   },
   status_interval: {
      fontSize: '12px',
      lineHeight: '14px',

      color: '#869AAC'
   }
})

export default function DeviceStatusItem(props) {

   const classes = useStyles()
   const ref = React.useRef(null)
   let trendChart = null

   useEffect(() => {

      const data = props.device.data

      if (!trendChart) {

         trendChart = new TinyLine(ref.current, {
            height: 60,
            autoFit: false,
            data,
            smooth: true,
            color: props.device.color,
         });
      }

      trendChart.render()
   }, [])

   return (
      <div className={classes.status_wrapper}>
         <Row>
            <Col span={8}>
               <h3 className={classes.status_title} >{props.device.value}</h3>
               <span className={classes.status_interval} >{props.device.interval}</span>
            </Col>
            <Col span={16}>
               <div ref={ref} />
            </Col>
         </Row>
      </div>
   )
}
