import React from 'react'


const MyTextInput =(props)=> {
  return (

    <div class="flex justify-center">
  <div class="mb-3 xl:w-96">
    <label for="exampleFormControlInput1" class="form-label inline-block mb-2 text-gray-700">{props.name}</label>
    <input type={props.type} name={props.name} class={props.className}  placeholder="Example label"/>
  </div>
</div>
  )
}
export default MyTextInput ;