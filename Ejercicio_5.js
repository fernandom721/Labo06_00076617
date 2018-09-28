function countBy(items, groupName){
    let counts=[];
    for(let item of items)
        let name = groupName(item);
        let know = counts.find.index(c => c.name == name);
        if(know == -1){
            counts.push({name,conut:1});
        }
        else{
            count[know].count++;
        }
        return counts;
}