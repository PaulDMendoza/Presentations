var math = {
    value: 1, 
    print: function() {
        console.log(this.value);
        return this;
    },   
    multiply: function (amount) {
        this.value *= amount;
        return this;
    },
    subtract: function(amount) {
        this.value -= amount;
        return this;
    }
    
};

math.multiply(10).print().subtract(5).print().subtract(1).print();