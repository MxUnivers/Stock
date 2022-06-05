import React   ,{useState ,  useEffect} from 'react';
import axios from  "axios" ; 
import {Link} from 'react-router-dom' ;


function UserList(props) {
  
  
  const  [data  ,  setData ] =  useState([]) ; 
  useEffect( ()=>{
    const  fectchData =  async()=>{
      const  result  =  await axios({url : "http://localhost:8080/api/user/get-all-users" , method : 'POST'});
          setData(result.data) ;
          console.log(result.data);
      }     
      fectchData();
  } , []);


  return (
    <div className=''>
       <div  className='flex center  row justify-center align-right contanier '>
          <div></div>
       <Link to={props.to}><button  type='button' className="block w-96 bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">nouvelle utilisateur</button></Link>
       <Link to={props.toStop}><button  type='button' className="block w-96 bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Utilisateurs Bloqués</button></Link>
       </div>  
       
       
       <div className='flex row  bg-black'>
       <div className=" relative m-2 ">
          <input type="text" name="firstname" id="firstname" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="nom"/>
       </div>
       <div className=" relative m-2">
          <input type="text" name="lastname" id="roundedlastname"  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="prénoms"/>
       </div>
       <div className=" relative m-2">
          <input type="email" name="email" id="email"  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="exemple@gmail.com"/>
       </div>
        
       <div className='relative m-2'>
       <button  type='submit' className=" block w-24 bg-indigo-600  py-2 rounded-2xl text-white font-semibold ">rechercher</button>
       </div>
    </div>
   
       
       

      

     <div className='bg-blue-800 text-white text-center'>Lites des utilisateurs</div>

     <table className="min-w-full border-collapse block md:table">
         <thead className="block md:table-header-group">
           <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
             <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Name</th>
             <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">User Name</th>
             <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Email Address</th>
      
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
  )
}
export default UserList;
