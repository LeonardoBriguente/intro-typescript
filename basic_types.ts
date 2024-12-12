// Tipagem
// number
// O TS aceita tipagem dinâmica, mas não aceita mudança de tipo como no JS
let name_var: number;
name_var = 123;
name_var = 1.5;
console.log(name_var);

// booleano
let active: boolean = false;

// String
let firstName = "Niklaus";
let lastName = "Mickaelson";
let fullName: string = `${firstName} ${lastName}`; //Os backticks ` ` funcionam para interpolação de valores. Mesma ideia do f"" de PY e ${} do c#

// Enums
//Ideia de uma class
enum ROLES {
    MANAGER = "manager",
    ADMIN = "admin",
    CEO = "CEO",
    CTO = "CTO"
};
console.log(ROLES.CTO)

// Arrays
let names = ["Leonardo", "Lorenzo", 1];
let names1: string[] = ["Leonardo", "Lorenzo"];
let names2: Array<string> = ["Leonardo", "Lorenzo"];