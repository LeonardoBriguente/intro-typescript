"use strict";
// Tipagem
// number
// O TS aceita tipagem dinâmica, mas não aceita mudança de tipo como no JS
let name_var;
name_var = 123;
name_var = 1.5;
console.log(name_var);
// booleano
let active = false;
// String
let firstName = "Niklaus";
let lastName = "Mickaelson";
let fullName = `${firstName} ${lastName}`; //Os backticks ` ` funcionam para interpolação de valores. Mesma ideia do f"" de PY e ${} do c#
// Enums
//Ideia de uma class
var ROLES;
(function (ROLES) {
    ROLES["MANAGER"] = "manager";
    ROLES["ADMIN"] = "admin";
    ROLES["CEO"] = "CEO";
    ROLES["CTO"] = "CTO";
})(ROLES || (ROLES = {}));
;
console.log(ROLES.CTO);
// Arrays
let names = ["Leonardo", "Lorenzo", 1];
let names1 = ["Leonardo", "Lorenzo"];
let names2 = ["Leonardo", "Lorenzo"];
