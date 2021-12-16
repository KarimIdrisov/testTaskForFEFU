import React from 'react'
import { createUseStyles } from 'react-jss'
import { Form, Button, Select, DatePicker } from 'antd'
import { changeData } from '../../store/actions';
import { connect } from 'react-redux';

const useStyles = createUseStyles({
   form_wrapper: {
      height: '660px',
      width: '100%',
      padding: '5px',

      fontFamily: 'Roboto',

      background: '#2F3B52',
      borderRadius: '5px',
   },
   form_title: {
      padding: '8px',
      marginBottom: '16px',

      color: '#ffffff',
      fontWeight: '500',
      fontSize: '22px',
      lineHeight: '24px',
      textAlign: 'center'
   },
   form_item: {
      padding: '0 18px',
      marginBottom: '14px'
   },
   form_button: {
      padding: '0 18px',
      marginTop: '32px',
      width: '100%',

      textTransform: 'uppercase'
   }
})

function Filters(props) {

   const classes = useStyles()
   const { changeData } = props

   const applyFilters = () => {
      changeData()
   }

   return (
      <div className={classes.form_wrapper}>
         <h2 className={classes.form_title}>Фильтры</h2>

         <Form
            name="filters"
            initialValues={{ remember: true }}
            autoComplete="off"
            layout="vertical"
            onFinish={applyFilters}
            className={classes.form}
         >

            <Form.Item
               label="Источник данных"
               name="source"
               className={classes.form_item}
            >
               <Select>
                  <Select.Option value="scopus">Scopus</Select.Option>
                  <Select.Option value="wos">Web of science</Select.Option>
                  <Select.Option value="priority">Приоритет-2030</Select.Option>
               </Select>
            </Form.Item>

            <Form.Item className={classes.form_item} label="Публикаций за время">
               <DatePicker placeholder='' />
            </Form.Item>

            <Form.Item label="Тип публикации" name="type" className={classes.form_item}>
               <Select mode="multiple">
                  <Select.Option value="1">Article</Select.Option>
                  <Select.Option value="2">Article</Select.Option>
                  <Select.Option value="3">Article</Select.Option>
               </Select>
            </Form.Item>

            <Form.Item label="Индексы / Конференции" name="index" className={classes.form_item}>
               <Select mode="multiple">
                  <Select.Option value="1">SCPS</Select.Option>
                  <Select.Option value="2">SCPS</Select.Option>
                  <Select.Option value="3">SCPS</Select.Option>
               </Select>
            </Form.Item>

            <Form.Item label="Квартиль публикаций" name="time" className={classes.form_item}>
               <Select mode="multiple">
                  <Select.Option value="1">1</Select.Option>
                  <Select.Option value="2">2</Select.Option>
                  <Select.Option value="3">3</Select.Option>
                  <Select.Option value="3">4</Select.Option>
               </Select>
            </Form.Item>
            <Form.Item label="Институт (школа)" name="school" className={classes.form_item}>
               <Select >
                  <Select.Option value="1">ШЕН</Select.Option>
                  <Select.Option value="2">ЮШ</Select.Option>
                  <Select.Option value="3">ПИ</Select.Option>
                  <Select.Option value="3">ШБМ</Select.Option>
               </Select>
            </Form.Item>

            <Form.Item className={classes.form_button}>
               <Button type="primary" htmlType="submit" className='btn-apply'>
                  Применить
               </Button>
            </Form.Item>

            <Form.Item className={classes.form_button} >
               <Button type="primary" htmlType="reset" className='btn-reset'>
                  Сбросить
               </Button>
            </Form.Item>
         </Form>
      </div>
   )
}

export default connect((state) => state.charts, { changeData })(Filters);