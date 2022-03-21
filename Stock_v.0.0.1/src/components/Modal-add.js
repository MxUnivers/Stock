import { getValue } from '@testing-library/user-event/dist/utils'
import React, { useState }  from 'react'

export default function Modal_add(props) {

   
      function CleanValue(){
        var value1 = document.getElementById('val-add-1');
        var value2 = document.getElementById('val-add-2');
        var value3 = document.getElementById('val-add-3');


        value1.value="" ; value2.value="" ; value3.value="";

      }

  return (
      
    <div  className="add-user border  " style={{visibility:props. visible ? 'initial' : 'hidden' , display:'flex' , background: 'rgba(255, 255, 255, 0.2)' ,backdropFilter: 'blur(8px)',  justifyContent:'center' ,  alignItems:'center'}}  >


    
         
      <div className='border sm  shadow lg' style={{height:'500px' ,background:'white' ,width:'70%' }}>
      
      <div  >
           
            <div className="close" onClick={props.cache} ><h3>X</h3></div>
         
            <div className="container">
              <h4>Ajouter utilisateur</h4>
            </div>
              

            <hr className="container"></hr>

            <div  className="form-group center container ">
               <div>
                   <div><label>nom</label></div>
                   <input type="text" id='val-add-1' className="form-control" required></input>
               </div>

               <div>
                   <div><label>Prénoms</label></div>
                   <input type="text" id='val-add-2' className="form-control" required></input>
               </div>

               <div>
                   <div><label>tel / Email</label></div>
                   <input type="text" id='val-add-3' className="form-control" required></input>
               </div>
              

               <div className="text-center"><button type="submit" className="text-center btn btn-lg btn-success" onClick={props.cacheAdd}>Ajouter</button></div>
               
               <div className="container">
                  <hr className="container"></hr>
                  <button  type="button"className="btn btn-secondary" onClick={CleanValue} > effacer</button>
                  <button type="button" className="btn btn-danger" id="btn-add-cancel" onClick={props.cacheAdd}>retour</button>
               </div>

               
        </div>
      
      </div>


         


</div>
    
    
    
    
   
    


     
</div>
  )
}
