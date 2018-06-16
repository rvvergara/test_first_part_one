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
        multiply: function(num){
            if(this.display) this.display*=num;
            else return 0;
        }
    }
}