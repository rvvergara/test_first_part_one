function setPropertiesOnObjLiteral(obj){
    obj.x = 7;
    obj.y = 8;
    obj.onePlus = function(num){
        return ++num;
    }
}

function setPropertiesOnArrayObj(arr){
    arr.hello = function(){
        return "Hello!";
    };
    arr.full = "stack";
    arr[0] = 5;
    arr.twoTimes = function(num){
        return num * 2;
    }
}

function setPropertiesOnFunctionObj(fn){
    fn.year = 2015;
    fn.divideByTwo = function(num){
        return num/2;
    };
    fn.prototype.helloWorld = function(){
        return "Hello World";
    };
    return fn();    
}