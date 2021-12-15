import React from 'react'
import DeviceStatusItem from './DeviceStatusItem'
import { Space } from 'antd'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
   devices_wrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      padding: '5px',

      background: "#131A27",
      borderRadius: '5px'
   }
})


export default function DeviceStatus() {

   const classes = useStyles()

   const dataDevices = [
      {
         value: 174,
         interval: '2010-2020',
         data: [1, 2, 5, 2, 8, 12, 4, 1, 7, 1, 6, 8, 9],
         color: '#05C985'
      },
      {
         value: 109,
         interval: '2010-2020',
         data: [1, 3, 5, 3, 8, 3, 4, 1, 3, 1, 6, 8, 3],
         color: '#EE423D'
      },
      {
         value: 174,
         interval: '2010-2020',
         data: [1, 2, 3, 4, 5, 8, 1, 1, 7, 1, 6, 8, 9],
         color: '#FDCB62',
      },
      {
         value: 34,
         interval: '2010-2020',
         data: [1, 2, 5, 2, 8, 12, 4, 1, 7, 1, 6, 8, 9],
         color: '#843FA0'
      },

   ]

   return (
      <div className={classes.devices_wrapper}>
         {
            dataDevices.map((device) => {
               return (
                  <DeviceStatusItem device={device} />
               )
            })
         }
      </div>
   )
}
