var btn_close_add_user =  document.getElementById("close-add") ;
var btn_close_add_user_confirm =  document.getElementById("close-add-confirm") ; 
var btn_close_delete_user =  document.getElementById("close-user-break") ;
var btn_close_user_delete =  document.getElementById("close-delete") ;
var btn_close_update =  document.getElementById("close_update") ;


var btn_add_user = document.getElementById("btn-add-user");
var btn_add_cancel = document.getElementById("btn-add-cancel")
var btn_add_save = document.getElementById("btn-add-save");

var confirm_add = document.querySelector(".container-confirm-infomations")

var add_user = document.querySelector(".add-user") ;

btn_add_user.onclick = ()=>{
    add_user.style.transition="2s";
        add_user.style.display="initial";  
}
btn_close_add_user.onclick= ()=>{
    add_user.style.display="none";
}
btn_add_cancel.onclick = ()=>{
    add_user.style.display = 'none';
}

// confirm append user; 
btn_add_save.onclick = ()=>{
    add_user.style.display="none";
    confirm_add.style.display="initial";
}
