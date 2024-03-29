
import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup';


export default function Register() {
  function submitRegister (SignupSchema) {
    console.log('submit')
  }
  let SignupSchema = Yup.object({
name:Yup.string().required("Name is required")
 .min(2,'Too Short!').max(20,"Too Long!"),
email :Yup.string().required("Email is required").email("Invalid email"),
password:Yup.string().required("Password is required")
})
function validate (){
  SignupSchema()
  return SignupSchema.validate(this);
}
// other soluton with formik hooks
  // function validate (values){
  //   let phoneRgex=/(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g
  //   let emailRegex= /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  //   let passWordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  //   let errors={};
  //   if (!values.name) {
  //     errors.name = "Name is required!"
  //   }else if(values.name.length < 3) {
  //     errors.name = "Name must be more than two characters"
  //   }else if(values.name.length > 10) {
  //     errors.name = "Name must be inf than 10 caract"
  //   }
  //   if (!values.phone) {
  //     errors.phone = "phone is required!"
  //   }
  //   if (!phoneRgex.test(values.phone)) {
  //     errors.phone = "phone number invalid!"
  //   }
  //   if(!emailRegex.test(values.email)){
  //       errors.email="Email address is not valid!";
  //   }
  //   if(!passWordRegex.test(values.password)){
  //     errors.password="PassWord invalid!";
  // }
  //   return errors;
  // }
 let formik = useFormik({
  initialValues: {
   name: '',
   phone:'',
   email: '',
   password:'',
   repassword:'',
  },
  validate,
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
      {formik.errors.name && formik.touched.name && 
      <div className="alert alert-danger mt-2 p-2">{formik.errors.name}</div>}
      <label htmlFor="email">email</label>
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} className='form-control' type="email" name="email" id="email"/>
      {formik.errors.email && formik.touched.email && 
      <div className="alert alert-danger mt-2 p-2">{formik.errors.email}</div>}
      <label htmlFor="phone">phone</label>
      
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.phone} className='form-control' type="tel" name="phone" id="phone"/>
      {formik.errors.phone && formik.touched.phone && 
      <div className="alert alert-danger mt-2 p-2">{formik.errors.phone}</div>}
      <label htmlFor="password">password</label>
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} className='form-control' type="password" name="password" id="password"/>
      {formik.errors.password && formik.touched.password && 
      <div className="alert alert-danger mt-2 p-2">{formik.errors.password}</div>}
      <label htmlFor="repassword">repassword</label>
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.repassword} className='form-control' type="repassword" name="password" id="repassword"/>
     <button type='submit' className='btn bg-primary text-white mt-2'>Register</button>
    </form>
    </div>
  
    </>
  )
}
