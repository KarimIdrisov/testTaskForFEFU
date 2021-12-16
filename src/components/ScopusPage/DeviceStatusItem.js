import React from 'react'
import { Row, Col } from 'antd'

import { createUseStyles } from 'react-jss'
import TinyLineChart from '../../charts/TinyLineChart'

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
   const data = props.device.data

   const config = {
      height: 60,
      autoFit: false,
      data,
      smooth: true,
      color: props.device.color,
   }

   return (
      <div className={classes.status_wrapper}>
         <Row>
            <Col span={8}>
               <h3 className={classes.status_title} >{props.device.value}</h3>
               <span className={classes.status_interval} >{props.device.interval}</span>
            </Col>
            <Col span={16}>
               <div>
                  <TinyLineChart config={config} />
               </div>
            </Col>
         </Row>
      </div>
   )
}
