import { Button, Col, DatePicker, Row } from 'antd'
import React from 'react'
import SocialGraph from '../charts/SocialGraph'
import { SettingFilled } from '@ant-design/icons';
import { Tooltip } from 'antd'

import { createUseStyles } from 'react-jss'
import DistributionOfKnowledges from '../components/DistributionOfKnowledges'
import TopSchools from '../components/TopSchools'
import MainIdicators from '../components/MainIdicators'
import DeviceStatus from '../components/DeviceStatus'
import Publications from '../components/Publications';

const useStyles = createUseStyles({
   pageHeader: {
      display: 'flex',

      marginBottom: '7px'
   },
   headerTitle: {
      flex: '1 1',

      color: '#FFFFFF',
      fontSize: '30px',
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: '300',
      lineHeight: '35px'
   },
   headerDatePicker: {
      width: '300px',
      height: '50px',

      color: '#98A7B9',

      borderRadius: '5px',
      background: '#20293C',
      border: 'none'
   },
   button_icon: {
      padding: '7px',
      display: 'flex',
      alignItems: 'end',
      color: '#3E4E6C',

      fontSize: '20px'
   },
})

export default function ScopusPage() {

   const classes = useStyles()

   return (
      <div>

         <div className={classes.pageHeader}>
            <h2 className={classes.headerTitle}>Обзор</h2>

            <DatePicker className={classes.headerDatePicker} placeholder="Выберите дату" />
            <Tooltip placement="bottom" title='Настройки'>
               <SettingFilled className={classes.button_icon} />
            </Tooltip>
         </div>

         <div>
            <Row gutter={16}>
               <Col span={16}>
                  <SocialGraph />
               </Col>
               <Col span={8}>
                  <Row style={{ marginBottom: '10px' }}>
                     <DistributionOfKnowledges />
                  </Row>
                  <Row gutter={16}>
                     <Col span={12}>
                        <TopSchools />
                     </Col>
                     <Col span={12}>
                        <Publications />
                     </Col>
                  </Row>
               </Col>
            </Row>
            <Row style={{ margin: '8px 0' }}>
               <MainIdicators />
            </Row>
         </div>

         <DeviceStatus />
      </div>
   )
}
