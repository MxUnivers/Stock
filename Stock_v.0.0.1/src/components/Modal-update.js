import React from 'react'

export default function Modal_update(props) {


    function CleanValue(){
        var value1 = document.getElementById('val-update-1'); var value2 = document.getElementById('val-update-2');var value3 = document.getElementById('val-update-3');value1.value="" ;value2.value="" ; value3.value="";
      }



  return (
    
    
<div className="container-update " style={{visibility:props.visible ? 'initial' : 'hidden' , display:'flex' , background: 'rgba(255, 255, 255, 0.2)' ,backdropFilter: 'blur(8px)',  justifyContent:'center' ,  alignItems:'center' }}>
    
    <div className='border bg-light shadow lg' style={{height:'100%' ,width:'70%' }}>
         
        <div className="close" id="close" onClick={props.cache}><h3>X</h3></div>
         <div className='text-center'>
            <h3>Mis a jour utilisateur</h3></div>
            <hr className='container'></hr>

            
              
             <div><h4>Informations sur utilisateur</h4></div>
           <div className='border bg-secondary d-flex'>
             <div className='text-light'></div>
               <div>nom : <span className='text-success'>name</span>/</div>
               <div>Prénoms : <span className='text-success'>name</span>/</div>
               <div>Tel ou email : <span className='text-success'>000000</span></div>
           </div>
             
              <div style={{margin:'10px'}}><h4>Appliquer changement</h4></div>
            <div  className="form-group center container  border">

              <div>
                <div><label>nom</label></div>
                  <input type="text" id='val-update-1' className="form-control"></input>
              </div>
              
              <div>
                <div><label>Prénoms</label></div>
                <input type="text" id='val-update-2' className="form-control"></input>
              </div>

              <div>
                 <div><label>Tel / Email</label></div>
                <input type="text" id='val-update-3' className="form-control"></input>
              </div>

           </div>

           <hr className="container"></hr>

           <div className="text-center">
              <button type="button" className="btn btn-success" onClick={props.cache}>Mettre à jour</button>    
           </div>

           <div className='container '>
              <button  className="btn btn-secondary" style={{margin:'5px'}} onClick={CleanValue}>effacer</button>
              <button  className="btn btn-danger" onClick={props.cache}>annuler</button>
           </div>

    </div>
 

</div>

      
    
  )
}
