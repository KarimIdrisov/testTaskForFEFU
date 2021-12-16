import React from 'react'
import { createUseStyles } from 'react-jss'

import { Table } from 'antd'
import BarChart from '../../charts/BarChart';
import { changeData } from '../../store/actions';
import { connect } from 'react-redux';

const useStyles = createUseStyles({
   chart_wrapper: {
      width: '100%',
      minHeight: '660px',
      padding: '10px',

      fontFamily: 'Roboto',

      background: '#2F3B52',
      borderRadius: '5px'
   },
   chart_header: {
      display: 'flex',
      alignItems: 'center'
   },
   header_title: {
      padding: '8px',
      color: '#FFFFFF',
      fontSize: '18px',

      flex: '1 1'
   },
   chart: {
      margin: '10px',
      padding: '30px 60px 30px 60px',
      background: '#2F3B52',
      boxShadow: '0px 6px 13px rgba(21, 33, 56, 0.533345)',
      borderRadius: '2px',
   },
   table: {
      padding: '25px',
   }
})

const data = [
   {
      year: 2000,
      value: 300
   },
   {
      year: 2001,
      value: 400
   },
   {
      year: 2002,
      value: 312
   },
   {
      year: 2003,
      value: 634
   },
   {
      year: 2004,
      value: 391
   },
   {
      year: 2005,
      value: 954
   },
   {
      year: 2006,
      value: 1000
   },
   {
      year: 2007,
      value: 300
   },
   {
      year: 2008,
      value: 400
   },
   {
      year: 2009,
      value: 312
   },
   {
      year: 2010,
      value: 634
   },
   {
      year: 2011,
      value: 391
   },
   {
      year: 2012,
      value: 954
   },
   {
      year: 2013,
      value: 1000
   },
   {
      year: 2014,
      value: 300
   },
   {
      year: 2015,
      value: 400
   },
   {
      year: 2016,
      value: 312
   },
   {
      year: 2017,
      value: 634
   },
   {
      year: 2018,
      value: 391
   },
   {
      year: 2019,
      value: 954
   },
   {
      year: 2020,
      value: 1000
   }
]

const data2 = [
   {
      year: 2000,
      value: 123
   },
   {
      year: 2001,
      value: 123
   },
   {
      year: 2002,
      value: 143
   },
   {
      year: 2003,
      value: 252
   },
   {
      year: 2004,
      value: 435
   },
   {
      year: 2005,
      value: 675
   },
   {
      year: 2006,
      value: 123
   },
   {
      year: 2007,
      value: 342
   },
   {
      year: 2008,
      value: 435
   },
   {
      year: 2009,
      value: 675
   },
   {
      year: 2010,
      value: 634
   },
   {
      year: 2011,
      value: 391
   },
   {
      year: 2012,
      value: 954
   },
   {
      year: 2013,
      value: 123
   },
   {
      year: 2014,
      value: 300
   },
   {
      year: 2015,
      value: 312
   },
   {
      year: 2016,
      value: 312
   },
   {
      year: 2017,
      value: 324
   },
   {
      year: 2018,
      value: 391
   },
   {
      year: 2019,
      value: 954
   },
   {
      year: 2020,
      value: 435
   }
]

const dataSource = [
   {
      key: '1',
      name: 'Title',
      date: '12.12.2022',
      type: 'Article',
      index: 'SCPS',
      citation: 10,
      area: 'MATH',
      category: 'MATH'
   },
   {
      key: '2',
      name: 'Title',
      date: '12.12.2022',
      type: 'Article',
      index: 'SCPS',
      citation: 10,
      area: 'MATH',
      category: 'MATH'
   },
   {
      key: '3',
      name: 'Title',
      date: '12.12.2022',
      type: 'Article',
      index: 'SCPS',
      citation: 10,
      area: 'MATH',
      category: 'MATH'
   },
   {
      key: '4',
      name: 'Title',
      date: '12.12.2022',
      type: 'Article',
      index: 'SCPS',
      citation: 10,
      area: 'MATH',
      category: 'MATH'
   },
];

const columns = [
   {
      title: 'Название',
      dataIndex: 'name',
      key: 'name',
   },
   {
      title: 'Дата публикации',
      dataIndex: 'date',
      key: 'date',
   },
   {
      title: 'Тип публикации',
      dataIndex: 'type',
      key: 'type',
   },
   {
      title: 'Индекс',
      dataIndex: 'index',
      key: 'index',
   },
   {
      title: 'Цитирований',
      dataIndex: 'citation',
      key: 'citation',
   },
   {
      title: 'Область знаний',
      dataIndex: 'area',
      key: 'area',
   },
   {
      title: 'Категория знаний',
      dataIndex: 'category',
      key: 'category',
   },
];

const dataSource2 = [
   {
      key: '1',
      name: 'Title',
      date: '12.12.2022',
      type: 'Article',
      index: 'SCPS',
      citation: 10,
      area: 'MATH',
      category: 'MATH'
   },
   {
      key: '2',
      name: 'Title',
      date: '12.12.2022',
      type: 'Article',
      index: 'SCPS',
      citation: 10,
      area: 'MATH',
      category: 'MATH'
   },
   {
      key: '3',
      name: 'Title',
      date: '12.12.2022',
      type: 'Article',
      index: 'SCPS',
      citation: 10,
      area: 'RUSS',
      category: 'RUSS'
   },
   {
      key: '4',
      name: 'Title',
      date: '12.12.2022',
      type: 'Article',
      index: 'SCPS',
      citation: 10,
      area: 'MATH',
      category: 'MATH'
   },
   {
      key: '5',
      name: 'Title',
      date: '12.12.2022',
      type: 'Article',
      index: 'SCPS',
      citation: 10,
      area: 'RUSS',
      category: 'RUSS'
   },
   {
      key: '6',
      name: 'Title',
      date: '12.12.2022',
      type: 'Essay',
      index: 'SCPS',
      citation: 10,
      area: 'LIT',
      category: 'LIT'
   },
]

function PublicationFraction(props) {

   const classes = useStyles()
   const { change } = props

   const config = {
      data: change ? data2 : data,
      height: 200,
      xField: 'year',
      yField: 'value',
      xAxis: {
         grid: {
            line: {
               style: {
                  lineWidth: 0,

               },
            },
         },
         line: {
            style: {
               lineWidth: 0,
            },
         },
         tickLine: {
            style: {
               lineWidth: 0,
            },
         },
         label: {
            style: {
               fill: '#FFFFFF'
            }
         }
      },
      columnStyle: {
         lineWidth: 16,
      },
      legend: {
         position: 'bottom-left',
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
      yAxis: {
         grid: {
            line: {
               style: {
                  lineWidth: 0,

               },
            },
         },
         line: {
            style: {
               lineWidth: 0,

            },
         },
         tickLine: {
            style: {
               lineWidth: 0,
            },
         },
      },
   }

   return (
      <div className={classes.chart_wrapper}>
         <div className={classes.chart_header}>
            <h3 className={classes.header_title}>Публикации фракционным счетом</h3>
         </div>

         <div className={classes.chart}>
            <BarChart config={config} />
         </div>

         <Table pagination={{ position: ['none', 'none'] }} size='small' className={classes.table} dataSource={change ? dataSource2 : dataSource} columns={columns} />;
      </div>
   )
}

export default connect((state) => state.charts, { changeData })(PublicationFraction);