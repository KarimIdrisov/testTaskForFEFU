import React from 'react'
import { createUseStyles } from 'react-jss'
import DashboardsLayout from '../components/DashboardsLayout'
import { Row, Col } from 'antd'
import StatsInfo from '../components/PriorityPage/StatsInfo'
import NprByYears from '../components/PriorityPage/NprByYears'
import StatsForOnePerson from '../components/PriorityPage/StatsForOnePerson'
import PublicationFraction from '../components/PriorityPage/PublicationsFraction'
import Filters from '../components/PriorityPage/Filters'

const useStyles = createUseStyles({
   content_wrapper: {
      margin: '100px 15px 0 40px',
   },
   stats: {
      marginBottom: '50px'
   }
})

export default function PriorityPage() {

   const RecentData = [
      {
         title: 'Последние обновления баз данных',
         data: [
            {
               title: 'Scopus',
               value: '14.12.2021',
            },
            {
               title: 'Web of Science',
               value: '14.12.2021',
            },
            {
               title: '1C',
               value: '14.12.2021',
            }
         ]
      },
      {
         title: 'Информация о НПР на 14.12.2021(1c)',
         data: [
            {
               title: 'Всего по основному месту работу',
               value: '1200',
            },
            {
               title: 'Внешних совместителей',
               value: '300',
            },
            {
               title: 'На условиях почасовой оплаты труда',
               value: '300',
            }
         ]
      },
   ]

   const statsForOnePersonDataPublications = {
      'workers': [
         {
            from: 'Scopus',
            value: 0.5,
            year: 2014
         },
         {
            from: 'Scopus',
            value: 0.3,
            year: 2015
         },
         {
            from: 'Scopus',
            value: 0.6,
            year: 2016
         },
         {
            from: 'Scopus',
            value: 0.2,
            year: 2017
         },
         {
            from: 'Scopus',
            value: 0.1,
            year: 2018
         },
         {
            from: 'Scopus',
            value: 0.8,
            year: 2019
         },
         {
            from: 'Scopus',
            value: 0.5,
            year: 2020
         },
         {
            from: 'Web of Science',
            value: 0.5,
            year: 2014
         },
         {
            from: 'Web of Science',
            value: 0.3,
            year: 2015
         },
         {
            from: 'Web of Science',
            value: 0.53,
            year: 2016
         },
         {
            from: 'Web of Science',
            value: 0.123,
            year: 2017
         },
         {
            from: 'Web of Science',
            value: 0.75,
            year: 2018
         },
         {
            from: 'Web of Science',
            value: 0.4,
            year: 2019
         },
         {
            from: 'Web of Science',
            value: 0.5,
            year: 2020
         },
      ],
      'wage': [
         {
            from: 'Scopus',
            value: 0.5,
            year: 2014
         },
         {
            from: 'Scopus',
            value: 0.3,
            year: 2015
         },
         {
            from: 'Scopus',
            value: 0.3,
            year: 2016
         },
         {
            from: 'Scopus',
            value: 0.2,
            year: 2017
         },
         {
            from: 'Scopus',
            value: 0.1,
            year: 2018
         },
         {
            from: 'Scopus',
            value: 0.5,
            year: 2019
         },
         {
            from: 'Scopus',
            value: 0.5,
            year: 2020
         },
         {
            from: 'Web of Science',
            value: 0.5,
            year: 2014
         },
         {
            from: 'Web of Science',
            value: 0.1,
            year: 2015
         },
         {
            from: 'Web of Science',
            value: 0.6,
            year: 2016
         },
         {
            from: 'Web of Science',
            value: 0.6,
            year: 2017
         },
         {
            from: 'Web of Science',
            value: 0.1,
            year: 2018
         },
         {
            from: 'Web of Science',
            value: 0.7,
            year: 2019
         },
         {
            from: 'Web of Science',
            value: 0.5,
            year: 2020
         },
      ]
   }

   const statsForOnePersonDataCitation = {
      'workers': [
         {
            from: 'Scopus',
            value: 0.5,
            year: 2014
         },
         {
            from: 'Scopus',
            value: 0.3,
            year: 2015
         },
         {
            from: 'Scopus',
            value: 0.6,
            year: 2016
         },
         {
            from: 'Scopus',
            value: 0.2,
            year: 2017
         },
         {
            from: 'Scopus',
            value: 0.1,
            year: 2018
         },
         {
            from: 'Scopus',
            value: 0.8,
            year: 2019
         },
         {
            from: 'Scopus',
            value: 0.5,
            year: 2020
         },
         {
            from: 'Web of Science',
            value: 0.5,
            year: 2014
         },
         {
            from: 'Web of Science',
            value: 0.3,
            year: 2015
         },
         {
            from: 'Web of Science',
            value: 0.53,
            year: 2016
         },
         {
            from: 'Web of Science',
            value: 0.123,
            year: 2017
         },
         {
            from: 'Web of Science',
            value: 0.75,
            year: 2018
         },
         {
            from: 'Web of Science',
            value: 0.4,
            year: 2019
         },
         {
            from: 'Web of Science',
            value: 0.5,
            year: 2020
         },
      ],
      'wage': [
         {
            from: 'Scopus',
            value: 0.5,
            year: 2014
         },
         {
            from: 'Scopus',
            value: 0.3,
            year: 2015
         },
         {
            from: 'Scopus',
            value: 0.3,
            year: 2016
         },
         {
            from: 'Scopus',
            value: 0.2,
            year: 2017
         },
         {
            from: 'Scopus',
            value: 0.1,
            year: 2018
         },
         {
            from: 'Scopus',
            value: 0.5,
            year: 2019
         },
         {
            from: 'Scopus',
            value: 0.5,
            year: 2020
         },
         {
            from: 'Web of Science',
            value: 0.5,
            year: 2014
         },
         {
            from: 'Web of Science',
            value: 0.1,
            year: 2015
         },
         {
            from: 'Web of Science',
            value: 0.6,
            year: 2016
         },
         {
            from: 'Web of Science',
            value: 0.6,
            year: 2017
         },
         {
            from: 'Web of Science',
            value: 0.1,
            year: 2018
         },
         {
            from: 'Web of Science',
            value: 0.7,
            year: 2019
         },
         {
            from: 'Web of Science',
            value: 0.5,
            year: 2020
         },
      ]
   }

   const classes = useStyles()

   return (
      <div>
         <DashboardsLayout>

            <div className={classes.content_wrapper}>

               <Row className={classes.stats}>
                  <Col span={10}><StatsInfo stats={RecentData[0]} /></Col>
                  <Col span={10}><StatsInfo stats={RecentData[1]} /></Col>
               </Row>

               <Row className={classes.stats}>
                  <NprByYears />
               </Row>

               <Row className={classes.stats}>
                  <Col span={10}>
                     <StatsForOnePerson
                        title={'Количество публикаций WoS и Scopus на 1 НПР'}
                        name='publications' data={statsForOnePersonDataPublications} />
                  </Col>
                  <Col span={4}></Col>
                  <Col span={10}>
                     <StatsForOnePerson
                        title={'Количество цитирований WoS и Scopus на 1 НПР'}
                        name='citations' data={statsForOnePersonDataCitation} />
                  </Col>
               </Row>

               <Row>
                  <Col span={18}>
                     <PublicationFraction />
                  </Col>
                  <Col span={1} />
                  <Col span={5}>
                     <Filters />
                  </Col>
               </Row>

            </div>

         </DashboardsLayout>
      </div>
   )
}