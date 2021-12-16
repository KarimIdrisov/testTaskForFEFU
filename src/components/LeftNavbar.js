import React from 'react'
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom'
import { changeActivePage } from '../store/actions';

import athenaLogo from '../assets/athena_logo.svg'
import prioriteLogo from '../assets/priorite.svg'
import scopusLogo from '../assets/scopus.svg'
import wosLogo from '../assets/wos.svg'
import reviewLogo from '../assets/review.svg'
import authorLogo from '../assets/author.svg'
import publicationsLogo from '../assets/publications.svg'
import citationLogo from '../assets/citation.svg'
import journalsLogo from '../assets/journals.svg'
import kvartilsLogo from '../assets/kvartils.svg'
import knowledgesLogo from '../assets/knowledges.svg'
import affiliaciLogo from '../assets/affiliaci.svg'
import collectivesLogo from '../assets/collectives.svg'
import subcollectivesLogo from '../assets/subcollectives.svg'

import { createUseStyles } from 'react-jss'
import { connect } from 'react-redux';

const useStyles = createUseStyles({
   logo: {
      margin: '165px 15px 14px 15px',

   },
   dashboardHeader: {
      textAlign: 'center',
   },
   dashboardTitle: {
      color: '#869AAC',
      fontSize: '17px',
      fontWeight: '900',
   },
   dashboardSubtitle: {
      marginBottom: "70px",

      color: '#869AAC',
      fontSize: '12px',
      fontWeight: 'bold',
   },
   menuGroup: {
      marginBottom: "50px",
      color: '#869AAC',

      background: '#242E42',
      boxShadow: '4px 4px 4px 2px rgba(0, 0, 0, 0.15)',
      borderRight: 'none'
   },
   left_navbar: {
      fontFamily: 'Roboto',

      background: '#242E42',
      boxShadow: '4px 4px 4px 2px rgba(0, 0, 0, 0.15)'
   },
   menuTitle: {
      color: '#869AAC',
      fontSize: '17px',
      fontWeight: '900',
      lineHeight: '20px',

      marginLeft: '34px'
   }
})

function LeftNavbar(props) {
   const classes = useStyles()

   const scopusPages = [
      {
         icon: reviewLogo,
         title: 'Обзор'
      },
      {
         icon: authorLogo,
         title: 'Авторы'
      },
      {
         icon: publicationsLogo,
         title: 'Публикации'
      },
      {
         icon: citationLogo,
         title: 'Цитирования'
      },
      {
         icon: journalsLogo,
         title: 'Журналы'
      },
      {
         icon: kvartilsLogo,
         title: 'Квартили'
      },
      {
         icon: knowledgesLogo,
         title: 'Области знаний'
      },
      {
         icon: affiliaciLogo,
         title: 'Аффилиации'
      },
      {
         icon: collectivesLogo,
         title: 'Коллективы'
      },
      {
         icon: subcollectivesLogo,
         title: 'Подразделения'
      }
   ]

   const dashboards = [
      {
         icon: scopusLogo,
         title: 'SCOPUS',
         link: '/scopus',
         page: 'scopus',
         pages: scopusPages
      },
      {
         icon: wosLogo,
         title: 'WEB OF SCIENCE',
         link: '/wos',
         page: 'wos',
         pages: []
      },
      {
         icon: prioriteLogo,
         title: 'ПРИОРИТЕТ-2030',
         link: '/priority',
         page: 'priority',
         pages: []
      }]

   // set active page
   const pagesSelectedKeys = ['0']
   const { page, pages, changeActivePage } = props
   const dashboardSelectedKeys = []
   dashboards.forEach((dashboardItem, index) => {
      if (dashboardItem.page === page) {
         dashboardSelectedKeys.push(index.toString())
      }
   })

   const updateState = (page, pages) => {
      changeActivePage(page, pages)
   }

   return (
      <Layout.Sider trigger={null} className={classes.left_navbar}>
         <div className={classes.dashboardHeader}>
            <img src={athenaLogo} alt="Athena logo" className={classes.logo} />
            <h3 className={classes.dashboardTitle}>Athena</h3>
            <h4 className={classes.dashboardSubtitle}>FEFU Science Dashboard</h4>
         </div>

         <Menu mode="vertical" selectedKeys={dashboardSelectedKeys} className={classes.menuGroup}>
            <h2 className={classes.menuTitle}>Dashboards</h2>
            {dashboards.map((dashboardItem, key) => {
               return (
                  <Menu.Item key={key} icon={<img src={dashboardItem.icon} alt="dashboard icon" />} onClick={() => updateState(dashboardItem.page, dashboardItem.pages)}>
                     <Link to={dashboardItem.link}>{dashboardItem.title}</Link>
                  </Menu.Item>
               )
            })}
         </Menu>

         {pages.length === 0 ? <></> :
            <Menu mode="vertical" selectedKeys={pagesSelectedKeys} className={classes.menuGroup}>
               <h2 className={classes.menuTitle}>Pages</h2>
               {pages.map((dashboardItem, key) => {
                  return (
                     <Menu.Item key={key} icon={<img src={dashboardItem.icon} alt="page icon" />}>
                        {dashboardItem.title}
                     </Menu.Item>
                  )
               })}
            </Menu>
         }
      </Layout.Sider>
   )
}

export default connect((state) => state.activePage, { changeActivePage })(LeftNavbar);