import React from 'react'
import { createUseStyles } from 'react-jss'
import { Select } from 'antd';

import { connect } from 'react-redux';
import { changeCitationsType, changePublicationsType } from '../../store/actions';
import BarChart from '../../charts/BarChart';

const useStyles = createUseStyles({
   chart_wrapper: {
      height: '360px',
      width: '100%',
      padding: '10px',

      background: '#2F3B52',
      borderRadius: '5px',

      fontFamily: 'Roboto',
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
      padding: '30px 12px 5px 20px'
   }
})


function StatsForOnePerson(props) {

   const classes = useStyles()
   const { change } = props

   const dataForExample = [
      {
         from: 'Scopus',
         value: 0.2,
         year: 2014
      },
      {
         from: 'Scopus',
         value: 0.2,
         year: 2015
      },
      {
         from: 'Scopus',
         value: 0.33,
         year: 2016
      },
      {
         from: 'Scopus',
         value: 0.2123,
         year: 2017
      },
      {
         from: 'Scopus',
         value: 0.2131,
         year: 2018
      },
      {
         from: 'Scopus',
         value: 0.2135,
         year: 2019
      },
      {
         from: 'Scopus',
         value: 0.4,
         year: 2020
      },
      {
         from: 'Web of Science',
         value: 0.435,
         year: 2014
      },
      {
         from: 'Web of Science',
         value: 0.2141,
         year: 2015
      },
      {
         from: 'Web of Science',
         value: 0.1236,
         year: 2016
      },
      {
         from: 'Web of Science',
         value: 0.3436,
         year: 2017
      },
      {
         from: 'Web of Science',
         value: 0.3421,
         year: 2018
      },
      {
         from: 'Web of Science',
         value: 0.7324,
         year: 2019
      },
      {
         from: 'Web of Science',
         value: 0.2345,
         year: 2020
      },
   ]

   const { publications_type, citation_type, changePublicationsType, changeCitationsType } = props

   const handleTypeChange = (e) => {
      if (props.name === 'publications') {
         changePublicationsType(e)
      } else {
         changeCitationsType(e)
      }
   }
   const type = props.name === 'publications' ? publications_type : citation_type

   const data = props.data[type]

   const config = {
      data: change ? dataForExample : data,
      height: 240,
      xField: 'year',
      yField: 'value',
      seriesField: 'from',
      isGroup: true,
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
      }
   }

   return (
      <div className={classes.chart_wrapper}>
         <div className={classes.chart_header}>
            <h3 className={classes.header_title}>{props.title}</h3>

            <Select defaultValue="workers" onChange={handleTypeChange}>
               <Select.Option value="workers">По сотрудникам</Select.Option>
               <Select.Option value="wage">По ставкам</Select.Option>
            </Select>
         </div>

         <div className={classes.chart}>
            <BarChart config={config} />
         </div>
      </div>
   )
}

export default connect((state) => state.charts, { changeCitationsType, changePublicationsType })(StatsForOnePerson);