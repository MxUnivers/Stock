
import React  , {useState ,  useEffect } from 'react'
import {Link} from  "react-router-dom";
import axios from "axios"
import {Formik} from  "formik"
import * as Yup from 'yup';

export default function UserSearch(props) {


  const  [data  ,  setData ] =  useState([]) ; 
  const [lien_url  , setLienUrl]  =  useState("http://localhost:8080/api/user/get-user");
  useEffect( ()=>{
    const  fectchData =  async()=>{
      const  result  =  await axios({url : "http://localhost:8080/api/user/get-user" , method : 'GET'});
          setData(result.data) ;
          console.log(result.data)
      }     
      fectchData();
      alert(lien_url);
  } , []);
  
  return (
    <div>
        <div><h1>rechercher</h1></div>
        <div>
             <div>
             <Formik
             initialValues={{ firstname: '' }}
             validationSchema={Yup.object({firstname: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
             })}
             onSubmit={(values, { setSubmitting }) => {setTimeout(() => {alert(JSON.stringify(values, null, 2));
                 setSubmitting(false);
                 setLienUrl("http://localhost:8080/api/user/get-user")
                 axios({url : lien_url , method:"POST" , data:JSON.stringify(values,null,2) ,headers:{"Content-Type":"application/json"}})
                 .then((res)=> {alert(res.json()) ;  setLienUrl("http://localhost:8080/api/user/get-user")  ;}).catch(()=>{alert(lien_url)});
               }, 400);
             }}
           >
             {formik => (
               <form onSubmit={formik.handleSubmit}>
               <label htmlFor="firstname">First Name</label>
               <input id="firstname" type="text" {...formik.getFieldProps('firstname')}/>
               {formik.touched.firstname && formik.errors.firstname ? (
                 <div>{formik.errors.firstname}</div>
               ) : null}
               <button type="submit">Rechercher</button>
               </form>)}
            </Formik>
             </div>
        </div>
        
      <div>
      <table className="min-w-full border-collapse block md:table">
      <thead className="block md:table-header-group">
        <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
          <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Nom</th>
          <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Prenoms</th>
          <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Adress email</th>
   
          <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Actions</th>
        </tr>
      </thead>
      <tbody className="block md:table-row-group">
        { 
          data.map((item ,  index)=>{
            return(
             <tr className="bg-gray-300 border border-grey-500 md:border-none block md:table-row hover:bg-gray-100" key={index}>
             <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell "><span className="inline-block w-1/3 md:hidden font-bold">Name</span>{item.firstname}</td>
             <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">User Name</span>{item.lastname}</td>
             <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Email Address</span>{item.email}</td>

             <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
               <span className="inline-block w-1/3 md:hidden font-bold">Actions</span>
               <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded mx-2" onClick={()=>localStorage.setItem("user" ,[item.firstname ,item.lastname ,item.email ,item._id])}><Link to={props.toEdit}>Edit</Link></button>
               <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded mx-2" onClick={()=>localStorage.setItem("user" ,[item.firstname ,item.lastname ,item.email])}><Link to={props.toDel}>Delete</Link></button>
               <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-1 px-2 border border-orange-500 rounded mx-2"  >Bloquer</button>
               <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 border border-gray-500 rounded mx-2">details</button>  
             </td>
           </tr>		  
            )
            
          }
           
          ) 
        }	
      </tbody>
    </table>
      </div>
    
    </div>
  )
}
