import React, { useEffect } from 'react'

import { createUseStyles } from 'react-jss'
import { MoreOutlined } from '@ant-design/icons';
import { RingProgress } from '@antv/g2plot';

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
   chart: {
      display: 'flex',
      justifyContent: 'center'
   }
})

export default function Publications() {

   const ref = React.useRef(null)
   let ringProgress = null

   const classes = useStyles()

   useEffect(() => {
      if (!ringProgress) {
         ringProgress = new RingProgress(ref.current, {
            height: 100,
            width: 100,
            autoFit: false,
            percent: 0.6,
            color: ['#3E4E6C', '#1F8EFA'],
            innerRadius: 0.75,
            radius: 0.98,
            statistic: {
               title: {
                  style: { color: '#FFFFFF', fontSize: '28px', lineHeight: '33px' },
                  formatter: () => '10',
               },
            },
            progressStyle: {
               radius: [5, 5, 5, 5]
            }
         });

      }
      ringProgress.render();

   }, [])

   return (
      <div className={classes.chart_wrapper}>
         <div className={classes.chart_header}>
            <h3 className={classes.header_title}>Соотношение
               публикаций НПР И НС</h3>

            <MoreOutlined className={classes.button_icon} />
         </div>

         <div ref={ref} className={classes.chart}>

         </div>
      </div>
   )
}
