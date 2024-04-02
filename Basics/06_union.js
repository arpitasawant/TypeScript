// Can be use to specify more than one type "|"
var score;
score = 3;
score = "3";
var arpita = {
    name: "arpita",
    id: 63
};
arpita = { username: "a", id: 63 };
// function getDbId(id:number | string){
//     // making some API calls
//     console.log(`DB id is: ${id}`);
// }
getDbId(3);
getDbId("3");
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
var data1 = [1, 2, 3];
var data2 = ["1", "2", "3"];
// Both types in array
var data = ["1", "2", "3", 1];
