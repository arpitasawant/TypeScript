var score = [];
var names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
// identityThree("3");
// identityThree(3);
function identityFour(val) {
    return val;
}
// identityFour<Bottle>({brand:"zara",type:3})
// Generic in array and arrow function
function getSearchProducts(products) {
    // some database operations
    var myIndex = 3;
    return products[myIndex];
}
var getMore = function (products) {
    var myIndex = 4;
    return products[myIndex];
};
