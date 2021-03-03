const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!members){return};
let temp = members.toString().replace(/[^A-Z]/g, '');
return temp.split('').sort().join('');

};
