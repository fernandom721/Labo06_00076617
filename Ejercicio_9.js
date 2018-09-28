function random(x){
    var arr=[];
    var n=Math.floor(Math.random()*21);
    for(let i=0;i<20;i++){
        arr.push(Math.floor(Math.random()*101));
    }
    if(x==arr[n]){
        return "Correcto";
    }
    else{
        return "Nel";
    }
}