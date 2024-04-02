// Narrowing
function detectType(val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}
function provideId(id) {
    if (!id) {
        console.log("please provide id");
        return;
    }
    id.toLowerCase();
}
function printAll(strs) {
    if (strs) {
        if (typeof strs === "object") {
            for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
                var s = strs_1[_i];
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
function isAdminAccount(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}
// instanceOf
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "fish";
    }
    else {
        pet;
        return "bird";
    }
}
function getShape(shape) {
    if (shape.kind === "Circle") {
        return Math.PI * Math.pow(shape.radius, 2);
    }
    return shape.side * shape.side;
}
function getArea(shape) {
    switch (shape.kind) {
        case "Circle":
            return Math.PI * Math.pow(shape.radius, 2);
        case "Square":
            return shape.side * shape.side;
    }
}
