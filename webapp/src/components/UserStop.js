import React from 'react'
import { Link   } from 'react-router-dom'
export default function UserStop(props) {
    const nombre = [1, 2, 3,4,5,6,7,8]
    return (
      <div >
      <div><Link to={"/dashboard"}><button  type='button' className="block w-24 bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2 hover:underline">Retour</button></Link></div>
         
      <div className='flex row  bg-black'>
         <div className=" relative m-2 ">
            <input type="text" id="rounded-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your email"/>
         </div>
         <div className=" relative m-2">
            <input type="text" id="rounded-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your email"/>
         </div>
         <div className=" relative m-2">
            <input type="text" id="rounded-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your email"/>
         </div>
          
         <div className='relative m-2'>
         <button  type='button' className=" block w-24 bg-indigo-600  py-2 rounded-2xl text-white font-semibold ">rechercher</button>
         </div>


        
      </div>
      
       <div className='bg-red-600 flex flex-center text-white h-20 font-10 flex justify-center align-center  '>Lites des utilisateurs Bloqués</div>
              
          
  
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
               nombre.map((nbre)=>{
                 return(
                  <tr className="bg-gray-300 border border-grey-500 md:border-none block md:table-row hover:bg-gray-100">
                  <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell "><span className="inline-block w-1/3 md:hidden font-bold">Name</span>Jamal Rios</td>
                  <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">User Name</span>jrios1</td>
                  <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Email Address</span>jrios@icloud.com</td>
     
                  <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                    <span className="inline-block w-1/3 md:hidden font-bold">Actions</span>
                    <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 border border-green-500 rounded mx-2">Debloquer</button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded mx-2"><Link to={props.toEdit}>Edit</Link></button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded mx-2">Delete</button>
                    <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 border border-gray-500 rounded mx-2">details</button>
     
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
