const EventEmmiter = require('events');
class MyEmmiter extends EventEmmiter {}
const myEmmiter = new MyEmmiter();
myEmmiter.on('waterFull', () => {
    console.log("please turn off the motor!");
    setTimeout(() => {
        console.log("please turn off the motor! its a gentle reminder");

    }, 3000);

});
console.log("the script is running");
myEmmiter.emit('waterFull');
console.log("the script is still running");