function clave(cadena){
    var cod="";
    for(let i of cadena){
        if(i=="m"){
            cod+=0;
        }
        else if(i=="u"){
            cod+=1;
        }
        else if(i=="r"){
            cod+=2;
        }
        else if(i=="c"){
            cod+=3;
        }
        else if(i=="i"){
            cod+=4;
        }
        else if(i=="e"){
            cod+=5;
        }
        else if(i=="l"){
            cod+=6;
        }
        else if(i=="a"){
            cod+=7;
        }
        else if(i=="g"){
            cod+=8;
        }
        else if(i=="o"){
            cod+=9;
        }
        else{
            cod+=i;
        }
    }
    return cod;
}