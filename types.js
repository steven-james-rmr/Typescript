// Boolean
var paidAccount = true;
// Number
var age = 28;
var taxRate = 7.5;
// String
var fullName = "Steven James";
// Array
var ages = [33, 28, 11];
// Tuple
var player;
player = [3, 'Corerra'];
// Enum 
var ApprovalStatus;
(function (ApprovalStatus) {
    ApprovalStatus[ApprovalStatus["Approved"] = 0] = "Approved";
    ApprovalStatus[ApprovalStatus["Pending"] = 1] = "Pending";
    ApprovalStatus[ApprovalStatus["Rejected"] = 2] = "Rejected";
})(ApprovalStatus || (ApprovalStatus = {}));
;
var job = ApprovalStatus.Pending;
// Any 
var apiData = [123, 'Steven', false];
// Void
function printOut(msg) {
    console.log(msg);
}
//# sourceMappingURL=types.js.map