

 import React    from  "react" ;
 import  {useNavigate} from  "react-router-dom";
import { Formik } from "formik";
import * as Yup from 'yup';
import axios from "axios";
 

export default function UserAdd(props) {
  const  navigate =  useNavigate("");
  var  choix ;
  
   
// firstname  ,  lastname  ,  code    telephone  ,  email   ,  password
return (
   
  <Formik
    initialValues={{ firstname : '', lastname: '' ,code :'' ,telephone :'', email: '' ,  password:'' }}
    validationSchema={Yup.object({
      firstname: Yup.string()
        .max(100, 'Must be 15 characters or less')
        .required('Required'),
      lastname: Yup.string()
        .max(100, 'Must be 20 characters or less')
        .required('Required'),
      code: Yup.number()
        .required('Required'),
      telephone: Yup.number()
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
    })}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
        // choix 
        choix =  window.confirm("Souhaiter vous faire l'enregistre de votre utilisateur ");
        if(choix  == true ){
          axios({
            url:"http://localhost:8080/api/user/register" ,
            method:"POST",
            headers :{ "Content-Type" :"application/json" },
            data : JSON.stringify(values, null, 2)
         }).then((res)=>{
           alert("Utilisateur cérer avec succés");
           navigate("../");
          }).catch((err)=>alert("Errerur /n soit l'utilisateur existes déja "))
        }else{
          return ;
        }
      }, 400);
    }}
  >
    {formik => (
     <div class="w-screen bg-blue-200 flex justify-center items-center">
      <form onSubmit={formik.handleSubmit} class="w-full bg-white max-w-lg border border-gray-300 shadow-md center px-5 py-2">
         
        <div className="text-lg text-center text-white bg-blue-800 rounded py-3 my-3">
           <h1>Sign in</h1>
        </div>
       
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
          First Name
          </label>
          <input {...formik.getFieldProps('firstname')}  id="firstname" type="text" name="firstname" placeholder="Jane" class="appearance-none block w-full bg-gray-200 text-gray-700 border  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  />
          {formik.touched.firstname && formik.errors.firstname ? (
            <div class="text-red-500 text-xs italic">{formik.errors.firstname} </div>
          ) : null}
        
        </div>

        <div class="w-full md:w-1/2 px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
          Last Name
          </label>
          <input {...formik.getFieldProps('lastname')} id="lastname" name="lastname" type="text" placeholder="Doe" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
          {formik.touched.lastname && formik.errors.lastname ? (
            <div class="text-red-500 text-xs italic">{formik.errors.lastname} </div>
          ) : null}
        </div>
      </div>             
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
          Code 
          </label>
          <input {...formik.getFieldProps('code')} class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="code" type="number" name="code" placeholder="225" />
          {formik.touched.code && formik.errors.code ? (
            <div class="text-red-500 text-xs italic">{formik.errors.code} </div>
          ) : null}
        </div>

        <div class="w-full md:w-1/2 px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
          Telephone
          </label>
          <input {...formik.getFieldProps('telephone')} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="telephone" name="telephone" type="number" placeholder="050528212"/>
          {formik.touched.telephone && formik.errors.telephone ? (
            <div class="text-red-500 text-xs italic">{formik.errors.telephone} </div>
          ) : null}
        </div>
      </div>

   
      

  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Email
      </label>
      <input {...formik.getFieldProps('email')} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" name="email" placeholder="exmple@gmail.com"/>
      {formik.touched.email && formik.errors.email ? (
        <div class="text-red-500 text-xs italic">{formik.errors.email} </div>
      ) : null}
    </div>
  </div>


  <div class="flex flex-wrap -mx-3 mb-6">
  <div class="w-full px-3">
    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
      Password
    </label>
    <input {...formik.getFieldProps('password')} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************"/>
    {formik.touched.password && formik.errors.password ? (
      <div class="text-red-500 text-xs italic">{formik.errors.password} </div>
    ) : null}
  </div>
  </div>
   
   <div>
      <button type="submit" className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
      Sign In
      </button>
  </div>


</form>
</div>
    )}
  </Formik>
);


}
