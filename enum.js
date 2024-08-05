// const AISLE = 0
// const middle = 1
// const WINDOW = 2
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 10] = "AISLE";
    // NOW UNDER THE AISLE WILL GO through increasing order it dont thor error
    SeatChoice[SeatChoice["MIDDLE"] = 11] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 12] = "WINDOW";
    SeatChoice[SeatChoice["FOURTH"] = 13] = "FOURTH";
})(SeatChoice || (SeatChoice = {}));
var seeatChoicetwo;
(function (seeatChoicetwo) {
    seeatChoicetwo["AISLE"] = "asiles";
    // if w dont put value under aisle then it just found of value, cause they can increment, caus upper case is on string so in this case we hae to put alue individually
    seeatChoicetwo["middle"] = "middle";
    seeatChoicetwo["window"] = "window";
})(seeatChoicetwo || (seeatChoicetwo = {}));
