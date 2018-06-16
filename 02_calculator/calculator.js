function createCalculator(){
    return {
        display: 0,
        value: function(){
            return this.display;
        },
        add: function(num){
            this.display+=num;
        },
        subtract: function(num){
            this.display-=num;
        },
        multiply: function(x,y){
            if(!this.display) this.display+=(x*y)
            else return 0;
        }
    }
}