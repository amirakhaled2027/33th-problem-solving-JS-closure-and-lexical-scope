//Write a function that will allow you to do this 
// var addSix = createBase(6);
// addSix(10); //returns 16
// addSix(21); //returns 27

var addSix = createBase(6);

function createBase(num) {
    return function (innerNum) {
        return num + innerNum;
    };
};

console.log(addSix(10));
console.log(addSix(21));


