// Can be use to specify more than one type "|"
var score;
score = 3;
score = "3";
var arpita = {
    name: "arpita",
    id: 63
};
arpita = { username: "a", id: 63 };
function getDbId(id) {
    // making some API calls
    console.log("DB id is: ".concat(id));
}
getDbId(3);
getDbId("3");
