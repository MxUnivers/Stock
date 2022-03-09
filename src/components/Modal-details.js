
import React, { useState } from 'react'

export default function Modal_details(props) {
     var nombre =[];
     var n =100
     for (var i = 0 ;  i<n ; i++){
         nombre.push(i);
     }


     const[commandes  ,  setCommandes] =  useState(false);
     const[produits  ,  setProduits] = useState(false)

     function showCommandes(){
         {setCommandes({commandes: !commandes})}
     }    

     function showProduits(){
        {setProduits({produits:!produits})}
    }
   

     return (
    <div className='container-fluid container-details' style={{visibility:props. visible ? 'initial' : 'hidden' , }}>
      <div className='close'onClick={props.cache} ><h3>X</h3></div>
       <div className='text-center'><h4>Informations avancés</h4></div>
       <div className='container-fluid info-premier'>
          
          <div className='border '>
             <div className='  form-group col-xs-12 col-md-6 col-sm-4 justify-content-center '>
                 <label>Nom</label>
                 <inpu type='text' className='form-control' readOnly ></inpu>
             </div>
             <div className=' form-group col-xs-12 col-md-6 col-sm-4 justify-content-center '>
                 <label>Nom</label>
                 <inpu type='text' className='form-control' readOnly ></inpu>
             </div>
              <div className=' col-xs-12 col-md-6 col-sm-4 justify-content-center '>
                 <label>Nom</label>
                 <inpu type='text' className='form-control' readOnly></inpu>
             </div>
             
          </div>


          <div className='border shadow lg' style={{height:'70vh',}}>
              <div style={{display:'flex' , flexDirection:'row' , alignItems:'center' ,  justifyContent: 'center'}}>
                  <button  className='btn btn-info' style={{margin:'5px'}} key={1} onClick={showCommandes}>Commandes</button>                  
                  <button  className='btn btn-info' style={{margin:'5px'}} key={2} onClick={showProduits}>Produits enregistrer</button>
              </div>
              <hr className='container'></hr>
              
              <div>
              
                 
                    {
                        commandes == true  ?
                       
                        <div>
                        commandes
                          <div style={{overflowY:'scroll' ,  height:'50vh'}}>
                              {
                                  nombre.map((nbre)=>
                                     <div style={{display:'felx' ,  flexDirection:'row'  ,  height:'20px' , backgroundColor:'whitesmoke'  , margin:'5px' }}>
                                        
                                     </div>
                                  )                                 
                              }
                          </div>
                        </div>
                       :null
                    }
                    
                    {
                      produits == true  ?
                        <div>
                        Produits
                          <div style={{overflowY:'scroll' ,  height:'50vh'}}>
                              {
                                  nombre.map((nbre)=>
                                     <div style={{display:'felx' ,  flexDirection:'row'  ,  height:'20px' , backgroundColor:'whitesmoke'  , margin:'5px' }}>
                                        
                                     </div>
                                  )                                 
                              }
                          </div>
                        </div>
                       :null
                    }



                 {

                 }

              </div>
          </div>





          

       </div>
      
    </div>
  )
}
