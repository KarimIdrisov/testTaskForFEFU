import React from 'react'

import { createUseStyles } from 'react-jss'
import LineChart from '../../charts/LineChart';
import { changeData } from '../../store/actions';
import { connect } from 'react-redux';

const data = [
   {
      type: 'Всего НПР',
      year: 2014,
      value: 500,
   },
   {
      type: 'Всего НПР',
      year: 2015,
      value: 600,
   },
   {
      type: 'Всего НПР',
      year: 2016,
      value: 750,
   },
   {
      type: 'Всего НПР',
      year: 2017,
      value: 700,
   },
   {
      type: 'Всего НПР',
      year: 2018,
      value: 500,
   },
   {
      type: 'Всего НПР',
      year: 2019,
      value: 600,
   },
   {
      type: 'Всего НПР',
      year: 2020,
      value: 650,
   },
   {
      type: 'Основное место работы',
      year: 2014,
      value: 200,
   },
   {
      type: 'Основное место работы',
      year: 2015,
      value: 250,
   },
   {
      type: 'Основное место работы',
      year: 2016,
      value: 240,
   },
   {
      type: 'Основное место работы',
      year: 2017,
      value: 300,
   },
   {
      type: 'Основное место работы',
      year: 2018,
      value: 160,
   },
   {
      type: 'Основное место работы',
      year: 2019,
      value: 700,
   },
   {
      type: 'Основное место работы',
      year: 2020,
      value: 840,
   },
   {
      type: 'Внешний совместитель',
      year: 2014,
      value: 100,
   },
   {
      type: 'Внешний совместитель',
      year: 2015,
      value: 600,
   },
   {
      type: 'Внешний совместитель',
      year: 2016,
      value: 500,
   },
   {
      type: 'Внешний совместитель',
      year: 2017,
      value: 200,
   },
   {
      type: 'Внешний совместитель',
      year: 2018,
      value: 123,
   },
   {
      type: 'Внешний совместитель',
      year: 2019,
      value: 534,
   },
   {
      type: 'Внешний совместитель',
      year: 2020,
      value: 642,
   },
];

const data2 = [
   {
      type: 'Всего НПР',
      year: 2014,
      value: 132,
   },
   {
      type: 'Всего НПР',
      year: 2015,
      value: 532,
   },
   {
      type: 'Всего НПР',
      year: 2016,
      value: 234,
   },
   {
      type: 'Всего НПР',
      year: 2017,
      value: 253,
   },
   {
      type: 'Всего НПР',
      year: 2018,
      value: 423,
   },
   {
      type: 'Всего НПР',
      year: 2019,
      value: 654,
   },
   {
      type: 'Всего НПР',
      year: 2020,
      value: 123,
   },
   {
      type: 'Основное место работы',
      year: 2014,
      value: 423,
   },
   {
      type: 'Основное место работы',
      year: 2015,
      value: 534,
   },
   {
      type: 'Основное место работы',
      year: 2016,
      value: 345,
   },
   {
      type: 'Основное место работы',
      year: 2017,
      value: 768,
   },
   {
      type: 'Основное место работы',
      year: 2018,
      value: 234,
   },
   {
      type: 'Основное место работы',
      year: 2019,
      value: 523,
   },
   {
      type: 'Основное место работы',
      year: 2020,
      value: 234,
   },
   {
      type: 'Внешний совместитель',
      year: 2014,
      value: 543,
   },
   {
      type: 'Внешний совместитель',
      year: 2015,
      value: 131,
   },
   {
      type: 'Внешний совместитель',
      year: 2016,
      value: 500,
   },
   {
      type: 'Внешний совместитель',
      year: 2017,
      value: 200,
   },
   {
      type: 'Внешний совместитель',
      year: 2018,
      value: 123,
   },
   {
      type: 'Внешний совместитель',
      year: 2019,
      value: 534,
   },
   {
      type: 'Внешний совместитель',
      year: 2020,
      value: 642,
   },
];

const useStyles = createUseStyles({
   chart_wrapper: {
      height: '400px',
      width: '100%',
      padding: '10px',

      background: '#2F3B52',
      borderRadius: '5px'
   },
   chart_header: {
      display: 'flex',
      alignItems: 'center'
   },
   header_title: {
      color: '#FFFFFF',
      padding: '8px',
      fontFamily: 'Roboto',
      fontSize: '22px',
      lineHeight: '24px',


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
      padding: '30px 12px 0 20px'
   }
})

function NprByYears(props) {

   const classes = useStyles()

   const { change } = props

   const config = {
      height: 300,
      data: change ? data2 : data,
      xField: 'year',
      yField: 'value',
      seriesField: 'type',
      legend: {
         position: 'right',
         style: {
            fill: '#fff',
         },
         itemName: {
            style: {
               fill: '#fff',
               fontSize: 16
            }
         },
         marker: {
            symbol: 'circle',
         }
      },
      smooth: true,
      animation: {
         appear: {
            animation: 'path-in',
            duration: 5000,
         },
      },
      xAxis: {
         grid: {
            line: {
               style: {
                  stroke: '#242E42',
                  lineDash: [4, 2],
               },
            },
         },
         line: {
            style: {
               stroke: '#242E42',
            },
         },
         tickLine: {
            style: {
               lineWidth: 0,
            },
         },
      },
      yAxis: {
         grid: {
            line: {
               style: {
                  stroke: '#242E42',
               },
            },
         },
         line: {
            style: {
               stroke: '#242E42',
            },
         },
      },
      meta: {
         year: {
            range: [0, 1],
         },
         value: {
            tickCount: 6
         }
      }
   }

   return (
      <div className={classes.chart_wrapper}>
         <div className={classes.chart_header}>
            <h3 className={classes.header_title}>Численость НПР по годам</h3>
         </div>

         <div className={classes.chart} >
            <LineChart config={config} />
         </div>
      </div>
   )
}

export default connect((state) => state.charts, { changeData })(NprByYears);