import React from 'react'
import { createUseStyles } from 'react-jss'
import upIcon from '../assets/up.svg'
import downIcon from '../assets/down.svg'
import { Row, Col } from 'antd'

export default function MainIndicatorsItem(props) {

   const useStyles = createUseStyles({
      ind_title: {
         fontWeight: 900,
         fontSize: '10px',
         lineHeight: "12px",
         letterSpacing: '0.7px',

         color: '#869AAC'
      },
      ind_main_value: {
         marginRight: '6px',

         fontWeight: 300,
         fontSize: '50px',
         lineHeight: "59px",

         color: '#FFFFFF'
      },
      ind_wrapper: {
         width: 300,
         padding: '30px',

         fontFamily: 'Roboto',
         fontStyle: 'normal',

         borderRight: props.divide ? 'none' : '1px solid #131A27'
      },
      ind_move: {
         display: 'flex',
         flexDirection: 'column',
         alignItems: 'center',
         justifyContent: 'center'
      },
      move_value: {
         padding: '5px',

         fontWeight: 'normal',
         fontSize: '12',
         lineHeight: "14px",

         color: '#98A7B9'
      },
      move_dir: {
         padding: '5px'
      }
   })

   const classes = useStyles()

   return (
      <div className={classes.ind_wrapper}>
         <p className={classes.ind_title}>{props.indicator.title}</p>
         <Row>
            <Col className={classes.ind_main_value}>
               {props.indicator.value}
            </Col>
            <Col className={classes.ind_move}>
               <Row className={classes.move_value}>{props.indicator.diff}</Row>
               <Row className={classes.move_dir}>{props.indicator.isUp ? <img src={upIcon} width='14px' height='14px' /> : <img src={downIcon} width='14px' height='14px' />}</Row>
            </Col>
         </Row>
      </div>
   )
}
