import React, { useState } from 'react'

export default function Modal_user_stop(props) {
    const [titleFen ,  setTiltleFen]= useState("Utilisateur Bloqués / Hors Services")
    function CleanValue(){
        var value1 = document.getElementById('val-user-stop-1');
        var value2 = document.getElementById('val-user-stop-2');
        var value3 = document.getElementById('val-user-stop-3');
           
        value1.value="" ; value2.value="" ; value3.value="";
        
        }




    return (
    <div className='container-user-stop  ' style={{visibility:props.visible ? 'initial' : 'hidden' , display:'flex' , background: 'rgba(255, 255, 255, 0.2)' ,backdropFilter: 'blur(8px)',  justifyContent:'center' ,  alignItems:'center' }}>
   
     <div className='border bg-light shadow lg' style={{height:'100%' ,width:'80%' }}>
        
        <div className="close" id="close-user-break" onClick={props.cache}><h3>X</h3></div>
        <div className="text-center"><h3>{titleFen}</h3></div>

        
        
        <div className="container">
          <h4 className="text-primary">Recherche</h4>
        </div>

        <hr className="container"></hr>

        
        
        <div className="container-search">
           
           <div className="boite_group">
             <label for="">Nom</label>
             <div><input type="text" id='val-user-stop-1' className="form-control"></input></div>
           </div>

           <div className="boite_group">
             <label for="">Prénoms</label>
             <div><input type="text" id='val-user-stop-2' className="form-control"></input></div>
           </div>


           <div className="boite_group">
             <label for="">Tel / Email</label>
             <div><input type="text" id='val-user-stop-3' className="form-control"></input></div>
          </div>

       
    </div>


    <div className="text-center">
        <button type="button" className="btn btn-primary">Rechercher</button>
        <button type="button"  className=" btn btn-secondary" onClick={CleanValue}> effacer</button>
    </div>


    <hr className="container-fluid"></hr>
     
    <div className="container">
        <div>
            <h4 className="text-danger">Utilisateurs bloqués</h4>
        </div>
        <div className="listes_users bg-white" >
            <div className=" container-fluid" style={{backgroundColor:'Highlight'}}></div>

                <input type="text" className="input-control" style={{margin:'5px'}} readOnly></input>
                <input type="text" className="input-control" style={{margin:'5px'}} readOnly></input>
                <input type="text" className="input-control" style={{margin:'5px'}} readOnly></input>
               

                <button className="btn btn-success" type="button" style={{margin:'5px'}}>débloquer</button>
                <button className="btn btn-danger" type="button" style={{margin:'5px'}}>supprimer</button>
                <button className="btn btn-primary" type="button" style={{margin:'5px'}}>details</button>                

            </div>
            
        </div>

        
     </div>

</div>

      
  )
}
