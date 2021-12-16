import React from 'react'

import { Space } from 'antd'

import { MoreOutlined } from '@ant-design/icons';

import { createUseStyles } from 'react-jss'
import MainIndicatorsItem from './MainIndicatorsItem';


const useStyles = createUseStyles({
   chart_wrapper: {
      height: '210px',
      width: '100%',
      padding: '5px',

      background: '#2F3B52',
      borderRadius: '5px'
   },
   chart_header: {
      display: 'flex',
      alignItems: 'center'
   },
   header_title: {
      color: '#CDD3DD',
      padding: '8px',
      fontFamily: 'Roboto',
      fontSize: '17px',

      flex: '1 1'
   },
   button_icon: {
      padding: '7px',
      display: 'flex',
      alignItems: 'end',
      color: '#70889E',

      fontSize: '20px'
   },
})

export default function MainIdicators() {

   const classes = useStyles()

   const indicators = [
      {
         title: 'Публикаций',
         value: 745,
         diff: '+15',
         isUp: true,
      },
      {
         title: 'Цитирований',
         value: 200,
         diff: '+23',
         isUp: true,
      },
      {
         title: 'Авторов',
         value: 153,
         diff: '+10',
         isUp: false,
      },
      {
         title: 'Публикаций в журналах',
         value: 494,
         diff: '+28',
         isUp: true,
      },
   ]

   return (
      <div className={classes.chart_wrapper}>
         <div className={classes.chart_header}>
            <h3 className={classes.header_title}>Основные показатели</h3>

            <MoreOutlined className={classes.button_icon} />
         </div>

         <Space size="middle" align="center" style={{ display: 'flex', justifyContent: 'center' }}>
            {
               indicators.map((indicator, key) => {
                  return (
                     <MainIndicatorsItem indicator={indicator} divide={key === indicators.length - 1} />
                  )
               })
            }
         </Space>
      </div>
   )
}
