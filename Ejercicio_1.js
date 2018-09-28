function repeat(array,x){
    var cont =0;
    for (let i of array){
        if(x==i){
            cont+=1;
        }
    }
    return("El numero " +x+" aparece "+cont+" veces");
}