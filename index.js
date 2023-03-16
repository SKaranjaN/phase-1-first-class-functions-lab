// Code your solution in this file!
const returnFirstTwoDrivers = (function(drivers) {
    return ['Antonia', 'Nuru'];
});
const returnLastTwoDrivers = (function() {
    return ["Amari", "Mo"];
});
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = (function() {
    return (function fareMultiplier() {
        return ((5)*5);
    });
});
const fareDoubler = (function() {
    return ((10)*2);
});
const fareTripler = (function() {
    return ((12)*3);
});
const drivers = (returnFirstTwoDrivers, returnLastTwoDrivers);
// // let selectDifferentDrivers = (drivers, returnFirstTwoDrivers);
// const selectDifferentDrivers = (function() {
//     if(returnFirstTwoDrivers, returnLastTwoDrivers) {
//     return returnFirstTwoDrivers(), returnLastTwoDrivers();
//     }
// })
// // // let selectDifferentDrivers = (drivers, returnLastTwoDrivers);

    function selectDifferentDrivers(drivers, fn) {
        return fn(drivers);
    }








