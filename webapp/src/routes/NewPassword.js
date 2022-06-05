import React  ,{useNavigate} from 'react';
import  {Formik} from  'formik';
import * as Yup from 'yup'


export default function NewPassword() {
  return (
      <div class="w-full md:w px-3 mb-6 md:mb-0">  
          
        
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        
         <div class="w-full  px-3 mb-6 md:mb-0" >
         <div className="text-lg underline">
         <h1>Reset password</h1>
         </div>  

         <div class="flex flex-col mb-6">
               <div>
                 <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800">Email</label>
               </div>
               <div>
                  <input type="email" id="password" class="appearance-none block w-full bg-gray-200 text-white border  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-500 focus:border-green-500 rounded-lg" required=""/>
               </div>
        </div>

            <div class="flex flex-col mb-6">
               <div>
                 <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800">Your password</label>
               </div>
               <div>
                  <input type="password" id="password" class="appearance-none block w-full bg-gray-200 text-white border  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-500 focus:border-green-500 rounded-lg" required=""/>
               </div>
           </div>

            <div class="mb-6">
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800">Confirm password</label>
                <input type="password" id="password" class="appearance-none block w-full bg-gray-200 text-white border  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-500 focus:border-green-500 rounded-lg" required=""/>
            </div>
            <div class="flex items-start mb-6">
               <label for="terms" class="ml-2 text-sm font-medium text-blue-400 "> <input type="checkbox" /> show password <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
            </div>
            <div>
               <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">reset password</button>
            </div>
         </div>

            
      </form>

        
      </div>
    
  );
}
