import React, { useEffect } from 'react'
import { Pie } from '@antv/g2plot';

import { createUseStyles } from 'react-jss'
import { MoreOutlined } from '@ant-design/icons';

const data = [
   { school: 'Биология и химия', percent: 25 },
   { school: 'Инженерные науки', percent: 25 },
   { school: 'Математика', percent: 25 },
   { school: 'Биомедицина', percent: 15 },
   { school: 'Социальные науки', percent: 10 },
];

const useStyles = createUseStyles({
   chart_wrapper: {
      height: '234px',
      width: '100%',

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

export default function DistributionOfKnowledges() {
   const ref = React.useRef(null)
   let piePlot = null

   const classes = useStyles()

   useEffect(() => {
      if (!piePlot) {
         piePlot = new Pie(ref.current, {
            height: 140,
            width: 360,
            data,
            angleField: 'percent',
            colorField: 'school',
            radius: 0.8,
            innerRadius: 0.7,
            statistic: {
               title: false,
               content: false,
            },
            label: false,
            style: {
               shadowColor: '#ffffff',
            },
            legend: {
               offsetX: -80,
               itemValue: {
                  formatter: (text, item) => {
                     const items = data.filter((d) => d.school === item.value);
                     return items[0].percent + ' %'
                  },
                  style: {
                     fill: '#fff',
                     opacity: 0.65,
                  },
               },
               style: {
                  fill: '#fff'
               },
               itemName: {
                  style: {
                     fill: '#fff',
                     fontSize: 16
                  }
               }
            }
         });

      }
      piePlot.render()
   }, [])

   return (
      <div className={classes.chart_wrapper}>
         <div className={classes.chart_header}>
            <h3 className={classes.header_title}>Распределение по областям знаний</h3>

            <MoreOutlined className={classes.button_icon} />
         </div>

         <div ref={ref} />
      </div>
   )
}
