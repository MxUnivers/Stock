import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Formik } from 'formik';
 import * as Yup from 'yup';
import axios from 'axios';

export default function UserDelete(props) {
  const navigate = useNavigate("");
  const  userValue = localStorage.getItem("user").split(",");
  var choix;
  return (
   
<div className="bg-white shadow overflow-hidden sm:rounded-lg container">
<div className="px-4 py-5 sm:px-6 bg-red-100">
  <h3 className="text-lg leading-6 font-medium text-gray-900">Suppimer Utilisateur </h3>
  <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details </p>
</div>
<div className="border-t border-gray-200">
   
  <dl>
  <Formik
  initialValues={{ firstname: userValue[0], lastname: userValue[1], email: userValue[2] }}
  validationSchema={Yup.object({
    firstname: Yup.string()
      .max(150, 'Must be 15 characters or less')
      .required('Required'),
    lastname: Yup.string()
      .max(200, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
  })}
  onSubmit={(values, { setSubmitting }) => {
    
    
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
      // choix *****************************
      choix = window.confirm("Etes vous sur de vouloir supprimer Cet utilisateur");
      
      if(choix == true){
        axios({
          url :"http://localhost:8080/api/user/delete-user" ,
          method:"POST",
          data: JSON.stringify(values, null, 2)
        }).then((res)=>{
          alert("suppression reussi avec succées  "+JSON.stringify(values, null, 2) );
          navigate("/");
        })
        .catch(()=>{alert("Echec de la Suppression !!!")});

      }else{
        return;
      }
      
    }, 400);
  }}
>
  {formik => (
    <form onSubmit={formik.handleSubmit}>
    
     
      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <label className="text-sm font-medium text-gray-500" htmlFor="firstname">Nom :</label>
      <input className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2" id="email" type="text"  {...formik.getFieldProps('firstname')} readOnly  />
      
    </div>
    {formik.touched.firstname && formik.errors.firstname ? (
      <div>{formik.errors.firstname}</div>
    ) : null}

      
    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <label className="text-sm font-medium text-gray-500" htmlFor="lastname">Prénoms :</label>
      <input className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2" id="lastname" type="text" {...formik.getFieldProps('lastname')}  readOnly/>
    </div>
    {formik.touched.lastname && formik.errors.lastname ? (
      <div>{formik.errors.lastname}</div>
    ) : null}


    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <label className="text-sm font-medium text-gray-500" htmlFor="email">Tel/Email address</label>
      <input className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2" id="email" type="email" {...formik.getFieldProps('email')}  readOnly/>
    </div>
    {formik.touched.email && formik.errors.email ? (
      <div>{formik.errors.email}</div>
    ) : null}


    <div className='relative m-2 flex row justify-center'>
          <Link to={props.to} ><button  type='button' className=" block w-24 bg-blue-600 hover:bg-blue-400  py-2 rounded-2xl text-white font-semibold m-2">retour</button>
          </Link>
         <button  type='submit' className=" block w-24 bg-red-600 hover:bg-red-400  py-2 rounded-2xl text-white font-semibold m-2">Supprimer</button>
    </div>
    </form>
  )}
</Formik>     
        
    
    
  </dl>
</div>
</div>

  )
}
