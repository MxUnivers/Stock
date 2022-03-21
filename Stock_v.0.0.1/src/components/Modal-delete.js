

import React from 'react'

export default function Modal_Delete(props) {
  return (
    

    
    <div  className="container-delete border " style={{visibility:props.visible ? 'initial' : 'hidden' , display:'flex' , background: 'rgba(255, 255, 255, 0.2)' ,backdropFilter: 'blur(8px)',  justifyContent:'center' ,  alignItems:'center' }}>
       
       <div className='border bg-light shadow lg' style={{height:'500px' ,width:'70%' }}>
          
             <div className="close" onClick={props.cache}><h3>X</h3></div>
             <div className="container">
               <h4>Voulez vous suprimer utilisateur ?</h4>
             </div>

             <hr className="container"></hr>
              
             <div  className="form-group center container ">
                 <div>
                    <div><label>nom</label></div>
                    <input type="text" className="form-control" readOnly></input>
                 </div>

                 <div>
                   <div><label>Prénoms</label></div>
                   <input type="text" className="form-control" readOnly></input>
                 </div>

                 <div>
                   <div><label>Tel / Email </label></div>
                   <input type="text" className="form-control" readOnly></input>
                 </div>
             </div>

             <hr className="container"></hr>

             <div className="text-center">
                <button type="button" className="text-center btn btn-lg btn-danger" onClick={props.cache}>Suppimer </button>
                <button  type="button"className="btn btn-secondary" onClick={props.cache}> effacer</button>
             </div>
    

   </div>


          
    </div>
    
    

   


    
  )
}
