import React  from 'react'
import {useNavigate} from  "react-router-dom";
import {Formik} from  "formik";
import * as Yup from 'yup';
import axios from "axios";

export default function ForgetPass() {
    const navigate =  useNavigate();

  return (
   
    <Formik
    initialValues={{  email: '' }}
    validationSchema={Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
    })}
    onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
          // choix *****************************
            axios({
              url :"http://localhost:8080/api/auth/create-reset-code" ,
              method:"POST",
              data: JSON.stringify(values, null, 2),
              headers :{"Content-Type" :"application/json"},
              
            })
            .then((res)=>{
              alert(" Code Envoyé avec succès ."+JSON.stringify(values, null, 2) );
              navigate("../verify-code-reset");
            })
            .catch(()=>{alert("Code non envoyé Veillez Réesayer !!!")});
        }, 400);
      }}
      >
    {formik => (
      <div className="h-screen bg-indigo-200 flex justify-center items-center">
    
  <form onSubmit={formik.handleSubmit} className="w-full max-w-xs bg-white flex flex-col py-5 px-8 rounded-lg shadow-lg" >
    <div className="text-center text-blue-500 text-xl-4"><h1>Veillez rensigner votre email pour recevoir votre code renitialisation de votre mot de passe</h1></div>
    <label className="text-gray-700 font-bold py-2" for="">email</label>
    <input {...formik.getFieldProps('email')} className="text-gray-700 shadow border rounded border-gray-300 mb-3 py-1 px-3 focus:outline-none focus:shadow-outline" type="email" id="email" name="email" placeholder="exemple@gmail.com"/>
    {formik.touched.email && formik.errors.email ? (
        <p className="text-red-500 text-xs italic">{formik.errors.email} </p>
      ) : null}
    <div className="flex justify-between items-center my-4">
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded py-2 px-4">
        Envoyer
      </button>
      <button  className="bg-blue-100 hover:bg-blue-200 text-black font-bold rounded py-2 px-4"
      onClick={()=>{
          navigate("../");
      }}>
        retour
      </button>
      
    </div>
  </form>
  </div>
  )}
  </Formik>

  )
}