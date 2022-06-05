import React from 'react';
import {Formik} from 'formik' ;
import  *as Yup from  "yup";
import axios from "axios";
import { useNavigate ,  Link } from 'react-router-dom';


export default function Login() {
    const navigate =  useNavigate('');
  return (
    <div classNameName="w-full " >
    
    <Formik
    initialValues={{  email: '' ,  password:'' }}
    validationSchema={Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required('Required')
    })}
    onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
          // choix *****************************
            axios({
              url :"http://localhost:8080/api/auth/Login" ,
              method:"POST",
              data: JSON.stringify(values, null, 2),
              headers:{
                "Content-Type" :"application/json"
              }
            }).then((res)=>{
              alert("Connexion Ressi ."+JSON.stringify(values, null, 2) );
              alert("Enregistrement LocalStorage"+values.email);
              localStorage.setItem("userLogin",values.email)
              navigate("/dashboard");

              

            })
            .catch(()=>{alert("Echec de la Suppression !!!")});
        }, 400);
      }}
      >
    {formik => (
      <div className="h-screen bg-blue-200 flex justify-center items-center">
      <form onSubmit={formik.handleSubmit} className="w-full max-w-xs bg-white flex flex-col py-5 px-8 rounded-lg shadow-lg" >
         <div></div>
        <label className="text-gray-700 font-bold py-2" for="">Email</label>
        <input {...formik.getFieldProps('email')} className="text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3" id="email" name="email" type="email" placeholder="exemple@gmail.com"/>
        {formik.touched.email && formik.errors.email ? (
            <p className="text-red-500 text-xs italic">{formik.errors.email} </p>
          ) : null}
        <label className="text-gray-700 font-bold py-2" for="">Password</label>
        <input {...formik.getFieldProps('password')} className="text-gray-700 shadow border rounded border-gray-300 mb-3 py-1 px-3 focus:outline-none focus:shadow-outline" id="password" name="password" type="password" placeholder="********"/>
        {formik.touched.password && formik.errors.password ? (
            <p className="text-red-500 text-xs italic">{formik.errors.password} </p>
          ) : null}
          <label><input type={'checkbox'} id="checkbox" onClick={()=>{
              var   e = document.getElementById("checkbox").style.checked ;
            if(e == true){
              document.getElementById('password').setAttribute("type",'password');
              e=false ;
            }if (e == false){
              document.getElementById('password').setAttribute("type",'text');
              e = true ;
            }}} /> show password</label>
        <div className="flex justify-between items-center my-4">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded py-2 px-4">
            Login
          </button>
          <Link to='/forget-password' className="text-blue-600 hover:text-blue-800 font-bold" href="#">
            Forgot Password?
          </Link>
        </div>
        
      </form>
    </div>
    
  )}
  </Formik>
  <p classNameName="text-center text-gray-500 text-xs">
    &copy;2022 Acme Corp. All rights reserved.
  </p>
   
</div>
  )
}
