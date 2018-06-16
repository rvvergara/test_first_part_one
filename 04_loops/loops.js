function repeat(str,num){
    if(!num) return ""
    else if(num==1) return str;
    let str2 = ""
    for(let i=num;i>0;i--){
        str2+=str;
    }
    return str2;
}

function sum(arr){
    if(!arr.length) return 0;
    return arr.reduce(function(x,y){
        return x+y;
    })
}

function gridGenerator(num){
    let str="";
    for(let row=0;row<num;row++){
        if(row % 2 === 0){
            for(let col=0;col<num;col++){
                if(col%2===0) str+="#"
                else str+=" ";
            }
        }else{
            for(let col=0;col<num;col++){
                if(col%2===0) str+=" "
                else str+="#";
            }
        }
        str+="\n"    
    }
    return str;    
}

function join(arr,del){
    if(!del) return arr.join("")
    return arr.join(del);
}

function paramify(obj){
    let arr = [];
    for(let prop in obj){
        if(obj.hasOwnProperty(prop)) arr.push(prop+"="+obj[prop]);
    }
    if(arr.length === 0) return "";
    arr.sort();
    return arr.join("&");
}
