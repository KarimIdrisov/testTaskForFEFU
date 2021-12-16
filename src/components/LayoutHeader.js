import React from 'react'
import { Menu, Layout, Space, Dropdown, Tooltip } from 'antd';
import { QuestionCircleFilled, MailFilled, BellFilled, CaretDownOutlined } from '@ant-design/icons';
import notificationNoCheck from '../assets/notificationNoRead.svg'

import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
   header: {
      padding: '10.5px',
      display: 'flex',
      justifyContent: 'end',
      alignItems: 'center',

      background: '#242E42',
      borderBottom: '1px solid #20293C'
   },
   userSubMenu: {
      color: '#CFD7DB',
      display: 'flex',
      flexDirection: 'row-reverse'
   },
   menu: {
      background: '#242E42',
      borderBottom: '1px solid #20293C'
   },
   button_icon: {
      display: 'flex',
      alignItems: 'center',
      color: '#657D95',

      background: '#242E42',
      fontSize: '24px'
   },
   username: {
      display: 'flex',
      alignItems: 'center',

      color: '#CFD7DB',
      padding: '0 15px'
   },
   dropdown_icon: {
      padding: '2px 5px 0 5px'
   }
})

export default function LayoutHeader() {

   const classes = useStyles()
   let haveNotification = true

   const changeNotificationStatus = () => {
      haveNotification = false
   }

   const menu = (
      <Menu>
         <Menu.Item key="profile">
            <a
               target="_blank"
               href="/"
               rel="noopener noreferrer"
            >
               Профиль
            </a>
         </Menu.Item>
         <Menu.Item key="project">
            <a
               target="_blank"
               href="/"
               rel="noopener noreferrer"
            >
               Настройки
            </a>
         </Menu.Item>
      </Menu>
   );

   return (
      <Layout.Header className={classes.header}>
         <Space size={17}>
            <Tooltip placement="bottom" title='Справка'>
               <QuestionCircleFilled className={classes.button_icon} />
            </Tooltip>
            <Tooltip placement="bottom" title='Почта'>
               <MailFilled className={classes.button_icon} />
            </Tooltip>
            <Tooltip placement="bottom" title='Уведомления'>
               {
                  haveNotification
                     ? <img src={notificationNoCheck} className={classes.button_icon} alt="notifications" onClick={changeNotificationStatus} />
                     : <BellFilled className={classes.button_icon} onClick={changeNotificationStatus} />
               }
            </Tooltip>

         </Space>
         <Dropdown overlay={menu}>
            <div className={classes.username}>
               <span>Username</span>
               <CaretDownOutlined className={classes.dropdown_icon} />
            </div>
         </Dropdown>
      </Layout.Header>
   )
}
