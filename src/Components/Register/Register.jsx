

import { useFormik } from 'formik'
import * as Yup from 'yup';



export default function Register() {
  function registerSubmit(values) {
    console.log(values);
  }
  const phoneRegExp =/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  let validationSchema = Yup.object({
    name: Yup.string().min(3, "name minlength is 3").max(10, "name maxlength is 10").required("name is required"),
    email: Yup.string().email("email is invalid").required("email is required"),
    phone: Yup.string().matches(phoneRegExp, "phone is invalid").required("phone is required"),
    password: Yup.string().matches(/^[A-Z][a-z0-9]{5,10}$/, "password start with uppercase").required("password is required"),
    repassword: Yup.string().oneOf([Yup.ref("password")], "Password must match").required("repassword is required"),
  });
  let formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      password: "",
      repassword: "",
    },
    validationSchema,
    onSubmit: () => registerSubmit,
  });

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
 
 
  
  return (
    <>
    <h1>welcome</h1>
    <div className='w-75 mx-auto py-5'>
      <h3>register Now</h3>
    <form onSubmit={formik.handleSubmit}>

      <label htmlFor="name">name</label>
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} className='form-control mb-2' type="text" name="name" id="name"/>
      {formik.errors.name && formik.touched.name && 
      (<div className="alert alert-danger mt-2 p-2">{formik.errors.name}</div>)}

      <label htmlFor="email">email</label>
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} className='form-control' type="email" name="email" id="email"/>
      {formik.errors.email && formik.touched.email && 
      (<div className="alert alert-danger mt-2 p-2">{formik.errors.email}</div>)}

      <label htmlFor="phone">phone</label>
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.phone} className='form-control' type="tel" name="phone" id="phone"/>
      {formik.errors.phone && formik.touched.phone && 
      (<div className="alert alert-danger mt-2 p-2">{formik.errors.phone}</div>)}

      <label htmlFor="password">password</label>
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} className='form-control mb-2' type="password" name="password" id="password"/>
      {formik.errors.password && formik.touched.password && 
      (<div className="alert alert-danger mt-2 p-2">{formik.errors.password}</div>)}

      <label htmlFor="repassword">repassword</label>
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.repassword} className='form-control' type="password" name="repassword" id="repassword"/>
      {formik.errors.repassword && formik.touched.repassword && 
      (<div className="alert alert-danger mt-2 p-2">{formik.errors.repassword}</div>)}
     <button disabled={!(formik.isValid || formik.dirty)} className="btn bg-success text-white mt-2" type="submit">Register</button>
    </form>
    </div>
  
    </>
  );
}
