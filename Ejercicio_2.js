function suma(array){
    var sum=0;
    for(let i of array){
        sum+=i;
    }
    return("suma: "+ sum+", promedio: "+(sum/array.length));
}