import React from 'react'
import { Link } from 'react-router-dom'

export default function UserDelete(props) {
  return (
   
<div class="bg-white shadow overflow-hidden sm:rounded-lg container">
<div class="px-4 py-5 sm:px-6 bg-red-100">
  <h3 class="text-lg leading-6 font-medium text-gray-900">Suppimer Utilisateur</h3>
  <p class="mt-1 max-w-2xl text-sm text-gray-500">Personal details </p>
</div>
<div class="border-t border-gray-200">
  <dl>
    <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <dt class="text-sm font-medium text-gray-500">Nom</dt>
      <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Margot Foster</dd>
    </div>
    <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <dt class="text-sm font-medium text-gray-500">Prénoms</dt>
      <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Backend Developer</dd>
    </div>
    <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <dt class="text-sm font-medium text-gray-500">Tel/Email address</dt>
      <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">margotfoster@example.com</dd>
    </div>

    <div className='relative m-2 flex row justify-center'>
          <Link to={props.to} ><button  type='button' className=" block w-24 bg-blue-600 hover:bg-blue-400  py-2 rounded-2xl text-white font-semibold m-2">retour</button>
          </Link>
         <button  type='button' className=" block w-24 bg-red-600 hover:bg-red-400  py-2 rounded-2xl text-white font-semibold m-2">Supprimer</button>
         </div>
    
    
    
  </dl>
</div>
</div>

  )
}
