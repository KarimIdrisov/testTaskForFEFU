import React, { useEffect } from 'react'

import { createUseStyles } from 'react-jss'
import { MoreOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import TinyColumnChart from '../charts/TinyColumnChart';

const data = [
   {
      school: 'ЮШ',
      rating: 38,
   },
   {
      school: 'ИШ',
      rating: 60,
   },
   {
      school: 'ШЕН',
      rating: 80,
   },
   {
      school: 'ШЦЭ',
      rating: 50,
   },
   {
      school: 'ШБМ',
      rating: 55,
   },
   {
      school: 'ШП',
      rating: 40,
   },
   {
      school: 'ШРМИ',
      rating: 10,
   },
];

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

export default function TopSchools() {

   const classes = useStyles()

   return (
      <div className={classes.chart_wrapper}>
         <div className={classes.chart_header}>
            <h3 className={classes.header_title}>Топ-школы</h3>

            <MoreOutlined className={classes.button_icon} />
         </div>

         <Space>
            {data.map((school) => {
               return (
                  <TinyColumnChart data={school.rating} title={school.school} />
               )
            })}
         </Space>
      </div>
   )
}
