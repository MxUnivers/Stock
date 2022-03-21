import React from 'react'
import {Link} from 'react-router-dom'


function UserList(props) {
  const nombre = [1, 2, 3,4,5,6,7,8]
  return (
    <div className=''>
       <div  className='flex center  row justify-center align-right'>
       <Link to={props.to}><button  type='button' class="block w-96 bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">nouvelle utilisateur</button></Link>
       <Link to={props.toStop}><button  type='button' class="block w-96 bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Utilisateurs Bloqués</button></Link>
       </div>


       

      

     <div className='bg-dark'>Lites des utilisateurs</div>
            
        

     <table class="min-w-full border-collapse block md:table">
         <thead class="block md:table-header-group">
           <tr class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
             <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Name</th>
             <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">User Name</th>
             <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Email Address</th>
      
             <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Actions</th>
           </tr>
         </thead>
         <tbody class="block md:table-row-group">
           {
             nombre.map((nbre)=>{
               return(
                <tr class="bg-gray-300 border border-grey-500 md:border-none block md:table-row hover:bg-gray-100">
                <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell "><span class="inline-block w-1/3 md:hidden font-bold">Name</span>Jamal Rios</td>
                <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">User Name</span>jrios1</td>
                <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Email Address</span>jrios@icloud.com</td>
   
                <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span class="inline-block w-1/3 md:hidden font-bold">Actions</span>
                  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded mx-2"><Link to={props.toEdit}>Edit</Link></button>
                  <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded mx-2"><Link to={props.toDel}>Delete</Link></button>
                  <button class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-1 px-2 border border-orange-500 rounded mx-2">Bloquer</button>
                  <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 border border-gray-500 rounded mx-2">details</button>
   
                </td>
              </tr>		  
               )
             })
           }	
         </tbody>
       </table>
   

      
    </div>
  )
}
export default UserList;
