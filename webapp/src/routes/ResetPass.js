import React from 'react';
import {useNavigate  ,  link} from  "react-router-dom";
import {Formik} from  "formik";
import * as Yup from 'yup';
import axios from "axios";

export default function resetPass() {
  const  navigate = new useNavigate();
  return (
    <div className="h-screen bg-indigo-200 flex justify-center items-center">
    <Formik
    initialValues={{  email: '' ,  resetPass:'' }}
    validationSchema={Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      resetPass: Yup.string().required('Required'),
    })}
    onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
            axios({
              url :"http://localhost:8080/api/auth/verify-reset-code",
              method:"POST",
              data: JSON.stringify(values, null, 2),
              headers :{
                "Content-type":'application/json'
              }
            }).then((res)=>{
              alert(" Verification faite avec succées . Votre code est valid"+JSON.stringify(values, null, 2) );
              navigate("../new-password");

            })
            .catch(()=>{alert("code incorrect , Veillez renseigner le bon gcode renitilisation")});
        }, 400);
      }}
      >
    {formik => (
  <form onSubmit={formik.handleSubmit} className="w-full max-w-xs bg-white flex flex-col py-5 px-8 rounded-lg shadow-lg" >
  <div className="text-center text-red-500 font-bold py-6">Verification de votre email et code de renitialisation </div>
    <label className="text-gray-700 font-bold py-2" for="email">email</label>
    <input {...formik.getFieldProps('email')} className="text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3" type="email" name="email" id="email" placeholder="exemple@gmail.com"/>
    {formik.touched.email && formik.errors.email ? (
      <p className="text-red-500 text-xs italic">{formik.errors.email} </p>
    ) : null}

    <label className="text-gray-700 font-bold py-2" for="resetPass">Code </label>
    <input {...formik.getFieldProps('resetPass')} className="text-gray-700 shadow border rounded border-gray-300 mb-3 py-1 px-3 focus:outline-none focus:shadow-outline font-bold py-4" type="text" name="resetPass" id="resetPass" placeholder="253E62TT27GQ"/>
    {formik.touched.resetPass && formik.errors.resetPass ? (
      <p className="text-red-500 text-xs italic">{formik.errors.resetPass} </p>
    ) : null}
    <div className="flex justify-between items-center my-4">
      <button type="submit" className="bg-blue-500 hover:bg-blue-500 text-white font-bold rounded py-2 px-4 hover:bg-blue-700">
        verification
      </button>
      <button type="button"
       onClick={()=>{
         navigate("../verify-code-reset");
       }} className="bg-blue-500 hover:bg-blue-200 text-white font-bold rounded py-2 px-4 hover:bg-blue-400">
        retour
      </button>
    </div>
    
  </form>
    )}
    </Formik>
</div>
      
  )
}
