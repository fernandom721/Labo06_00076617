function datatype(array){
    var num;
    var string;
    var object;
    for(let i of array){
        if(typeof i == typeof 2){
            num+=1;
        }
        else if(typeof i == typeof"string"){
            string+=1;
        }
        else if(typeof i == typeof {a:2}){
            object+=1;
        }
    }
    return("num: "+ num+", string: "+string+", object: "+object);
}