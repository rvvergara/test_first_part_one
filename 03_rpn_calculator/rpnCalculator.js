function RPNCalculator(){
    this.set = [];
}

RPNCalculator.prototype.push = function(num){
    this.set.push(num);
}

RPNCalculator.prototype.plus = function(){
    if(this.set.length<2) throw("rpnCalculator is empty");
    let x = this.set.pop(),
        y = this.set.pop();
    this.set.push(x+y);
}
RPNCalculator.prototype.minus = function(){
    if(this.set.length<2) throw("rpnCalculator is empty");
    let x = this.set.pop(),
        y = this.set.pop();
    this.set.push(y-x);
}
RPNCalculator.prototype.divide = function(){
    if(this.set.length<2) throw("rpnCalculator is empty");
    let x = this.set.pop(),
        y = this.set.pop();
    this.set.push(y/x);
}
RPNCalculator.prototype.times = function(){
    if(this.set.length<2) throw("rpnCalculator is empty");
    let x = this.set.pop(),
        y = this.set.pop();
    this.set.push(x*y);
}

RPNCalculator.prototype.value = function(){
    return this.set[this.set.length-1];
}
