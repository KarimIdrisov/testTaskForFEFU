import React, { useEffect } from 'react'
import { TinyColumn } from '@antv/g2plot';
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
   column_name: {
      fontSize: '10px',
      color: '#FFF',
      fontFamily: 'Roboto',
      fontWeight: '400',
      textAlign: 'center'
   },
   column: {
      borderRadius: '5px',
   }
})

export default function TinyColumnChart(props) {
   const ref = React.useRef(null)

   const classes = useStyles()

   useEffect(() => {
      let tinyColumn = null
      const data = [props.data]

      if (!tinyColumn) {
         tinyColumn = new TinyColumn(ref.current, {
            width: 28,
            height: 100,
            autoFit: false,

            data,
            tooltip: {
               showContent: false,
               showTitle: false
            },
            columnStyle: {
               radius: [5, 5, 5, 5]
            }
         });
      }

      tinyColumn.render();
   }, [props.data])

   return (
      <div>
         <div ref={ref} className={classes.column}>

         </div>
         <h3 className={classes.column_name}>{props.title}</h3>
      </div>
   )
}
