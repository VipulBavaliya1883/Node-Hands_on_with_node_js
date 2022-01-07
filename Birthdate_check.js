var events = require('events')
var em = new events.EventEmitter();

em.on('My_Event', function(data){
    function calculate_age(dob) { 
        var diff_ms = Date.now() - dob.getTime();
        var age_dt = new Date(diff_ms); 
      
        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }
    age = calculate_age(new Date(2000, 07, 20));

    if(age >= 18){
        console.log('Age is greater than 18')
    }
    else if(age < 18 && age > 1){
        console.log('Age is less than 18')
    }
    else{
        console.log('Please Enter Valid Age!!!')
    }
});

em.emit('My_Event');