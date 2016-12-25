
function Waffle() {

    var ss = arguments.callee;
    console.log(ss);
    console.log(this);
    if (!(this instanceof Waffle)) {
        return new Waffle();
    }
    //var that = Object.create(Waffle.prototype);
    this.name = 'vijay';

}

Waffle.prototype.get = "s";

console.log(new Waffle());
console.log(Waffle());

// var Person = {
//     color: 'red'
// }

// console.log(Person);