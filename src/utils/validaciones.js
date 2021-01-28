/****************************************************************************
* Funciones de validación de campos de formulario. String sin números, 
*                 formato de telefono y de email
****************************************************************************/

export function valString(str){
    let err=false;
    let msj='';
    let regex=/[0-9]/g;    
    if(regex.test(str.value)){
        err=true;
        msj=`*El campo ${str.name} no puede contener números`;  
    }    
    return({err,msj})
}

export function valEmail(str){
    let err=false;
    let msj=''
    let regex = /\w+@\w+\.(com|net|org|edu|gov)/
    if(!regex.test(str.value)){
        err=true;
        msj=`*El ${str.name} ingresado no es válido`;  
    }
    return({err,msj})
}

export function valTel(str){
    let err=false;
    let msj=''
    let regex = /[0-9]/g
    if(!regex.test(str.value)){
        err=true;
        msj=`*El ${str.name} ingresado no es válido.`;  
    }
    return({err,msj})
}

