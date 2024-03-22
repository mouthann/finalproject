
import { useFormik } from 'formik'
import React from 'react'

export default function Register() {
  function submitRegister () {
    console.log('submit')
  }
 let formik = useFormik({
  initialValues: {
   name: '',
   phone:'',
   email: '',
   password:'',
   repassword:'',
  },
  onSubmit: submitRegister( ) 
 })
 
  
  return (
    <>
    <h1>welcome</h1>
    <div className='w-75 mx-auto py-5'>
      <h3>register Now</h3>
    <form onSubmit={formik.handleSubmit}>

      <label htmlFor="name">name</label>
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} className='form-control' type="text" name="name" id="name"/>
      <label htmlFor="email">email</label>
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} className='form-control' type="email" name="email" id="email"/>
      <label htmlFor="phone">phone</label>
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.phone} className='form-control' type="tel" name="phone" id="phone"/>
      <label htmlFor="password">password</label>
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} className='form-control' type="password" name="password" id="password"/>
      <label htmlFor="repassword">repassword</label>
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.repassword} className='form-control' type="repassword" name="password" id="repassword"/>
     <button type='submit' className='btn bg-primary text-white mt-2'>Register</button>
    </form>
    </div>
  
    </>
  )
}
